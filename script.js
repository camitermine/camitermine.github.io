/* =========================================================
   Portfolio · Camila Términe
   Todo el contenido está en DATA (es / en). Para editar un texto,
   cambiarlo acá; el HTML solo tiene la estructura.
   ========================================================= */

const DATA = {
  es: {
    ui: {
      'skip': 'Saltar al contenido',
      'nav.about': 'Sobre mí', 'nav.experience': 'Experiencia', 'nav.projects': 'Proyectos',
      'nav.skills': 'Stack', 'nav.contact': 'Contacto', 'nav.cv': 'Descargar CV',
      'hero.status': 'Abierta a nuevas oportunidades · Remoto o Buenos Aires',
      'hero.hello': 'Hola, soy',
      'hero.lead': 'Construyo backends en Java que usan miles de personas, sistemas multiplayer en C# para un juego publicado en Steam, y herramientas que usan IA para resolver problemas reales.',
      'hero.cta.projects': 'Ver proyectos', 'hero.cta.contact': 'Contactarme',
      'stats.years': 'años desarrollando software en producción',
      'stats.users': 'usuarios en el sistema de RRHH de CONICET',
      'stats.desync': 'bugs de desincronización en Goblin Cleanup',
      'stats.reviews': 'reseñas de Steam clasificadas con IA',
      'about.title': 'Entre el backend, los videojuegos y la IA',
      'about.p1': 'Soy Software Engineer en Buenos Aires. Hoy trabajo en <strong>Crisalu Games</strong> en <strong>Goblin Cleanup</strong>, un juego cooperativo para hasta 4 jugadores publicado por <strong>Team17</strong> en Steam. Ahí diseño sistemas de gameplay de punta a punta: el guardado de partidas, los emotes, el modo foto y la sincronización multiplayer.',
      'about.p2': 'Antes desarrollé en Java/Spring Boot para <strong>SIGERH</strong>, el sistema de recursos humanos de CONICET que usan más de 30.000 personas en todo el país. Esa base en POO, clean code y arquitecturas mantenibles es la que hoy aplico al diseño de sistemas de juego.',
      'about.p3': 'Y antes de programar pasé más de 10 años en <strong>CONICET Documental</strong>, gestionando más de 300 TB de material audiovisual para más de 35 documentales. Tengo crédito en IMDb por la postproducción de <em>Maelstrom: 2001</em>. De ahí viene mi obsesión por no perder datos.',
      'about.p4': 'Uso IA como parte de mi forma de trabajar: agentes con Claude Code y MCP para revisar código, y la API de Claude para construir herramientas como Steam Review Insights.',
      'facts.location': 'ubicación', 'facts.now': 'ahora', 'facts.study': 'estudio',
      'facts.studyv': 'Tec. Univ. en Programación · UNSAM (2027)',
      'facts.langs': 'idiomas', 'facts.langsv': 'Español nativo · Inglés B2', 'facts.method': 'método',
      'exp.title': 'Dónde trabajé y qué logré',
      'proj.title': 'Cosas que construí', 'proj.featured': '★ Proyecto destacado', 'proj.code': 'Ver código',
      'sri.desc': 'API REST que importa las reseñas de Goblin Cleanup desde Steam y las clasifica con Claude en bugs, pedidos de mejora y comentarios positivos. Cada lunes, un flujo de n8n manda a Discord un resumen de la semana escrito por IA, con las reseñas destacadas y su link a Steam.',
      'sri.p1': '449 bugs y 344 pedidos de mejora detectados en 24 idiomas, por menos de USD 1',
      'sri.p2': '20 reseñas por llamada con structured outputs: ~USD 0,005 por lote',
      'sri.p3': 'PostgreSQL + Flyway, Docker Compose, 25 tests con Testcontainers y CI',
      'demo.hint': '↓ Probá el clasificador con reseñas reales',
      'demo.next': 'Clasificar otra reseña →',
      'demo.thinking': 'Claude Haiku 4.5 clasificando',
      'demo.result': 'Resultado:',
      'filter.all': 'Todos', 'filter.ai': 'IA y automatización',
      'skills.title': 'Con qué trabajo', 'edu.title': 'Formación',
      'contact.title': '¿Hablamos?',
      'contact.lead': 'Busco roles de Game Development (Unity/C#), Backend Java o integración de IA. Respondo en español o en inglés.',
      'contact.copied': '¡Copiado!', 'contact.cv': 'CV (PDF) ↓',
      'footer.built': 'Hecho a mano con HTML, CSS y JS', 'footer.top': 'Volver arriba ↑',
      'card.code': 'Ver código ↗', 'card.steam': 'Ver en Steam ↗', 'card.video': 'Video del sistema funcionando en el juego',
    },
    roles: ['Software Engineer', 'Unity / C# Developer', 'Backend Java Developer', 'AI Automation'],
    jobs: [
      {
        role: 'Software Engineer (C# / Unity)', company: 'Crisalu Games', date: 'Ago 2025 – Actualidad · Remoto',
        context: 'Goblin Cleanup: juego cooperativo para hasta 4 jugadores, publicado por Team17 en Steam (Early Access). Empecé part-time en paralelo con CONICET y pasé a full-time.',
        points: [
          'Diseñé desde cero el sistema de guardado y restauración de partidas multiplayer (serialización, checkpoints y reconstrucción de entidades con estado autoritativo del host), compatible entre versiones del juego.',
          'Reduje en un <strong>70%</strong> los bugs de desincronización reportados, resolviendo alrededor de <strong>50 incidencias</strong> de race conditions y lógica cliente-servidor en tiempo real.',
          'Desarrollé el sistema de emotes sincronizado en multiplayer y el modo foto in-game, con control de cámara, filtros y UI propia.',
          'Implementé la navegación por teclado y gamepad en todos los menús con UI Toolkit, con compatibilidad total con Steam Deck y soporte multirresolución, y el sistema de logros con Steamworks SDK.',
          'Integré Claude Code con Unity mediante MCP y creé agentes propios que auditan el código antes de cada pull request.',
          'Resolví más de <strong>300 tickets</strong> en Jira trabajando con Scrum y Kanban, en comunicación diaria en inglés con Team17.',
        ],
        tags: ['Unity', 'C#', 'FishNet', 'Steamworks', 'UI Toolkit', 'Cinemachine', 'MCP'],
      },
      {
        role: 'Backend Developer Java', company: 'CONICET · SIGERH', date: 'Sep 2024 – Oct 2025 · Buenos Aires',
        context: 'Sistema de recursos humanos de alcance nacional, con más de 30.000 usuarios.',
        points: [
          'Desarrollé el módulo de certificación horaria: búsqueda por CUIL de las fichadas de cada agente y reporte mensual en PDF con JasperReports (entradas, salidas y diferencia de horas).',
          'Desarrollé el módulo de cambio de cuenta bancaria: bandeja de aprobación para administradores, ABM de entidades bancarias y todas las validaciones del formulario.',
          'Implementé la validación de CBU con el algoritmo de dígitos verificadores, que comprueba si la cuenta corresponde al banco elegido.',
          'Optimicé las consultas de filtros de trámites sobre un esquema MySQL de más de <strong>300 tablas</strong> y resolví entre 6 y 7 incidencias de producción por semana.',
        ],
        tags: ['Java', 'Spring Boot', 'Hibernate', 'Struts 2', 'MySQL', 'JasperReports', 'Jenkins'],
      },
      {
        role: 'Data Manager y Asistente de Postproducción', company: 'CONICET Documental', date: 'Ago 2013 – Ago 2024 · Buenos Aires',
        context: 'Productora audiovisual de CONICET: documentales científicos para TV Pública, Paka Paka y Encuentro.',
        points: [
          'Gestioné el respaldo de más de <strong>300 TB</strong> de material en bruto, sin pérdida de datos en más de 10 años.',
          'Catalogué el material y lo seleccioné para el equipo de edición de más de <strong>35 documentales</strong>.',
          'Preparé guiones y transcripciones para los canales, y adapté subtítulos para personas sordas e hipoacúsicas para los vuelos de Aerolíneas Argentinas.',
          'Mantuve el sitio web de la productora en WordPress y produje piezas para redes con Premiere Pro. Crédito en IMDb: <em>Maelstrom: 2001</em>.',
        ],
        tags: ['Gestión de datos', 'Backups', 'WordPress', 'Premiere Pro'],
      },
    ],
    projects: [
      {
        name: 'Goblin Cleanup · Emote System', kind: 'Game Dev · Crisalu Games', cats: ['gamedev'],
        desc: 'Sistema completo de emotes: bailes y gestos que los jugadores disparan en partida, sincronizados en multiplayer e integrados con los animation controllers del juego.',
        tags: ['Unity', 'C#', 'FishNet'], video: 'assets/videos/emotes.mp4', steam: true,
      },
      {
        name: 'Goblin Cleanup · Snapshot Mode', kind: 'Game Dev · Crisalu Games', cats: ['gamedev'],
        desc: 'Modo foto in-game para capturar y compartir momentos de la partida: control de cámara, encuadre, filtros, efectos visuales y UI dedicada.',
        tags: ['Unity', 'C#', 'Cinemachine'], video: 'assets/videos/snapshot.mp4', steam: true,
      },
      {
        name: 'Goblin Cleanup · Save System', kind: 'Game Dev · Crisalu Games', cats: ['gamedev', 'backend'],
        desc: 'Sistema de guardado diseñado desde cero: persistencia del estado de los objetos, restauración dinámica de niveles y compatibilidad entre versiones, en singleplayer y multiplayer.',
        tags: ['Unity', 'C#', 'FishNet', 'Serialización'], steam: true,
      },
      {
        name: 'CodeBricks · Arkanoid en Assembly', kind: 'Proyecto universitario', cats: ['gamedev'],
        desc: 'Juego estilo Arkanoid escrito íntegramente en Assembly 8086, sin motor ni librerías: renderizado, input y lógica implementados a bajo nivel.',
        tags: ['Assembly 8086', 'TASM', 'DOSBox'], video: 'assets/videos/arkanoid.mp4', code: 'https://github.com/camitermine/TP-Final-SPD',
      },
      {
        name: 'Red neuronal desde cero', kind: 'Proyecto universitario', cats: ['ai'],
        desc: 'Red neuronal que clasifica comportamiento de jugadores en juegos online, construida y entrenada sin frameworks de ML: álgebra lineal y backpropagation implementados a mano.',
        tags: ['Python', 'NumPy'], code: 'https://github.com/camitermine/TpRedesNeuronales',
      },
      {
        name: 'Bots de automatización', kind: 'Proyecto universitario', cats: ['ai'],
        desc: 'Dos flujos en n8n: un bot de WhatsApp que responde preguntas frecuentes y envía las consultas por email, y un envío automático de newsletters a Discord.',
        tags: ['n8n', 'Webhooks', 'APIs REST'],
      },
      {
        name: 'MercadoLite', kind: 'Proyecto universitario', cats: ['frontend'],
        desc: 'E-commerce fullstack con arquitectura MVC, componentes React reutilizables y tipado estricto, que consume una API REST de forma asíncrona.',
        tags: ['TypeScript', 'React'],
      },
      {
        name: 'XSpace', kind: 'Proyecto universitario', cats: ['backend'],
        desc: 'Sistema de asignación de recursos y misiones espaciales modelado con patrones de diseño y validado con tests automatizados en CI.',
        tags: ['Kotlin', 'POO', 'GitHub Actions'],
      },
    ],
    skills: [
      { icon: '🎮', name: 'Game Development', items: ['Unity', 'C#', 'FishNet (multiplayer)', 'Steamworks SDK', 'UI Toolkit', 'Input System', 'Cinemachine', 'Blender'] },
      { icon: '⚙️', name: 'Backend', items: ['Java', 'Spring Boot', 'Hibernate / JPA', 'Struts 2', 'APIs REST', 'OpenAPI / Swagger', 'JasperReports'] },
      { icon: '🗄️', name: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'Flyway', 'Optimización de SQL'] },
      { icon: '🤖', name: 'IA y automatización', items: ['Claude API', 'Structured outputs', 'Claude Code', 'MCP', 'n8n', 'Python', 'NumPy', 'Pandas', 'Scikit-Learn'] },
      { icon: '🧪', name: 'Testing y DevOps', items: ['JUnit', 'Mockito', 'Testcontainers', 'Docker', 'Docker Compose', 'GitHub Actions', 'Jenkins', 'Git'] },
      { icon: '🎨', name: 'Frontend y diseño', items: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Figma', 'Adobe XD', 'Premiere Pro'] },
    ],
    edu: [
      { what: 'Tecnicatura Universitaria en Programación Informática', where: 'Universidad Nacional de San Martín (UNSAM)', when: '2022 – 2027 (egreso estimado)' },
      { what: 'Java Empresarial y Spring Boot', where: 'Udemy', when: '2024 – 2025' },
      { what: 'Full Stack Java', where: 'Agencia de Aprendizaje a lo largo de la Vida', when: '2023 · 6 meses' },
      { what: 'React', where: 'Oracle', when: '2023' },
    ],
  },

  en: {
    ui: {
      'skip': 'Skip to content',
      'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
      'nav.skills': 'Stack', 'nav.contact': 'Contact', 'nav.cv': 'Download CV',
      'hero.status': 'Open to new opportunities · Remote or Buenos Aires',
      'hero.hello': "Hi, I'm",
      'hero.lead': 'I build Java backends used by thousands of people, multiplayer systems in C# for a game published on Steam, and tools that use AI to solve real problems.',
      'hero.cta.projects': 'See projects', 'hero.cta.contact': 'Get in touch',
      'stats.years': 'years building software in production',
      'stats.users': "users on CONICET's HR system",
      'stats.desync': 'desync bugs in Goblin Cleanup',
      'stats.reviews': 'Steam reviews classified with AI',
      'about.title': 'Between backend, games and AI',
      'about.p1': "I'm a Software Engineer based in Buenos Aires. I currently work at <strong>Crisalu Games</strong> on <strong>Goblin Cleanup</strong>, a co-op game for up to 4 players published by <strong>Team17</strong> on Steam. There I design gameplay systems end to end: game saving, emotes, photo mode and multiplayer synchronization.",
      'about.p2': "Before that I built Java/Spring Boot features for <strong>SIGERH</strong>, CONICET's HR system used by more than 30,000 people across Argentina. That foundation in OOP, clean code and maintainable architecture is what I now apply to game systems.",
      'about.p3': 'And before coding, I spent over 10 years at <strong>CONICET Documental</strong>, managing 300+ TB of footage for more than 35 documentaries. I have an IMDb credit for post-production on <em>Maelstrom: 2001</em>. That is where my obsession with never losing data comes from.',
      'about.p4': 'AI is part of how I work: agents built with Claude Code and MCP to review code, and the Claude API to build tools like Steam Review Insights.',
      'facts.location': 'location', 'facts.now': 'now', 'facts.study': 'studying',
      'facts.studyv': 'Programming degree · UNSAM (2027)',
      'facts.langs': 'languages', 'facts.langsv': 'Spanish (native) · English B2', 'facts.method': 'workflow',
      'exp.title': 'Where I worked and what I achieved',
      'proj.title': 'Things I built', 'proj.featured': '★ Featured project', 'proj.code': 'View code',
      'sri.desc': 'REST API that imports Goblin Cleanup reviews from Steam and uses Claude to classify them into bugs, feature requests and praise. Every Monday, an n8n workflow posts an AI-written weekly summary to Discord, with the top reviews linked to Steam.',
      'sri.p1': '449 bugs and 344 feature requests found across 24 languages, for less than USD 1',
      'sri.p2': '20 reviews per request with structured outputs: ~USD 0.005 per batch',
      'sri.p3': 'PostgreSQL + Flyway, Docker Compose, 25 tests with Testcontainers and CI',
      'demo.hint': '↓ Try the classifier with real reviews',
      'demo.next': 'Classify another review →',
      'demo.thinking': 'Claude Haiku 4.5 is classifying',
      'demo.result': 'Result:',
      'filter.all': 'All', 'filter.ai': 'AI & automation',
      'skills.title': 'What I work with', 'edu.title': 'Education',
      'contact.title': "Let's talk",
      'contact.lead': "I'm looking for Game Development (Unity/C#), Java Backend or AI integration roles. Happy to talk in English or Spanish.",
      'contact.copied': 'Copied!', 'contact.cv': 'CV (PDF) ↓',
      'footer.built': 'Handmade with HTML, CSS and JS', 'footer.top': 'Back to top ↑',
      'card.code': 'View code ↗', 'card.steam': 'View on Steam ↗', 'card.video': 'Video of the system running in the game',
    },
    roles: ['Software Engineer', 'Unity / C# Developer', 'Java Backend Developer', 'AI Automation'],
    jobs: [
      {
        role: 'Software Engineer (C# / Unity)', company: 'Crisalu Games', date: 'Aug 2025 – Present · Remote',
        context: 'Goblin Cleanup: co-op game for up to 4 players, published by Team17 on Steam (Early Access). Started part-time alongside CONICET, then moved to full-time.',
        points: [
          'Designed from scratch the multiplayer save and restore system (serialization, checkpoints and entity rebuilding with host-authoritative state), compatible across game versions.',
          'Cut reported desync bugs by <strong>70%</strong>, fixing around <strong>50 issues</strong> involving race conditions and real-time client-server logic.',
          'Built the emote system, synchronized in multiplayer, and the in-game photo mode with camera controls, filters and its own UI.',
          'Implemented keyboard and gamepad navigation across every menu with UI Toolkit, with full Steam Deck support and multi-resolution layouts, plus the achievements system with the Steamworks SDK.',
          'Integrated Claude Code with Unity through MCP and built custom agents that audit the code before every pull request.',
          'Resolved <strong>300+ tickets</strong> in Jira using Scrum and Kanban, communicating daily in English with Team17.',
        ],
        tags: ['Unity', 'C#', 'FishNet', 'Steamworks', 'UI Toolkit', 'Cinemachine', 'MCP'],
      },
      {
        role: 'Java Backend Developer', company: 'CONICET · SIGERH', date: 'Sep 2024 – Oct 2025 · Buenos Aires',
        context: 'Nationwide HR system with more than 30,000 users.',
        points: [
          "Built the working-hours certification module: search an employee's clock-in records by CUIL and generate a monthly PDF report with JasperReports (entries, exits and hour differences).",
          'Built the bank account change module: approval queue for administrators, bank CRUD and all form validations.',
          'Implemented CBU (Argentine bank account number) validation using its check-digit algorithm, verifying that the account belongs to the selected bank.',
          'Optimized the SQL behind the request filters on a MySQL schema of <strong>300+ tables</strong>, and fixed 6–7 production incidents per week.',
        ],
        tags: ['Java', 'Spring Boot', 'Hibernate', 'Struts 2', 'MySQL', 'JasperReports', 'Jenkins'],
      },
      {
        role: 'Data Manager & Post-production Assistant', company: 'CONICET Documental', date: 'Aug 2013 – Aug 2024 · Buenos Aires',
        context: "CONICET's production company: science documentaries for Argentina's public TV channels.",
        points: [
          'Managed backups for <strong>300+ TB</strong> of raw footage, with zero data loss in over 10 years.',
          'Catalogued footage and selected material for the editors of <strong>35+ documentaries</strong>.',
          "Prepared scripts and transcripts for broadcasters, and adapted closed captions for deaf and hard-of-hearing viewers on Aerolíneas Argentinas' flights.",
          'Maintained the company website on WordPress and produced social media pieces with Premiere Pro. IMDb credit: <em>Maelstrom: 2001</em>.',
        ],
        tags: ['Data management', 'Backups', 'WordPress', 'Premiere Pro'],
      },
    ],
    projects: [
      {
        name: 'Goblin Cleanup · Emote System', kind: 'Game Dev · Crisalu Games', cats: ['gamedev'],
        desc: 'Full emote system: dances and gestures players trigger in-game, synchronized in multiplayer and wired into the game’s animation controllers.',
        tags: ['Unity', 'C#', 'FishNet'], video: 'assets/videos/emotes.mp4', steam: true,
      },
      {
        name: 'Goblin Cleanup · Snapshot Mode', kind: 'Game Dev · Crisalu Games', cats: ['gamedev'],
        desc: 'In-game photo mode to capture and share moments: camera control, framing, filters, visual effects and a dedicated UI.',
        tags: ['Unity', 'C#', 'Cinemachine'], video: 'assets/videos/snapshot.mp4', steam: true,
      },
      {
        name: 'Goblin Cleanup · Save System', kind: 'Game Dev · Crisalu Games', cats: ['gamedev', 'backend'],
        desc: 'Save system designed from scratch: object state persistence, dynamic level restoration and cross-version compatibility, in single-player and multiplayer.',
        tags: ['Unity', 'C#', 'FishNet', 'Serialization'], steam: true,
      },
      {
        name: 'CodeBricks · Arkanoid in Assembly', kind: 'University project', cats: ['gamedev'],
        desc: 'Arkanoid-style game written entirely in 8086 Assembly, with no engine or libraries: rendering, input and game logic built at the lowest level.',
        tags: ['8086 Assembly', 'TASM', 'DOSBox'], video: 'assets/videos/arkanoid.mp4', code: 'https://github.com/camitermine/TP-Final-SPD',
      },
      {
        name: 'Neural network from scratch', kind: 'University project', cats: ['ai'],
        desc: 'Neural network that classifies player behavior in online games, built and trained without ML frameworks: linear algebra and backpropagation implemented by hand.',
        tags: ['Python', 'NumPy'], code: 'https://github.com/camitermine/TpRedesNeuronales',
      },
      {
        name: 'Automation bots', kind: 'University project', cats: ['ai'],
        desc: 'Two n8n workflows: a WhatsApp bot that answers FAQs and forwards questions by email, and an automated newsletter sent to Discord.',
        tags: ['n8n', 'Webhooks', 'REST APIs'],
      },
      {
        name: 'MercadoLite', kind: 'University project', cats: ['frontend'],
        desc: 'Full-stack e-commerce app with a decoupled MVC architecture, reusable React components and strict typing, consuming a REST API asynchronously.',
        tags: ['TypeScript', 'React'],
      },
      {
        name: 'XSpace', kind: 'University project', cats: ['backend'],
        desc: 'Resource and space-mission allocation system modeled with design patterns and validated by automated tests in CI.',
        tags: ['Kotlin', 'OOP', 'GitHub Actions'],
      },
    ],
    skills: [
      { icon: '🎮', name: 'Game Development', items: ['Unity', 'C#', 'FishNet (multiplayer)', 'Steamworks SDK', 'UI Toolkit', 'Input System', 'Cinemachine', 'Blender'] },
      { icon: '⚙️', name: 'Backend', items: ['Java', 'Spring Boot', 'Hibernate / JPA', 'Struts 2', 'REST APIs', 'OpenAPI / Swagger', 'JasperReports'] },
      { icon: '🗄️', name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Flyway', 'SQL optimization'] },
      { icon: '🤖', name: 'AI & automation', items: ['Claude API', 'Structured outputs', 'Claude Code', 'MCP', 'n8n', 'Python', 'NumPy', 'Pandas', 'Scikit-Learn'] },
      { icon: '🧪', name: 'Testing & DevOps', items: ['JUnit', 'Mockito', 'Testcontainers', 'Docker', 'Docker Compose', 'GitHub Actions', 'Jenkins', 'Git'] },
      { icon: '🎨', name: 'Frontend & design', items: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Figma', 'Adobe XD', 'Premiere Pro'] },
    ],
    edu: [
      { what: 'University Degree in Computer Programming', where: 'Universidad Nacional de San Martín (UNSAM)', when: '2022 – 2027 (expected)' },
      { what: 'Enterprise Java & Spring Boot', where: 'Udemy', when: '2024 – 2025' },
      { what: 'Full Stack Java', where: 'Agencia de Aprendizaje a lo largo de la Vida', when: '2023 · 6 months' },
      { what: 'React', where: 'Oracle', when: '2023' },
    ],
  },
};

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
  renderTimeline(t);
  renderProjects(t);
  renderSkills(t);
  renderEdu(t);
  renderDemoReview(false);
  observeReveals();
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
  restartTyping();
});

