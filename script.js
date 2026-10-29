/* =========================================================
   Portfolio · Camila Términe
   La lógica de index.html. Los textos están en data.js.
   ========================================================= */

/* Tramos de la línea de carrera, en años decimales. `end: null` = hoy.
   Crisalu se superpone con SIGERH, por eso va en el carril de arriba. */
const CAREER = [
  { kind: 'archive', start: 2013.6, end: 2024.65, lane: 1 },
  { kind: 'backend', start: 2024.7, end: 2025.8, lane: 1 },
  { kind: 'games', start: 2025.6, end: null, lane: 0 },
];
const CAREER_TICKS = [2013, 2016, 2019, 2022, 2024];

/* Reseñas reales de Goblin Cleanup, con la categoría que les asignó Claude en el proyecto. */
const DEMO_REVIEWS = [
  { lang: 'english', up: false, text: 'The game keeps freezing on strange intervals for an entire minute or two at a time… it\'s literally making it unplayable.', cat: 'BUG' },
  { lang: 'english', up: true, text: 'Hella fun especially with friends', cat: 'POSITIVE' },
  { lang: 'english', up: true, text: 'Expand the tutorial to include the advanced interactions, but games is fun and easy to pick and chill', cat: 'FEATURE_REQUEST' },
  { lang: 'french', up: false, text: 'Jeu mal calibré : presque 2h passées avec mes amis pour réussir le niveau 1…', cat: 'FEATURE_REQUEST' },
  { lang: 'english', up: false, text: 'Attempted to play it today. Hours of troubleshooting later. Runs like malware, goes down to a crawl of 3 fps…', cat: 'BUG' },
  { lang: 'schinese', up: true, text: '快更新地图快更新地图快更新地图，我已经迫不及待要进去打扫卫生', cat: 'FEATURE_REQUEST' },
  { lang: 'english', up: true, text: 'Am maid :)', cat: 'OTHER' },
  { lang: 'german', up: true, text: 'Man säubert und ordnet abgeschlossene Dungeons, wird dabei vielleicht mal verbrannt, gefressen oder stürzt in die Tiefe…', cat: 'POSITIVE' },
];
const STATS = [
  { cat: 'BUG', value: 449 }, { cat: 'FEATURE_REQUEST', value: 344 },
  { cat: 'POSITIVE', value: 1331 }, { cat: 'OTHER', value: 243 },
];
const CAT_COLOR = { BUG: 'var(--bug)', FEATURE_REQUEST: 'var(--feature)', POSITIVE: 'var(--positive)', OTHER: 'var(--other)' };

const STEAM_URL = 'https://store.steampowered.com/app/2748340/Goblin_Cleanup/';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

function storage(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch (e) { return null; }
}

/* ============ Idioma ============ */
let lang = document.documentElement.lang === 'en' ? 'en' : 'es';

function applyLanguage() {
  const t = DATA[lang];
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => {
    const value = t.ui[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  renderCareer(t);
  renderJobs(t);
  renderCatalog(t);
  renderAbout(t);
  renderLog(false);
  renderDemoReview(false);
  renderGame(false);
  // El CV se descarga en el idioma activo, con un nombre de archivo claro.
  $$('a[data-cv]').forEach(a => {
    a.href = `cv-${lang}.pdf`;
    a.setAttribute('download', lang === 'es' ? 'CV Camila Termine (ES).pdf' : 'Resume Camila Termine (EN).pdf');
  });
}

$('#lang-toggle').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  storage('lang', lang);
  applyLanguage();
});

/* ============ Tema ============ */
$('#theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.dataset.theme
    || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  storage('theme', next);
});

