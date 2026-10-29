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
const CAT_SPEED = 42;

const EMAIL = 'camila.termine@gmail.com';
const SOCIALS = [
  ['LinkedIn', 'https://www.linkedin.com/in/camila-termine'],
  ['GitHub', 'https://github.com/camitermine'],
  ['IMDb', 'https://www.imdb.com/es/name/nm16454992/'],
];

const ROOM_TEXT = {
  es: {
    classic: '← Versión clásica', lang: 'EN', close: 'Cerrar', sections: 'Secciones',
    mute: 'Silenciar sonido', unmute: 'Activar sonido',
    hint: 'Caminá con WASD o las flechas (o tocá el piso). Acercate a un mueble y apretá E.',
    hintTouch: 'Tocá el piso para caminar y tocá un mueble para abrirlo.',
    labels: {
      desk: 'GenAI', bookshelf: 'Experiencia', tv: 'Proyectos', whiteboard: 'Stack',
      beanbag: 'Sobre mí', corkboard: 'Formación y CV', mailbox: 'Contacto', arcade: 'Tic-Tac-Fade',
      cat: 'Acariciar al gato',
    },
    purrs: ['prrr~', 'miau ♪', 'purr purr', 'mrrrp!', '*ronronea*'],
    cv: 'Descargar CV (PDF)', video: 'Ver video', steam: 'Ver en Steam', email: 'Escribime',
    ttf: { cpu: 'Contra la máquina', pvp: 'Dos jugadores', reset: 'Nueva partida', turn: p => `Turno de ${p}`, win: p => `¡Ganó ${p}!`, cpuTurn: 'Pensando…' },
  },
  en: {
    classic: '← Classic version', lang: 'ES', close: 'Close', sections: 'Sections',
    mute: 'Mute sound', unmute: 'Unmute sound',
    hint: 'Walk with WASD or the arrow keys (or tap the floor). Get close to a piece of furniture and press E.',
    hintTouch: 'Tap the floor to walk and tap a piece of furniture to open it.',
    labels: {
      desk: 'GenAI', bookshelf: 'Experience', tv: 'Projects', whiteboard: 'Stack',
      beanbag: 'About me', corkboard: 'Education & CV', mailbox: 'Contact', arcade: 'Tic-Tac-Fade',
      cat: 'Pet the cat',
    },
    purrs: ['prrr~', 'meow ♪', 'purr purr', 'mrrrp!', '*purrs*'],
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
  Sound.blip();
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

/* ============ Sonido ============
   Todo sintetizado con Web Audio: no hay archivos de audio.
   El navegador no deja sonar nada hasta el primer gesto del visitante. */

const mtof = m => 440 * 2 ** ((m - 69) / 12);

// Fmaj7 · Em7 · Dm7 · Cmaj7, un compás cada uno, a 76 BPM
const PROGRESSION = [
  { root: 41, notes: [53, 57, 60, 64] },
  { root: 40, notes: [52, 55, 59, 62] },
  { root: 38, notes: [50, 53, 57, 60] },
  { root: 36, notes: [48, 52, 55, 59] },
];
const EIGHTH = 60 / 76 / 2;
const ARP = [0, 2, 1, 3, 2, 1, 3, 2];

const Sound = {
  ctx: null,
  muted: storage('muted') === '1',

  start() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.8;
    this.master.connect(ctx.destination);

    this.music = ctx.createBiquadFilter(); // lo-fi: sin agudos
    this.music.type = 'lowpass';
    this.music.frequency.value = 1600;
    const musicGain = ctx.createGain();
    musicGain.gain.value = 0.5;
    this.music.connect(musicGain).connect(this.master);

    const len = ctx.sampleRate;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;

    this.step8 = 0;
    this.nextTime = ctx.currentTime + 0.1;
    setInterval(() => this.schedule(), 50);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) ctx.suspend(); else ctx.resume();
    });
  },

  setMuted(m) {
    this.muted = m;
    storage('muted', m ? '1' : '0');
    if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.05);
  },

  // Nota con envolvente: ataque corto y caída exponencial
  tone(freq, { type = 'sine', at = this.ctx.currentTime, attack = 0.01, dur = 0.3, peak = 0.05, to = this.master, glide } = {}) {
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, at);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, at + dur * 0.6);
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(peak, at + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g).connect(to);
    o.start(at);
    o.stop(at + dur + 0.05);
  },

  schedule() {
    const ctx = this.ctx;
    if (this.muted || ctx.state !== 'running') { this.nextTime = ctx.currentTime + 0.1; return; }
    while (this.nextTime < ctx.currentTime + 0.25) {
      const t = this.nextTime;
      const pos = this.step8 % 8;
      const chord = PROGRESSION[Math.floor(this.step8 / 8) % 4];
      if (pos === 0) {
        chord.notes.forEach(n => this.tone(mtof(n), { type: 'triangle', at: t, attack: 0.5, dur: EIGHTH * 8.5, peak: 0.02, to: this.music }));
      }
      if (pos === 0 || pos === 5) {
        this.tone(mtof(chord.root), { at: t, attack: 0.02, dur: EIGHTH * 3, peak: 0.07, to: this.music });
      }
      if (Math.random() < 0.65) {
        this.tone(mtof(chord.notes[ARP[pos]] + 12), { type: 'triangle', at: t, dur: 0.35, peak: 0.016, to: this.music });
      }
      this.nextTime += EIGHTH;
      this.step8++;
    }
  },

  // Pisada sobre madera: un golpecito de ruido filtrado
  footstep() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.playbackRate.value = 0.85 + Math.random() * 0.3;
    const f = this.ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 700 + Math.random() * 300;
    f.Q.value = 1.5;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.2, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random() * 0.9, 0.1);
  },

  // Ronroneo: ruido grave pulsado a ~23 Hz, más una campanita por corazón
  purr() {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 220;
    const pulse = ctx.createGain();
    pulse.gain.value = 0.5;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 23;
    const depth = ctx.createGain();
    depth.gain.value = 0.5;
    lfo.connect(depth).connect(pulse.gain);
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, t);
    env.gain.exponentialRampToValueAtTime(0.5, t + 0.15);
    env.gain.setValueAtTime(0.5, t + 0.9);
    env.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);
    src.connect(f).connect(pulse).connect(env).connect(this.master);
    src.start(t);
    lfo.start(t);
    src.stop(t + 1.6);
    lfo.stop(t + 1.6);
    [1318.5, 1568, 1760].forEach((freq, i) => this.tone(freq, { at: t + i * 0.22, dur: 0.4, peak: 0.025 }));
  },

  blip() {
    if (!this.ctx || this.muted) return;
    this.tone(660, { dur: 0.12, peak: 0.04, glide: 990 });
  },
};

