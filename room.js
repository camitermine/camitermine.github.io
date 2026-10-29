/* =========================================================
   Portfolio · modo exploración
   Un estudio en pixel art hecho con Phaser 3. Cada mueble
   interactivo abre un panel con el contenido de data.js.
   Sprites generados con PixelLab (assets/game).
   ========================================================= */

const TILE = 32;
const COLS = 16;
const ROWS = 12;
const WALL = 3;        // filas de pared arriba
const SPEED = 110;
const REACH = 52;      // distancia para poder interactuar

const EMAIL = 'camila.termine@gmail.com';
const SOCIALS = [
  ['LinkedIn', 'https://www.linkedin.com/in/camila-termine'],
  ['GitHub', 'https://github.com/camitermine'],
  ['IMDb', 'https://www.imdb.com/es/name/nm16454992/'],
];

const ROOM_TEXT = {
  es: {
    classic: '← Versión clásica', lang: 'EN', close: 'Cerrar', sections: 'Secciones',
    hint: 'Caminá con WASD o las flechas (o tocá el piso). Acercate a un mueble y apretá E.',
    hintTouch: 'Tocá el piso para caminar y tocá un mueble para abrirlo.',
    labels: {
      desk: 'GenAI', bookshelf: 'Experiencia', tv: 'Proyectos', whiteboard: 'Stack',
      beanbag: 'Sobre mí', corkboard: 'Formación y CV', mailbox: 'Contacto', arcade: 'Tic-Tac-Fade',
    },
    cv: 'Descargar CV (PDF)', video: 'Ver video', steam: 'Ver en Steam', email: 'Escribime',
    ttf: { cpu: 'Contra la máquina', pvp: 'Dos jugadores', reset: 'Nueva partida', turn: p => `Turno de ${p}`, win: p => `¡Ganó ${p}!`, cpuTurn: 'Pensando…' },
  },
  en: {
    classic: '← Classic version', lang: 'ES', close: 'Close', sections: 'Sections',
    hint: 'Walk with WASD or the arrow keys (or tap the floor). Get close to a piece of furniture and press E.',
    hintTouch: 'Tap the floor to walk and tap a piece of furniture to open it.',
    labels: {
      desk: 'GenAI', bookshelf: 'Experience', tv: 'Projects', whiteboard: 'Stack',
      beanbag: 'About me', corkboard: 'Education & CV', mailbox: 'Contact', arcade: 'Tic-Tac-Fade',
    },
    cv: 'Download CV (PDF)', video: 'Watch video', steam: 'View on Steam', email: 'Email me',
    ttf: { cpu: 'Vs. computer', pvp: 'Two players', reset: 'New game', turn: p => `${p} to move`, win: p => `${p} wins!`, cpuTurn: 'Thinking…' },
  },
};

const STEAM_URL = 'https://store.steampowered.com/app/2748340/Goblin_Cleanup/';

/* Muebles: posición de los pies (x, y) y si abren un panel.
   El orden de `id` interactivos es el del menú accesible. */
const FURNITURE = [
  { key: 'bookshelf', x: 64, y: 150, open: true },
  { key: 'desk', x: 168, y: 150, open: true },
  { key: 'chair', x: 222, y: 158 },
  { key: 'whiteboard', x: 316, y: 150, open: true },
  { key: 'arcade', x: 400, y: 152, open: true },
  { key: 'fridge', x: 470, y: 214 },
  { key: 'corkboard', x: 52, y: 262, open: true },
  { key: 'lamp', x: 176, y: 262 },
  { key: 'beanbag', x: 256, y: 290, open: true },
  { key: 'side-table', x: 318, y: 282 },
  { key: 'tv', x: 448, y: 310, open: true },
  { key: 'plant', x: 34, y: 372 },
  { key: 'coffee', x: 128, y: 372 },
  { key: 'mailbox', x: 336, y: 376, open: true },
  { key: 'guitar', x: 480, y: 376 },
];
const SECTIONS = ['beanbag', 'bookshelf', 'desk', 'tv', 'whiteboard', 'corkboard', 'arcade', 'mailbox'];

/* Filas del spritesheet y octantes del ángulo de movimiento (0 = este). */
const DIRS = ['south', 'south-east', 'east', 'north-east', 'north', 'north-west', 'west', 'south-west'];
const OCTANT_TO_ROW = [2, 1, 0, 7, 6, 5, 4, 3];