/* ============ Línea de carrera ============ */
function renderCareer(t) {
  const now = new Date();
  const today = now.getFullYear() + now.getMonth() / 12;
  const from = CAREER_TICKS[0];
  const pct = y => `${((y - from) / (today - from)) * 100}%`;

  const segs = CAREER.map((s, i) => {
    const end = s.end ?? today;
    return `<span class="career-seg" data-kind="${s.kind}"
      style="--l:${pct(s.start)};--w:calc(${pct(end)} - ${pct(s.start)});--top:${s.lane ? 30 : 6}px;--delay:${0.15 + i * 0.35}s"></span>`;
  }).join('');
  const ticks = CAREER_TICKS.map(y =>
    `<span class="career-tick" style="--l:${pct(y)}" ${y % 3 === 1 && y !== 2013 ? 'data-minor' : ''}>${y}</span>`).join('')
    + `<span class="career-tick" style="--l:100%">${t.career.today}</span>`;
  $('#career-rail').innerHTML = segs + ticks;

  $('#career-notes').innerHTML = t.career.notes.map(n => `
    <li>
      <span class="note-key" data-kind="${n.kind}" aria-hidden="true"></span>
      <div><span class="note-when">${n.when}</span><p class="note-what">${n.what}</p></div>
      <p class="note-fact">${n.fact}</p>
    </li>`).join('');
}

/* ============ Render de secciones ============ */
function renderJobs(t) {
  $('#jobs').innerHTML = t.jobs.map(job => `
    <li class="job">
      <p class="job-when">${job.when}<span class="job-where">${job.where}</span></p>
      <div>
        <h3 class="job-role">${job.role}</h3>
        <p class="job-company">${job.company}</p>
        <p class="job-context">${job.context}</p>
        <ul>${job.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <p class="stack">${job.stack}</p>
      </div>
    </li>`).join('');
}

function renderCatalog(t) {
  const active = $('.tab[aria-pressed="true"]')?.dataset.filter || 'all';
  $('#catalog').innerHTML = t.projects.map(p => `
    <article class="entry" data-cats="${p.cats.join(' ')}" ${active !== 'all' && !p.cats.includes(active) ? 'hidden' : ''}>
      <span class="entry-tab">${p.tab}</span>
      ${p.video ? `
        <div class="entry-media">
          <video src="${p.video}" muted loop playsinline preload="none" aria-label="${t.ui['card.video']}"></video>
          <button class="media-toggle" aria-label="${t.ui['media.play']}">▶</button>
        </div>` : ''}
      <p class="entry-origin">${p.origin}</p>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p class="stack">${p.stack}</p>
      ${p.code || p.steam ? `<div class="entry-links">
        ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">${t.ui['card.code']}</a>` : ''}
        ${p.steam ? `<a href="${STEAM_URL}" target="_blank" rel="noopener">${t.ui['card.steam']}</a>` : ''}
      </div>` : ''}
    </article>`).join('');
  setupVideos(t);
}

function renderAbout(t) {
  const dl = rows => rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  $('#facts').innerHTML = dl(t.facts);
  $('#skills').innerHTML = dl(t.skills);
  $('#edu').innerHTML = t.edu.map(e => `<li><strong>${e.what}</strong><span>${e.where}</span>${
    e.url ? `<a href="${e.url}" target="_blank" rel="noopener">${t.ui['edu.cert']}</a>` : ''}</li>`).join('');
}

/* ============ Filtros del catálogo ============ */
$('#filters').addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  $$('.tab').forEach(b => b.setAttribute('aria-pressed', b === btn));
  const f = btn.dataset.filter;
  $$('.entry').forEach(entry => {
    entry.hidden = !(f === 'all' || entry.dataset.cats.split(' ').includes(f));
  });
});

/* ============ Videos: se reproducen al verse, se pausan al salir ============ */
let videoObserver;
function setupVideos(t) {
  videoObserver?.disconnect();
  const setBtn = (btn, playing) => {
    btn.textContent = playing ? '❚❚' : '▶';
    btn.setAttribute('aria-label', t.ui[playing ? 'media.pause' : 'media.play']);
  };
  videoObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      const btn = target.parentElement.querySelector('.media-toggle');
      if (isIntersecting && !reducedMotion && !target.dataset.paused) {
        target.play().then(() => setBtn(btn, true)).catch(() => {});
      } else {
        target.pause();
        setBtn(btn, false);
      }
    });
  }, { threshold: 0.5 });

  $$('.entry video').forEach(video => {
    videoObserver.observe(video);
    const btn = video.parentElement.querySelector('.media-toggle');
    const toggle = () => {
      if (video.paused) { delete video.dataset.paused; video.play(); setBtn(btn, true); }
      else { video.dataset.paused = '1'; video.pause(); setBtn(btn, false); }
    };
    btn.addEventListener('click', toggle);
    video.addEventListener('click', toggle);
  });
}