const startSound = () => Sound.start();
['pointerdown', 'keydown'].forEach(ev => window.addEventListener(ev, startSound, { once: true }));

function applySoundButton() {
  const btn = $('#sound-toggle');
  btn.setAttribute('aria-pressed', String(Sound.muted));
  btn.setAttribute('aria-label', Sound.muted ? ROOM_TEXT[lang].unmute : ROOM_TEXT[lang].mute);
  btn.title = btn.getAttribute('aria-label');
}

$('#sound-toggle').addEventListener('click', () => {
  Sound.start();
  Sound.setMuted(!Sound.muted);
  applySoundButton();
});

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
  applySoundButton();
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
    this.load.spritesheet('cat-walk', 'assets/game/cat/walk.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('cat-sit', 'assets/game/cat/sit.png', { frameWidth: 48, frameHeight: 48 });
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
    this.makeCat();

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

  /* ============ Gato ============ */

  makeCat() {
    const sitFrames = (this.textures.get('cat-sit').frameTotal - 1) / 8;
    for (let d = 0; d < 8; d++) {
      this.anims.create({ key: `cat-walk-${d}`, frames: this.anims.generateFrameNumbers('cat-walk', { start: d * 6, end: d * 6 + 5 }), frameRate: 9, repeat: -1 });
      this.anims.create({ key: `cat-sit-${d}`, frames: this.anims.generateFrameNumbers('cat-sit', { start: d * sitFrames, end: (d + 1) * sitFrames - 1 }), frameRate: 8 });
    }

    // Corazón de 7x6 px, en los colores de la paleta
    const heart = ['.11.11.', '1221111', '1211111', '.11111.', '..111..', '...1...'];
    const g = this.make.graphics({ add: false });
    heart.forEach((row, y) => [...row].forEach((p, x) => {
      if (p !== '.') g.fillStyle(p === '2' ? 0xffe2e8 : 0xff7fa6).fillRect(x, y, 1, 1);
    }));
    g.generateTexture('heart', 7, 6);
    g.destroy();

    this.cat = this.physics.add.sprite(380, 236, 'cat-sit', 0).setOrigin(0.5, 0.85);
    this.cat.body.setSize(14, 6).setOffset(17, 35);
    this.cat.setCollideWorldBounds(true);
    this.physics.add.collider(this.cat, this.solids);
    this.cat.facing = 0;
    this.catState = { mode: 'sit', until: this.time.now + 2500, target: null, stuck: 0 };
    this.cat.play('cat-sit-0');
    this.cat.setInteractive({ useHandCursor: true });
    this.cat.on('pointerdown', () => this.walkTo(this.cat.x, this.cat.y + 14, 'cat'));
  }

  catSit(ms) {
    this.cat.setVelocity(0, 0);
    this.catState = { mode: 'sit', until: this.time.now + ms, target: null, stuck: 0 };
    this.cat.play(`cat-sit-${this.cat.facing}`);
  }

  updateCat() {
    const c = this.cat;
    const s = this.catState;
    const now = this.time.now;
    if (s.mode === 'sit') {
      if (now < s.until || panelOpen) return;
      // Elegir un punto libre del piso al azar
      const x = Phaser.Math.Between(30, COLS * TILE - 30);
      const y = Phaser.Math.Between(WALL * TILE + 60, ROWS * TILE - 20);
      this.catState = { mode: 'walk', target: { x, y }, stuck: 0, until: now + 8000 };
      return;
    }
    const dx = s.target.x - c.x;
    const dy = s.target.y - c.y;
    const dist = Math.hypot(dx, dy);
    const b = c.body.blocked;
    if (b.left || b.right || b.up || b.down) s.stuck++;
    if (dist < 4 || s.stuck > 25 || now > s.until) {
      this.catSit(Phaser.Math.Between(2500, 6000));
      return;
    }
    c.setVelocity((dx / dist) * CAT_SPEED, (dy / dist) * CAT_SPEED);
    c.facing = OCTANT_TO_ROW[(Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8];
    c.anims.play(`cat-walk-${c.facing}`, true);
    c.setDepth(c.y);
  }

  petCat() {
    const c = this.cat;
    // Se da vuelta para mirar a quien lo acaricia y se queda un rato
    const oct = (Math.round(Math.atan2(this.player.y - c.y, this.player.x - c.x) / (Math.PI / 4)) + 8) % 8;
    c.facing = OCTANT_TO_ROW[oct];
    Sound.purr();
    this.catSit(5000);
    c.setDepth(c.y);
    this.pettingUntil = this.time.now + 1800; // sin el cartel "E" encima del ronroneo

    const purrs = ROOM_TEXT[lang].purrs;
    // El cartel va arriba y los corazones suben entre el gato y el cartel, sin taparlo
    const bubble = this.add.text(c.x, c.y - 48, Phaser.Utils.Array.GetRandom(purrs), {
      fontFamily: 'Pixelify Sans', fontSize: '10px', color: '#1a1423',
      backgroundColor: '#f2e8d8', padding: { x: 4, y: 2 },
    }).setOrigin(0.5, 1).setDepth(10001).setResolution(4);
    this.tweens.add({ targets: bubble, y: bubble.y - 10, alpha: 0, delay: 900, duration: 700, onComplete: () => bubble.destroy() });

    for (let i = 0; i < 3; i++) {
      const h = this.add.image(c.x + (i - 1) * 12, c.y - 20, 'heart').setScale(2).setDepth(10000).setAlpha(0);
      this.tweens.add({
        targets: h, y: h.y - Phaser.Math.Between(10, 16), x: h.x + Phaser.Math.Between(-3, 3),
        alpha: { from: 1, to: 0 }, delay: i * 220, duration: 1100, ease: 'Sine.easeOut',
        onComplete: () => h.destroy(),
      });
    }
  }

  walkTo(x, y, openKey) {
    this.target = { x, y, openKey, stuck: 0 };
  }

  interact() {
    if (!this.nearest) return;
    if (this.nearest.key === 'cat') this.petCat();
    else openPanel(this.nearest.key);
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
        if (key === 'cat') {
          if (Math.hypot(this.cat.x - this.player.x, this.cat.y - this.player.y) < REACH + 20) this.petCat();
        } else if (key && this.distanceTo(this.interactables.find(i => i.key === key)) < REACH + 30) openPanel(key);
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
      if (this.time.now - (this.lastStep || 0) > 300) {
        Sound.footstep();
        this.lastStep = this.time.now;
      }
    } else {
      this.player.anims.play(`idle-${this.facing}`, true);
    }
    this.player.setDepth(this.player.y);

    this.updateCat();
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
    // El gato se mueve, así que se mide a su posición actual
    const catD = Math.hypot(this.cat.x - this.player.x, this.cat.y - this.player.y) - 8;
    if (catD < bestD) best = { key: 'cat', x: this.cat.x, y: this.cat.y, img: { height: 34 } };
    this.interactables.forEach(f => f.img.setTint(f === best ? 0xfff2d6 : 0xffffff));
    this.nearest = best;
    $('#act-btn').hidden = !(best && isTouch);
    if (best && !(best.key === 'cat' && this.time.now < this.pettingUntil)) {
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