/* ============ Tema ============ */
$('#theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.dataset.theme
    || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  storage('theme', next);
});

/* ============ Render de secciones ============ */
const chips = tags => `<ul class="chips">${tags.map(t => `<li>${t}</li>`).join('')}</ul>`;

function renderTimeline(t) {
  $('#timeline').innerHTML = t.jobs.map((job, i) => `
    <li class="job reveal" style="--d:${i * 0.08}s">
      <article class="job-card">
        <div class="job-head">
          <h3 class="job-role">${job.role}</h3>
          <span class="job-date mono">${job.date}</span>
        </div>
        <p class="job-company">${job.company}</p>
        <p class="job-context">${job.context}</p>
        <ul>${job.points.map(p => `<li>${p}</li>`).join('')}</ul>
        ${chips(job.tags)}
      </article>
    </li>`).join('');
}

function renderProjects(t) {
  const active = $('.filter.active')?.dataset.filter || 'all';
  $('#cards').innerHTML = t.projects.map((p, i) => `
    <article class="card reveal ${active !== 'all' && !p.cats.includes(active) ? 'hidden' : ''}"
             data-cats="${p.cats.join(' ')}" style="--d:${(i % 3) * 0.08}s">
      ${p.video ? `
        <div class="card-media">
          <video src="${p.video}" muted loop playsinline preload="none" aria-label="${t.ui['card.video']}"></video>
          <button class="media-toggle" aria-label="Play/Pause">▶</button>
        </div>` : ''}
      <div class="card-top"><span class="card-kind mono">${p.kind}</span></div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      ${chips(p.tags)}
      ${p.code ? `<a class="card-link" href="${p.code}" target="_blank" rel="noopener">${t.ui['card.code']}</a>` : ''}
      ${p.steam ? `<a class="card-link" href="${STEAM_URL}" target="_blank" rel="noopener">${t.ui['card.steam']}</a>` : ''}
    </article>`).join('');
  setupCards();
}