/* ============ Demo del clasificador ============ */
function renderChart() {
  const max = Math.max(...STATS.map(s => s.value));
  $('#demo-chart').innerHTML = STATS.map(s => `
    <div class="bar-row">
      <span>${s.cat}</span>
      <span class="bar-track"><span class="bar-fill" style="--w:${(s.value / max) * 100}%;--c:${CAT_COLOR[s.cat]}"></span></span>
      <span class="bar-value">${s.value.toLocaleString(lang === 'es' ? 'es-AR' : 'en-US')}</span>
    </div>`).join('');
}

let demoIndex = 0;
let demoTimer;
function renderDemoReview(animate = true) {
  const t = DATA[lang].ui;
  const r = DEMO_REVIEWS[demoIndex];
  $('#demo-meta').textContent = `${r.up ? '👍' : '👎'} Goblin Cleanup, ${r.lang}`;
  $('#demo-text').textContent = `“${r.text}”`;
  const result = $('#demo-result');
  clearTimeout(demoTimer);
  const show = () => { result.innerHTML = `${t['demo.result']} <span class="cat" style="--c:${CAT_COLOR[r.cat]}">${r.cat}</span>`; };
  if (animate && !reducedMotion) {
    result.innerHTML = `<span class="thinking">${t['demo.thinking']}</span>`;
    demoTimer = setTimeout(show, 900);
  } else {
    show();
  }
}
$('#demo-next').addEventListener('click', () => {
  demoIndex = (demoIndex + 1) % DEMO_REVIEWS.length;
  renderDemoReview(true);
});