/* Wang tiles: esquinas NW NE SW SE (1 = alfombra) → frame del tileset. */
const WANG = {
  '1101': 0, '1010': 1, '0100': 2, '1100': 3, '0110': 4, '1000': 5, '0000': 6, '0001': 7,
  '1011': 8, '0011': 9, '0010': 10, '0101': 11, '1111': 12, '1110': 13, '1001': 14, '0111': 15,
};
const RUG = { c0: 5, c1: 11, r0: 7, r1: 11 }; // vértices de la alfombra

const $ = (s, el = document) => el.querySelector(s);
const isTouch = window.matchMedia('(pointer: coarse)').matches;

let lang = document.documentElement.lang === 'en' ? 'en' : 'es';
let panelOpen = false;

function storage(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch (e) { return null; }
}

/* ============ Contenido de los paneles ============ */

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const list = items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const dl = rows => `<dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
const link = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
const cvLink = r => `<a href="cv-${lang}.pdf" download="${lang === 'es' ? 'CV Camila Termine (ES).pdf' : 'Resume Camila Termine (EN).pdf'}">${r.cv}</a>`;

const PANELS = {
  beanbag: (t, u) => `
    <p>${u['about.p1']}</p><p>${u['about.p2']}</p><p>${u['about.p3']}</p>
    ${dl(t.facts)}`,

  bookshelf: t => t.jobs.map(j => `
    <h3>${j.role} · ${j.company}</h3>
    <p class="meta">${j.when} · ${j.where}</p>
    <p class="sub">${j.context}</p>
    ${list(j.points)}
    <p class="stack">${j.stack}</p>`).join('<hr>'),

  desk: (t, u) => `
    <p>${u['ai.lead']}</p>
    <h3>Steam Review Insights</h3>
    <p class="sub">${u['sri.sub']}</p>
    <p>${u['sri.desc']}</p>
    ${list([u['sri.p1'], u['sri.p2'], u['sri.p3']])}
    <p class="links">${link('https://github.com/camitermine/steam-review-insights', u['link.code'])}</p>
    <h3>Tic-Tac-Fade</h3>
    <p class="sub">${u['ttf.sub']}</p>
    <p>${u['ttf.desc']}</p>
    ${list([u['ttf.p1'], u['ttf.p2']])}
    <p class="links">${link('https://github.com/camitermine/tic-tac-fade', u['link.code'])}</p>
    <h3>${u['ai.agents.title']}</h3>
    <p>${u['ai.agents.desc']}</p>`,

  tv: (t, u, r) => `
    <p>${u['proj.lead'].split('. ')[0]}.</p>
    ${t.projects.map(p => `
      <h3>${p.name}</h3>
      <p class="meta">${p.origin}</p>
      <p>${p.desc}</p>
      <p class="stack">${p.stack}</p>
      ${p.video ? `<video src="${p.video}" controls muted playsinline preload="none"></video>` : ''}
      <p class="links">
        ${p.code ? link(p.code, u['link.code']) : ''}
        ${p.steam ? link(STEAM_URL, r.steam) : ''}
      </p>`).join('')}`,

  whiteboard: t => dl(t.skills),

  corkboard: (t, u, r) => `
    <p class="links">${cvLink(r)}</p>
    <ul>${t.edu.map(e => `<li><strong>${e.what}</strong>. ${e.where}${e.url ? ` ${link(e.url, u['edu.cert'])}` : ''}</li>`).join('')}</ul>`,

  mailbox: (t, u, r) => `
    <p>${u['contact.lead']}</p>
    <p class="links"><a href="mailto:${EMAIL}">${r.email}: ${EMAIL}</a></p>
    <p class="links">${SOCIALS.map(([n, h]) => link(h, n)).join('')} ${cvLink(r)}</p>`,

  arcade: (t, u, r) => `
    <p>${u['game.rule']}</p>
    <div class="ttf">
      <div class="ttf-modes" role="group">
        <button data-mode="cpu" aria-pressed="true">${r.ttf.cpu}</button>
        <button data-mode="pvp" aria-pressed="false">${r.ttf.pvp}</button>
      </div>
      <div class="ttf-board" role="grid"></div>
      <p class="ttf-status" aria-live="polite"></p>
      <button class="ttf-reset">${r.ttf.reset}</button>
    </div>`,
};

function openPanel(key) {
  const t = DATA[lang];
  const r = ROOM_TEXT[lang];
  $('#panel-title').textContent = r.labels[key];
  $('#panel-body').innerHTML = PANELS[key](t, t.ui, r);
  if (key === 'arcade') setupTicTacFade($('#panel-body .ttf'), r.ttf);
  const dialog = $('#panel');
  dialog.showModal();
  dialog.scrollTop = 0;
  panelOpen = true;
}

$('#panel').addEventListener('close', e => {
  if (e.currentTarget.open) return; // se reabrió antes de que llegara el evento
  panelOpen = false;
  $('#panel-body').innerHTML = ''; // corta videos y la partida
});
$('#panel-close').addEventListener('click', () => $('#panel').close());
$('#panel').addEventListener('click', e => { if (e.target === e.currentTarget) e.currentTarget.close(); });

/* ============ Tic-Tac-Fade (versión de bolsillo) ============ */

const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function setupTicTacFade(root, txt) {
  const board = $('.ttf-board', root);
  const status = $('.ttf-status', root);
  let mode = 'cpu';
  let s;

  const reset = () => { s = { X: [], O: [], turn: 'X', win: null, busy: false }; render(); };
  const owner = (st, c) => st.X.includes(c) ? 'X' : st.O.includes(c) ? 'O' : null;
  const place = (st, c, p) => {
    const next = { ...st, X: [...st.X], O: [...st.O] };
    next[p].push(c);
    if (next[p].length > 3) next[p].shift();
    next.win = LINES.find(l => l.every(i => next[p].includes(i))) || null;
    next.turn = p === 'X' ? 'O' : 'X';
    return next;
  };
  const empty = st => [...Array(9).keys()].filter(c => !owner(st, c));

  function cpuMove() {
    const cells = empty(s);
    const winning = cells.find(c => place(s, c, 'O').win);
    const blocking = cells.find(c => place({ ...s, turn: 'X' }, c, 'X').win);
    const pick = winning ?? blocking ?? (cells.includes(4) ? 4 : cells[Math.floor(Math.random() * cells.length)]);
    s = place(s, pick, 'O');
    s.busy = false;
    render();
  }

  function render() {
    board.innerHTML = '';
    for (let c = 0; c < 9; c++) {
      const p = owner(s, c);
      const b = document.createElement('button');
      b.dataset.p = p || '';
      b.textContent = p || '';
      b.setAttribute('aria-label', p ? `${c + 1}: ${p}` : `${c + 1}`);
      if (p && s[p].length === 3 && s[p][0] === c && !s.win) b.classList.add('old');
      if (s.win?.includes(c)) b.classList.add('win');
      b.disabled = !!p || !!s.win || s.busy;
      b.addEventListener('click', () => {
        s = place(s, c, s.turn);
        render();
        if (mode === 'cpu' && !s.win) {
          s.busy = true;
          render();
          setTimeout(cpuMove, 450);
        }
      });
      board.appendChild(b);
    }
    const last = s.turn === 'X' ? 'O' : 'X';
    status.textContent = s.win ? txt.win(last) : s.busy ? txt.cpuTurn : txt.turn(s.turn);
  }

  root.querySelectorAll('.ttf-modes button').forEach(btn => btn.addEventListener('click', () => {
    mode = btn.dataset.mode;
    root.querySelectorAll('.ttf-modes button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    reset();
  }));
  $('.ttf-reset', root).addEventListener('click', reset);
  reset();
}

/* ============ Textos de la página ============ */

function applyLanguage() {
  const r = ROOM_TEXT[lang];
  document.documentElement.lang = lang;
  $('#classic-link').textContent = r.classic;
  $('#lang-toggle').textContent = r.lang;
  $('#panel-close').setAttribute('aria-label', r.close);
  $('.rooms').setAttribute('aria-label', r.sections);
  $('#hint').textContent = isTouch ? r.hintTouch : r.hint;
  const cv = $('#cv-link');
  cv.href = `cv-${lang}.pdf`;
  cv.setAttribute('download', lang === 'es' ? 'CV Camila Termine (ES).pdf' : 'Resume Camila Termine (EN).pdf');
  $('#room-menu').innerHTML = SECTIONS.map(k => `<li><button data-open="${k}">${r.labels[k]}</button></li>`).join('');
  window.dispatchEvent(new Event('roomlang'));
}

$('#lang-toggle').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  storage('lang', lang);
  applyLanguage();
});
$('#room-menu').addEventListener('click', e => {
  const btn = e.target.closest('[data-open]');
  if (btn) openPanel(btn.dataset.open);
});

/* ============ Escena ============ */

class Room extends Phaser.Scene {
  preload() {
    this.load.spritesheet('floor', 'assets/game/floor-rug-tileset.png', { frameWidth: TILE, frameHeight: TILE });
    this.load.spritesheet('walk', 'assets/game/player/walk.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('idle', 'assets/game/player/idle.png', { frameWidth: 48, frameHeight: 48 });
    FURNITURE.forEach(f => this.load.image(f.key, `assets/game/furniture/${f.key}.png`));
  }

  create() {
    this.drawFloor();
    this.drawWalls();

    this.solids = this.physics.add.staticGroup();
    this.interactables = [];
    FURNITURE.forEach(f => {
      const img = this.add.image(f.x, f.y, f.key).setOrigin(0.5, 1).setDepth(f.y);
      // Colisión solo en la base del mueble, así se puede pasar "por detrás".
      const body = this.add.zone(f.x, f.y - 9, 40, 18);
      this.solids.add(body);
      if (f.open) {
        img.setInteractive({ useHandCursor: true });
        img.on('pointerdown', () => this.walkTo(f.x, f.y + 18, f.key));
        this.interactables.push({ ...f, img });
      }
    });

    this.makeAnims();
    this.player = this.physics.add.sprite(256, 214, 'idle', 0).setOrigin(0.5, 0.9);
    this.player.body.setSize(14, 8).setOffset(17, 36);
    this.player.setCollideWorldBounds(true);
    this.physics.world.setBounds(10, WALL * TILE + 14, COLS * TILE - 20, (ROWS - WALL) * TILE - 18);
    this.physics.add.collider(this.player, this.solids);
    this.facing = 0;
    this.player.play('idle-0');

    this.prompt = this.add.text(0, 0, '', {
      fontFamily: 'Pixelify Sans', fontSize: '11px', color: '#1a1423',
      backgroundColor: '#f0b64a', padding: { x: 4, y: 2 },
    }).setOrigin(0.5, 1).setDepth(10000).setVisible(false).setResolution(4);

    this.keys = this.input.keyboard.addKeys('W,A,S,D,UP,DOWN,LEFT,RIGHT,E,SPACE,ENTER');
    this.input.keyboard.on('keydown', e => {
      if (panelOpen) return;
      if (['KeyE', 'Space', 'Enter'].includes(e.code)) this.interact();
    });
    this.input.on('pointerdown', (p, over) => {
      if (panelOpen || over.length) return;
      this.walkTo(p.worldX, p.worldY, null);
    });

    $('#act-btn').addEventListener('click', () => this.interact());
    window.addEventListener('roomlang', () => { this.nearest = null; });
  }

  drawFloor() {
    const upper = (c, r) => c >= RUG.c0 && c <= RUG.c1 && r >= RUG.r0 && r <= RUG.r1 ? '1' : '0';
    for (let r = WALL; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const key = upper(c, r) + upper(c + 1, r) + upper(c, r + 1) + upper(c + 1, r + 1);
        this.add.image(c * TILE, r * TILE, 'floor', WANG[key]).setOrigin(0).setDepth(-10);
      }
    }
  }

  drawWalls() {
    const g = this.add.graphics().setDepth(-5);
    const W = COLS * TILE;
    const H = WALL * TILE;
    g.fillStyle(0x3b2f5c).fillRect(0, 0, W, H);
    g.fillStyle(0x2a2140).fillRect(0, 0, W, 12);
    for (let x = 0; x < W; x += 24) g.fillStyle(0x352a52).fillRect(x, 12, 2, H - 20);
    g.fillStyle(0x4a2e2a).fillRect(0, H - 8, W, 8);
    g.fillStyle(0x7a4a35).fillRect(0, H - 8, W, 2);

    // Ventana con luna
    const wx = 238, wy = 22;
    g.fillStyle(0x2a2140).fillRect(wx - 3, wy - 3, 50, 46);
    g.fillStyle(0x1a1423).fillRect(wx, wy, 44, 40);
    g.fillStyle(0xffe2a0).fillCircle(wx + 30, wy + 12, 6);
    g.fillStyle(0x1a1423).fillCircle(wx + 27, wy + 10, 5);
    [[6, 8], [14, 26], [36, 30], [20, 6], [40, 4]].forEach(([x, y]) => g.fillStyle(0xc6d0ff).fillRect(wx + x, wy + y, 1, 1));
    g.fillStyle(0x2a2140).fillRect(wx + 21, wy, 2, 40).fillRect(wx, wy + 19, 44, 2);

    // Cartel de neón
    this.add.text(456, 34, '</> cami.dev', {
      fontFamily: 'Pixelify Sans', fontSize: '13px', color: '#c6d0ff',
      stroke: '#8ea3ff', strokeThickness: 1,
    }).setOrigin(0.5).setDepth(-4).setResolution(4).setShadow(0, 0, '#8ea3ff', 8, true, true);

    // Paredes laterales y zócalo inferior
    g.fillStyle(0x1a1423).fillRect(0, H, 6, ROWS * TILE).fillRect(W - 6, H, 6, ROWS * TILE).fillRect(0, ROWS * TILE - 4, W, 4);
  }

  makeAnims() {
    for (let d = 0; d < 8; d++) {
      this.anims.create({ key: `walk-${d}`, frames: this.anims.generateFrameNumbers('walk', { start: d * 6, end: d * 6 + 5 }), frameRate: 10, repeat: -1 });
      this.anims.create({ key: `idle-${d}`, frames: this.anims.generateFrameNumbers('idle', { start: d * 4, end: d * 4 + 3 }), frameRate: 4, repeat: -1 });
    }
  }

  walkTo(x, y, openKey) {
    this.target = { x, y, openKey, stuck: 0 };
  }

  interact() {
    if (this.nearest) openPanel(this.nearest.key);
  }

  update() {
    const k = this.keys;
    let vx = 0, vy = 0;
    if (!panelOpen) {
      vx = (k.D.isDown || k.RIGHT.isDown) - (k.A.isDown || k.LEFT.isDown);
      vy = (k.S.isDown || k.DOWN.isDown) - (k.W.isDown || k.UP.isDown);
    }

    if (vx || vy) {
      this.target = null;
    } else if (this.target && !panelOpen) {
      const dx = this.target.x - this.player.x;
      const dy = this.target.y - this.player.y;
      const dist = Math.hypot(dx, dy);
      const blocked = this.player.body.blocked;
      if (blocked.left || blocked.right || blocked.up || blocked.down) this.target.stuck++;
      if (dist < 4 || this.target.stuck > 20) {
        const key = this.target.openKey;
        this.target = null;
        if (key && this.distanceTo(this.interactables.find(i => i.key === key)) < REACH + 30) openPanel(key);
      } else {
        vx = dx / dist;
        vy = dy / dist;
      }
    }

    const len = Math.hypot(vx, vy) || 1;
    this.player.setVelocity((vx / len) * SPEED, (vy / len) * SPEED);
    if (vx || vy) {
      const oct = (Math.round(Math.atan2(vy, vx) / (Math.PI / 4)) + 8) % 8;
      this.facing = OCTANT_TO_ROW[oct];
      this.player.anims.play(`walk-${this.facing}`, true);
    } else {
      this.player.anims.play(`idle-${this.facing}`, true);
    }
    this.player.setDepth(this.player.y);

    this.updatePrompt();
  }

  distanceTo(f) {
    // Distancia a la base del mueble (rectángulo de 40px de ancho)
    const dx = Math.max(Math.abs(this.player.x - f.x) - 20, 0);
    const dy = Math.max(Math.abs(this.player.y - (f.y - 9)) - 9, 0);
    return Math.hypot(dx, dy);
  }

  updatePrompt() {
    let best = null, bestD = REACH;
    this.interactables.forEach(f => {
      const d = this.distanceTo(f);
      if (d < bestD) { best = f; bestD = d; }
    });
    this.interactables.forEach(f => f.img.setTint(f === best ? 0xfff2d6 : 0xffffff));
    this.nearest = best;
    $('#act-btn').hidden = !(best && isTouch);
    if (best) {
      const label = ROOM_TEXT[lang].labels[best.key];
      this.prompt.setText(isTouch ? label : `E · ${label}`);
      this.prompt.setPosition(best.x, best.y - best.img.height - 2).setVisible(true);
    } else {
      this.prompt.setVisible(false);
    }
  }
}

applyLanguage();

// Esperar la fuente pixel para que los textos del canvas no salgan con la de sistema.
const fontReady = document.fonts?.load('13px "Pixelify Sans"').catch(() => {}) ?? Promise.resolve();
fontReady.then(() => {
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: COLS * TILE,
    height: ROWS * TILE,
    pixelArt: true,
    backgroundColor: '#2a2140',
    physics: { default: 'arcade' },
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: Room,
  });
});