function renderSkills(t) {
  $('#skills-grid').innerHTML = t.skills.map((g, i) => `
    <div class="skill-group reveal" style="--d:${(i % 3) * 0.08}s">
      <h3><span aria-hidden="true">${g.icon}</span>${g.name}</h3>
      ${chips(g.items)}
    </div>`).join('');
}

function renderEdu(t) {
  $('#edu-list').innerHTML = t.edu.map(e => `
    <li><div><strong>${e.what}</strong><span class="edu-where">${e.where}</span></div><span class="edu-when">${e.when}</span></li>`).join('');
}

/* ============ Filtros de proyectos ============ */
$('#filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  $$('.filter').forEach(b => b.classList.toggle('active', b === btn));
  const f = btn.dataset.filter;
  $$('.card').forEach(card => {
    const show = f === 'all' || card.dataset.cats.split(' ').includes(f);
    card.classList.toggle('hidden', !show);
    if (show) card.classList.add('in');
  });
});

/* ============ Tarjetas: brillo y videos ============ */
const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(({ target, isIntersecting }) => {
    const btn = target.parentElement.querySelector('.media-toggle');
    if (isIntersecting && !reducedMotion && !target.dataset.paused) {
      target.play().then(() => { btn.textContent = '❚❚'; }).catch(() => {});
    } else {
      target.pause();
      btn.textContent = '▶';
    }
  });
}, { threshold: 0.5 });