/* ============ Bitácora de Tic-Tac-Fade ============ */
let logIndex = 0;
function renderLog(animate = true) {
  const t = DATA[lang];
  const entry = t.log[logIndex];
  const body = $('#log-body');
  body.innerHTML = `
    <h4 class="log-title">[${entry.n}] ${entry.title}</h4>
    <p class="log-date">${entry.date}</p>
    <dl class="log-fields">${entry.fields.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
  $('#log-count').textContent = `${logIndex + 1} ${t.ui['log.of']} ${t.log.length}`;
  if (animate) { body.classList.remove('swap'); void body.offsetWidth; body.classList.add('swap'); }
}
$('#log-prev').addEventListener('click', () => {
  logIndex = (logIndex - 1 + DATA[lang].log.length) % DATA[lang].log.length;
  renderLog();
});
$('#log-next').addEventListener('click', () => {
  logIndex = (logIndex + 1) % DATA[lang].log.length;
  renderLog();
});

/* ============ Tic-Tac-Fade jugable ============
   Reglas del repo: cada jugador tiene como máximo 3 fichas; al poner la
   cuarta desaparece la más vieja. Una jugada = un solo click. */
const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const MAX_PIECES = 3;
const MARKS = {
  X: '<svg viewBox="0 0 100 100" aria-hidden="true"><path class="mark" d="M18 18L82 82M82 18L18 82"/></svg>',
  O: '<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="mark" cx="50" cy="50" r="34"/></svg>',
};
const game = { mode: 'cpu', queues: { X: [], O: [] }, turn: 'X', winner: null, line: null, busy: false, last: null };
let cpuTimer;

// Aplica una jugada sobre una copia de las colas: devuelve el estado resultante sin tocar el original.
function play(queues, cell, p) {
  const next = { X: [...queues.X], O: [...queues.O] };
  next[p].push(cell);
  if (next[p].length > MAX_PIECES) next[p].shift();
  return next;
}
const winningLine = (queues, p) => LINES.find(l => l.every(c => queues[p].includes(c))) || null;
const emptyCells = queues => [...Array(9).keys()].filter(c => !queues.X.includes(c) && !queues.O.includes(c));

// La máquina: gana si puede, si no bloquea, si no toma el centro, si no al azar.
function cpuMove(queues) {
  const free = emptyCells(queues);
  const win = free.find(c => winningLine(play(queues, c, 'O'), 'O'));
  if (win !== undefined) return win;
  const safe = free.filter(c => {
    const after = play(queues, c, 'O');
    return !emptyCells(after).some(x => winningLine(play(after, x, 'X'), 'X'));
  });
  const pool = safe.length ? safe : free;
  if (pool.includes(4)) return 4;
  return pool[Math.floor(Math.random() * pool.length)];
}

function move(cell) {
  if (game.winner || game.busy) return;
  const p = game.turn;
  game.queues = play(game.queues, cell, p);
  game.last = cell;
  game.line = winningLine(game.queues, p);
  if (game.line) game.winner = p;
  else game.turn = p === 'X' ? 'O' : 'X';
  const cpuTurn = !game.winner && game.mode === 'cpu' && game.turn === 'O';
  game.busy = cpuTurn;
  renderGame();
  if (cpuTurn) {
    cpuTimer = setTimeout(() => { game.busy = false; move(cpuMove(game.queues)); }, reducedMotion ? 0 : 450);
  }
}

function renderGame(animate = true) {
  const t = DATA[lang].ui;
  // La ficha más vieja de quien juega ahora se va con su próxima jugada.
  const q = game.queues[game.turn];
  const fading = !game.winner && q.length === MAX_PIECES ? q[0] : null;
  $('#board').innerHTML = [...Array(9).keys()].map(c => {
    const p = game.queues.X.includes(c) ? 'X' : game.queues.O.includes(c) ? 'O' : null;
    const blocked = !!p || !!game.winner || game.busy;
    const cls = ['cell', animate && c === game.last ? 'placed' : '', c === fading ? 'fading' : '', game.line?.includes(c) ? 'win' : ''].join(' ');
    const label = `${t['game.cell'].replace('{r}', Math.floor(c / 3) + 1).replace('{c}', c % 3 + 1)}: ${p || t['game.empty']}${c === fading ? `, ${t['game.fades']}` : ''}`;
    return `<button class="${cls.trim()}" data-cell="${c}" ${p ? `data-p="${p}"` : ''} ${blocked ? 'disabled' : ''} aria-label="${label}">${p ? MARKS[p] : ''}</button>`;
  }).join('');
  game.last = animate ? null : game.last;

  let status;
  if (game.winner) status = game.mode === 'cpu' ? t[game.winner === 'X' ? 'game.youWin' : 'game.cpuWins'] : t['game.wins'].replace('{p}', game.winner);
  else if (game.mode === 'cpu') status = game.busy ? t['game.thinking'] : t['game.you'];
  else status = t['game.turn'].replace('{p}', game.turn);
  $('#game-status').textContent = status;
}

function resetGame() {
  clearTimeout(cpuTimer);
  Object.assign(game, { queues: { X: [], O: [] }, turn: 'X', winner: null, line: null, busy: false, last: null });
  renderGame();
}
$('#board').addEventListener('click', e => {
  const cell = e.target.closest('.cell');
  if (cell && !cell.disabled) move(Number(cell.dataset.cell));
});
$('#game-reset').addEventListener('click', resetGame);
$('#game-modes').addEventListener('click', e => {
  const btn = e.target.closest('.game-mode');
  if (!btn || btn.dataset.mode === game.mode) return;
  $$('.game-mode').forEach(b => b.setAttribute('aria-pressed', b === btn));
  game.mode = btn.dataset.mode;
  resetGame();
});

/* ============ Nav: link activo según la sección visible ============ */
const sections = $$('main section[id]');
const navLinks = $$('.nav-links a');
let ticking = false;
function onScroll() {
  let current = '';
  sections.forEach(s => { if (s.getBoundingClientRect().top <= innerHeight * 0.35) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  ticking = false;
}
addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

/* Menú mobile */
const menuBtn = $('#menu-toggle');
const links = $('#nav-links');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
});

/* Copiar email */
$('#copy-email').addEventListener('click', async () => {
  const email = $('#email-link').textContent.trim();
  const c = $('#copied');
  try {
    await navigator.clipboard.writeText(email);
    c.textContent = DATA[lang].ui['contact.copied'];
    setTimeout(() => { c.textContent = ''; }, 2000);
  } catch (e) { location.href = `mailto:${email}`; }
});

/* ============ Inicio ============ */
$('#year').textContent = new Date().getFullYear();
renderChart();
applyLanguage();
onScroll();