function setupCards() {
  $$('.card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--cx', `${e.clientX - r.left}px`);
      card.style.setProperty('--cy', `${e.clientY - r.top}px`);
    });
  });
  $$('.card video').forEach(video => {
    videoObserver.observe(video);
    const btn = video.parentElement.querySelector('.media-toggle');
    const toggle = () => {
      if (video.paused) { delete video.dataset.paused; video.play(); btn.textContent = '❚❚'; }
      else { video.dataset.paused = '1'; video.pause(); btn.textContent = '▶'; }
    };
    btn.addEventListener('click', toggle);
    video.addEventListener('click', toggle);
  });
}

/* ============ Demo del clasificador ============ */
function renderChart() {
  const total = STATS.reduce((s, x) => s + x.value, 0);
  const max = Math.max(...STATS.map(s => s.value));
  $('#demo-chart').innerHTML = STATS.map(s => `
    <div class="bar-row">
      <span class="bar-label">${s.cat}</span>
      <span class="bar-track"><span class="bar-fill" style="background:var(--${s.cat === 'FEATURE_REQUEST' ? 'feature' : s.cat.toLowerCase()})" data-w="${(s.value / max) * 100}"></span></span>
      <span class="bar-value" title="${Math.round(s.value / total * 100)}%">${s.value.toLocaleString('es-AR')}</span>
    </div>`).join('');
}

let demoIndex = 0;
let demoTimer;
function renderDemoReview(animate = true) {
  const t = DATA[lang].ui;
  const r = DEMO_REVIEWS[demoIndex];
  $('#demo-meta').textContent = `${r.up ? '👍' : '👎'} [${r.lang}] · Goblin Cleanup`;
  $('#demo-text').textContent = `“${r.text}”`;
  const result = $('#demo-result');
  clearTimeout(demoTimer);
  const show = () => { result.innerHTML = `${t['demo.result']} <span class="cat cat-${r.cat}">${r.cat}</span>`; };
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

/* ============ Texto que se escribe solo ============ */
let typingTimer;
function restartTyping() {
  clearTimeout(typingTimer);
  const el = $('#typed');
  const roles = DATA[lang].roles;
  if (reducedMotion) { el.textContent = roles[0]; return; }
  let r = 0, i = roles[0].length, deleting = true;
  el.textContent = roles[0];
  const tick = () => {
    const word = roles[r];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = deleting ? 40 : 80;
    if (!deleting && i === word.length) { deleting = true; delay = 2200; }
    else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 300; }
    typingTimer = setTimeout(tick, delay);
  };
  typingTimer = setTimeout(tick, 2200);
}

/* ============ Contadores ============ */
function animateCount(el) {
  const to = Number(el.dataset.to);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const fmt = n => prefix + Math.round(n).toLocaleString(lang === 'es' ? 'es-AR' : 'en-US') + suffix;
  if (reducedMotion) { el.textContent = fmt(to); return; }
  const start = performance.now();
  const dur = 1600;
  const step = now => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ============ Animaciones al hacer scroll ============ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('in');
    $$('.count', el).forEach(animateCount);
    if (el.classList.contains('featured')) {
      $$('.bar-fill', el).forEach(b => { b.style.width = b.dataset.w + '%'; });
    }
    revealObserver.unobserve(el);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

function observeReveals() {
  $$('.reveal:not(.in), .reveal-stagger:not(.in)').forEach(el => revealObserver.observe(el));
  $$('.reveal-stagger').forEach(group => {
    [...group.children].forEach((c, i) => c.style.setProperty('--d', `${i * 0.1}s`));
  });
}

/* Nav, barra de progreso, línea de tiempo y parallax: un solo listener de scroll */
const nav = $('#nav');
const progress = $('.scroll-progress');
const timeline = $('#timeline');
const heroGrid = $('.hero-grid');
const sections = $$('main section[id]');
const navLinks = $$('.nav-links a');
let ticking = false;

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  nav.classList.toggle('scrolled', y > 20);
  if (!reducedMotion) heroGrid.style.setProperty('--parallax', `${y * 0.25}px`);

  const r = timeline.getBoundingClientRect();
  const p = (innerHeight * 0.6 - r.top) / r.height;
  timeline.style.setProperty('--progress', Math.max(0, Math.min(1, p)));

  let current = '';
  sections.forEach(s => { if (s.getBoundingClientRect().top <= innerHeight * 0.35) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  ticking = false;
}
addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

/* Brillo que sigue al cursor + inclinación de la tarjeta "sobre mí" */
if (!reducedMotion && matchMedia('(pointer: fine)').matches) {
  addEventListener('pointermove', e => {
    document.body.style.setProperty('--mx', `${e.clientX}px`);
    document.body.style.setProperty('--my', `${e.clientY}px`);
  }, { passive: true });
  const tilt = $('.tilt');
  tilt.addEventListener('pointermove', e => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  tilt.addEventListener('pointerleave', () => { tilt.style.transform = ''; });
}

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
  try {
    await navigator.clipboard.writeText(email);
    const c = $('#copied');
    c.classList.add('show');
    setTimeout(() => c.classList.remove('show'), 1600);
  } catch (e) { location.href = `mailto:${email}`; }
});

/* ============ Inicio ============ */
$('#year').textContent = new Date().getFullYear();
renderChart();
applyLanguage();
restartTyping();
onScroll();
