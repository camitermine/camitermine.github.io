/* =========================================================
   Portfolio · Camila Términe
   Todo el contenido está en DATA (es / en). Para editar un texto,
   cambiarlo acá; el HTML solo tiene la estructura.
   ========================================================= */

const DATA = {
  es: {
    ui: {
      'skip': 'Saltar al contenido',
      'nav.ai': 'GenAI', 'nav.experience': 'Experiencia', 'nav.projects': 'Proyectos',
      'nav.about': 'Sobre mí', 'nav.contact': 'Contacto', 'nav.cv': 'Descargar CV',
      'hero.role': 'Backend Software Engineer. Java, Spring Boot, Kotlin y GenAI.',
      'hero.lead': 'Desarrollo backends y sistemas cliente-servidor: módulos Java para un sistema de RRHH con más de 30.000 usuarios, y la persistencia y sincronización de un juego multiplayer publicado por Team17 en Steam. Uso GenAI en todo el ciclo de desarrollo, siempre con revisión humana.',
      'hero.cta.ai': 'Ver qué construí con IA', 'hero.cta.cv': 'Descargar CV',
      'career.caption': 'Antes de programar pasé once años cuidando el archivo audiovisual de CONICET. Desde 2024 escribo el software que guarda y sincroniza datos.',
      'ai.title': 'Cómo uso GenAI',
      'ai.lead': 'La uso para construir producto y para desarrollar. En los dos casos dejo registro de qué hizo el modelo y qué corregí yo.',
      'sri.sub': 'API REST en Spring Boot que clasifica feedback de jugadores con Claude',
      'sri.desc': 'Importa las 2.367 reseñas de Goblin Cleanup desde la API pública de Steam y las clasifica con Claude Haiku 4.5 en bugs, pedidos de mejora, comentarios positivos y otros, en 24 idiomas. Cada lunes, un flujo de n8n publica en Discord un resumen con los bugs y pedidos nuevos.',
      'sri.p1': '449 reportes de bugs y 344 pedidos de mejora detectados, por menos de USD 1 en total.',
      'sri.p2': '20 reseñas por llamada con structured outputs, y procesamiento por lotes que se retoma sin pérdidas si la API falla.',
      'sri.p3': 'PostgreSQL con migraciones Flyway, Docker Compose, 25 tests con JUnit, Mockito y Testcontainers, y CI en GitHub Actions.',
      'ttf.sub': 'Desarrollo asistido por IA, documentado como experimento',
      'ttf.desc': 'Un tateti táctico multiplayer en Unity 6 donde cada jugador tiene como máximo tres fichas. Lo construyo de forma iterativa con Claude Code y el MCP de Unity, bajo mi supervisión. Cada iteración queda registrada: qué le pedí a la IA, qué produjo y qué tuve que corregir.',
      'ttf.p1': 'Las reglas viven en un módulo de dominio en C# puro, sin dependencias del motor, con 33 tests unitarios y reutilizable en el modo local, el online y un futuro oponente con IA.',
      'ttf.p2': 'Decisiones de arquitectura registradas en ADRs, e instrucciones del agente versionadas en el repo (CLAUDE.md).',
      'ai.agents.title': 'Agentes de revisión en Crisalu Games',
      'ai.agents.desc': 'Integré Claude Code con Unity mediante Model Context Protocol y creé agentes y skills propios que auditan el código antes de cada pull request, para detectar bugs y acelerar los refactors.',
      'link.code': 'Ver código en GitHub',
      'demo.next': 'Clasificar otra reseña real',
      'demo.thinking': 'Claude Haiku 4.5 clasificando',
      'demo.result': 'Categoría:',
      'log.entry': 'Entrada', 'log.of': 'de',
      'exp.title': 'Experiencia',
      'proj.title': 'Otros proyectos',
      'proj.lead': 'Trabajo profesional y de la facultad, ordenado como un catálogo. Filtrá por área.',
      'filter.all': 'Todos', 'filter.ai': 'IA',
      'about.title': 'Sobre mí',
      'about.p1': 'Soy Software Engineer en Buenos Aires, con foco en backend y sistemas cliente-servidor. En <strong>CONICET</strong> desarrollé módulos en Java y Spring Boot para SIGERH: optimicé consultas sobre un esquema MySQL de más de 300 tablas, trabajé con integraciones a sistemas externos y resolví incidencias de producción todas las semanas.',
      'about.p2': 'Hoy, en <strong>Crisalu Games</strong>, diseño la sincronización de estado y la persistencia de <strong>Goblin Cleanup</strong>, un juego cooperativo publicado por Team17 en Steam, y mantengo la comunicación técnica en inglés con el publisher.',
      'about.p3': 'Antes de programar pasé más de diez años en <strong>CONICET Documental</strong> gestionando el archivo de más de 35 documentales, y tengo crédito en IMDb por la postproducción de <em>Maelstrom: 2001</em>. De ahí viene mi obsesión por no perder datos y por documentar lo que construyo.',
      'skills.title': 'Stack', 'edu.title': 'Formación', 'edu.cert': 'Ver certificado',
      'contact.title': '¿Hablamos?',
      'contact.lead': 'Busco roles de backend Java o Kotlin, o de integración de GenAI. Respondo en español o en inglés.',
      'contact.copy': 'Copiar email', 'contact.copied': 'Email copiado', 'contact.cv': 'CV en PDF',
      'footer.built': 'Hecho a mano con HTML, CSS y JavaScript.',
      'card.code': 'Código', 'card.steam': 'Goblin Cleanup en Steam', 'card.video': 'Video del sistema funcionando en el juego',
      'media.play': 'Reproducir video', 'media.pause': 'Pausar video',
      'game.cpu': 'Contra la máquina', 'game.pvp': 'Dos jugadores', 'game.reset': 'Nueva partida',
      'game.rule': 'Cada jugador tiene como máximo tres fichas. Al poner la cuarta, desaparece la más vieja.',
      'game.you': 'Te toca: X', 'game.thinking': 'La máquina piensa…', 'game.turn': 'Turno de {p}',
      'game.youWin': 'Ganaste. ¿Otra?', 'game.cpuWins': 'Ganó la máquina.', 'game.wins': 'Ganó {p}.',
      'game.cell': 'Fila {r}, columna {c}', 'game.empty': 'vacía', 'game.fades': 'se desvanece en la próxima jugada',
    },
    career: {
      today: 'hoy',
      notes: [
        { kind: 'archive', when: '2013 – 2024', what: 'Data manager y postproducción, CONICET Documental', fact: 'Más de 300 TB de material respaldado durante diez años, sin pérdida de datos, para más de 35 documentales.' },
        { kind: 'backend', when: '2024 – 2025', what: 'Backend Java, CONICET (SIGERH)', fact: 'Módulos en Spring Boot para el sistema nacional de RRHH, con más de 30.000 usuarios.' },
        { kind: 'games', when: '2025 – hoy', what: 'Software Engineer, Crisalu Games', fact: 'Sincronización cliente-servidor y persistencia de Goblin Cleanup: 70% menos bugs de desincronización.' },
      ],
    },
    log: [
      {
        n: 1, title: 'Verificación de la extracción del Core', date: '22 de septiembre de 2026',
        fields: [
          ['Pedido', 'Retomar la rama de extracción del Core y verificar que compila y que los tests pasan antes de seguir.'],
          ['Qué hizo la IA', 'Corrió los 33 tests por MCP y encontró una falla. Reprodujo la secuencia de jugadas fuera del test runner y aisló la causa: las fichas de relleno de O formaban una línea ganadora y la partida terminaba antes de tiempo. El bug estaba en los datos del test, no en el motor de reglas.'],
          ['Revisión humana', 'Sobre el plan pedí una clave de posición exacta en vez de un hash, tests de inmutabilidad y de orden de eventos, y commitear antes de regenerar la escena.'],
          ['Verificación', '33 de 33 tests pasan, sin errores de compilación.'],
        ],
      },
      {
        n: 2, title: 'Un helper contra secuencias contaminadas', date: '22 de septiembre de 2026',
        fields: [
          ['Pedido', 'Un helper que falle si una jugada de armado es rechazada o termina la partida antes de lo previsto. Restricción: no cambiar reglas ni aserciones que hoy pasan.'],
          ['Qué hizo la IA', 'Creó MoveSequence.Apply y lo aplicó en 8 tests. Lo intentó en un noveno, notó que borraba 6 aserciones existentes y lo revirtió.'],
          ['Aprendizaje', 'Un test que arma un escenario jugada por jugada tiene que verificar primero su propia premisa, para fallar donde está el error y no más adelante.'],
        ],
      },
      {
        n: 5, title: 'HUD: una hipótesis descartada con evidencia', date: '22 de septiembre de 2026',
        fields: [
          ['Pedido', 'Los textos del HUD se superponían. Mi hipótesis era que el generador de escena duplicaba objetos, y pedí verificarla por MCP antes de tocar nada.'],
          ['Qué hizo la IA', 'Inspeccionó la jerarquía y el YAML de la escena: no había duplicados. La causa era que el aviso y el contador compartían un mismo texto. Al probar en el Simulator encontró dos bugs de layout anidado y los midió con GetWorldCorners en vez de a ojo.'],
          ['Revisión humana', 'Aprobé el plan con cuatro ajustes, entre ellos que el bloqueo en vertical no fuera opcional porque lo exige el documento de diseño.'],
        ],
      },
    ],
    jobs: [
      {
        role: 'Software Engineer (C# / Unity)', company: 'Crisalu Games', when: 'Ago 2025 – hoy', where: 'Remoto',
        context: 'Goblin Cleanup: juego multiplayer cooperativo para hasta 4 jugadores, publicado por Team17 en Steam. Empecé part-time en paralelo con CONICET y pasé a full-time.',
        points: [
          'Diseñé desde cero el sistema de guardado y restauración de partidas multiplayer: serialización, checkpoints y reconstrucción de entidades a partir del estado autoritativo del host, compatible entre versiones del juego.',
          'Reduje un <strong>70%</strong> los bugs de desincronización reportados (alrededor de 50 incidencias) diagnosticando race conditions y corrigiendo la sincronización de estado cliente-servidor en tiempo real.',
          'Integré Claude Code con Unity mediante MCP y creé agentes y skills propios que auditan el código antes de cada pull request.',
          'Desarrollé features multiplayer sincronizadas (emotes, modo foto), la navegación por teclado y gamepad en todos los menús con UI Toolkit, compatible con Steam Deck, y el sistema de logros con Steamworks SDK.',
          'Resolví más de <strong>300 tickets</strong> en Jira con Scrum y Kanban, mantuve la comunicación técnica en inglés con Team17 y acompañé la incorporación de un nuevo integrante del equipo.',
        ],
        stack: 'C#, Unity, FishNet, Steamworks SDK, UI Toolkit, Claude Code, MCP',
      },
      {
        role: 'Backend Developer Java', company: 'CONICET', when: 'Sep 2024 – Oct 2025', where: 'Buenos Aires',
        context: 'SIGERH: sistema de recursos humanos de alcance nacional, con más de 30.000 usuarios.',
        points: [
          'Desarrollé el módulo de certificación horaria: búsqueda por CUIL de las fichadas de cada agente y reporte mensual en PDF con JasperReports con entradas, salidas y diferencia de horas.',
          'Desarrollé parte del módulo de cambio de cuenta bancaria: bandeja de trámites con aprobación restringida a administradores y validación de CBU con el algoritmo de dígitos verificadores.',
          'Optimicé las consultas SQL de los filtros de trámites sobre un esquema MySQL de más de <strong>300 tablas</strong>, mejorando sus tiempos de respuesta, y resolví entre 6 y 7 incidencias de producción por semana.',
          'Trabajé con integraciones a sistemas externos, como el servicio de notificaciones y el SINE.',
          'Trabajé con pull requests y code review entre pares, desplegué en los ambientes de desarrollo y testing con jobs de Jenkins, y documenté los módulos nuevos.',
        ],
        stack: 'Java, Spring Boot, Hibernate, Struts 2, MySQL, JasperReports, Jenkins',
      },
      {
        role: 'Data Manager y Asistente de Postproducción', company: 'CONICET Documental', when: 'Ago 2013 – Ago 2024', where: 'Buenos Aires',
        context: 'Productora audiovisual de CONICET: documentales científicos para TV Pública, Paka Paka y Encuentro.',
        points: [
          'Gestioné el respaldo y la organización de más de <strong>300 TB</strong> de material audiovisual durante más de 10 años, sin pérdida de datos, y catalogué el material para más de <strong>35 documentales</strong>.',
          'Mantuve el sitio web de la productora en WordPress y preparé transcripciones y subtítulos accesibles para su emisión en vuelos de Aerolíneas Argentinas. Crédito en IMDb: <em>Maelstrom: 2001</em>.',
        ],
        stack: 'Gestión de datos, backups, WordPress, Premiere Pro',
      },
    ],
    projects: [
      {
        name: 'Pasaporte BA', origin: 'Bases de Datos, UNSAM (grupal)', tab: 'Backend', cats: ['backend'],
        desc: 'App mobile de check-ins en bares, cafés, espacios culturales y murales de Buenos Aires. El backend en FastAPI tiene persistencia intercambiable con los patrones Repository y Factory: la misma API funciona sobre MySQL o HBase según un header de cada request.',
        stack: 'Python, FastAPI, MySQL, HBase, React Native (Expo), Docker Compose',
        code: 'https://github.com/camitermine/Pasaporte-BA',
      },
      {
        name: 'MercadoLite y MercadoLite Envíos', origin: 'UNSAM (grupal)', tab: 'Frontend y backend', cats: ['frontend', 'backend'],
        desc: 'Un marketplace en React y TypeScript sobre un framework MVVM, con búsqueda, filtros, paginación y pedidos con estados. Y un sistema de envíos con API REST propia en Kotlin, dashboard de KPIs y ABM de transportistas: cada pedido del marketplace genera un envío a través de la API.',
        stack: 'React, TypeScript, Kotlin, APIs REST, GitHub Actions',
      },
      {
        name: 'Goblin Cleanup: sistema de guardado', origin: 'Crisalu Games', tab: 'Backend', cats: ['backend', 'gamedev'],
        desc: 'Guardado y restauración de partidas multiplayer diseñado desde cero: serialización, checkpoints y reconstrucción de entidades a partir del estado autoritativo del host, compatible entre versiones del juego.',
        stack: 'C#, Unity, FishNet', steam: true,
      },
      {
        name: 'Xpace', origin: 'Algoritmos II, UNSAM (grupal)', tab: 'Backend', cats: ['backend'],
        desc: 'Gestión de expediciones espaciales con modelado orientado a objetos, patrones Strategy, Observer y Command, máquina de estados de misiones y reglas de validación de dominio. Tests con cobertura medida, CI y GitFlow con pull requests revisados.',
        stack: 'Kotlin, Gradle, GitHub Actions',
        code: 'https://github.com/camitermine/xpace',
      },
      {
        name: 'Red neuronal desde cero', origin: 'Inteligencia Artificial, UNSAM', tab: 'IA', cats: ['ai'],
        desc: 'Clasificación del comportamiento de jugadores en juegos online, sin frameworks de ML: álgebra lineal y backpropagation implementados a mano.',
        stack: 'Python, NumPy',
        code: 'https://github.com/camitermine/TpRedesNeuronales',
      },
      {
        name: 'Bots con n8n', origin: 'Proyecto personal', tab: 'IA', cats: ['ai'],
        desc: 'Un bot de WhatsApp que responde preguntas frecuentes y deriva las consultas por email, y un envío automático de newsletters a Discord.',
        stack: 'n8n, webhooks, APIs REST',
      },
      {
        name: 'Goblin Cleanup: emotes', origin: 'Crisalu Games', tab: 'Game dev', cats: ['gamedev'],
        desc: 'Bailes y gestos que los jugadores disparan en partida, sincronizados en multiplayer e integrados con los animation controllers del juego.',
        stack: 'C#, Unity, FishNet', video: 'assets/videos/emotes.mp4', steam: true,
      },
      {
        name: 'Goblin Cleanup: modo foto', origin: 'Crisalu Games', tab: 'Game dev', cats: ['gamedev'],
        desc: 'Modo foto in-game para capturar momentos de la partida, con control de cámara, encuadre, filtros y una UI propia.',
        stack: 'C#, Unity, Cinemachine', video: 'assets/videos/snapshot.mp4', steam: true,
      },
      {
        name: 'Arkanoid en Assembly 8086', origin: 'UNSAM', tab: 'Game dev', cats: ['gamedev'],
        desc: 'Renderizado, input y lógica de juego a bajo nivel, sin motor ni librerías.',
        stack: 'Assembly 8086, TASM, DOSBox', video: 'assets/videos/arkanoid.mp4',
        code: 'https://github.com/camitermine/TP-Final-SPD',
      },
    ],
    facts: [
      ['Ubicación', 'Buenos Aires, Argentina'],
      ['Ahora', 'Crisalu Games'],
      ['Estudio', 'Tecnicatura en Programación Informática, UNSAM'],
      ['Idiomas', 'Español nativo, inglés B2'],
      ['Trabajo con', 'Scrum, Kanban, code review'],
    ],
    skills: [
      ['Lenguajes', 'Java, Kotlin, TypeScript, JavaScript, Python, C#, SQL'],
      ['Backend', 'Spring Boot, FastAPI, Hibernate, JPA, Struts 2, APIs REST, OpenAPI, JasperReports, arquitectura en capas'],
      ['Bases de datos', 'PostgreSQL, MySQL, HBase, Flyway, modelado relacional y NoSQL, optimización de SQL'],
      ['GenAI', 'Claude API (Anthropic Java SDK), structured outputs, Claude Code, MCP, agentes de revisión de código, prompt engineering, n8n'],
      ['Frontend', 'React, TypeScript, React Native (Expo), HTML, CSS'],
      ['Testing y DevOps', 'JUnit, Mockito, Testcontainers, GitHub Actions, Jenkins, Docker, Docker Compose, Git, Linux'],
      ['Cliente-servidor', 'Unity, FishNet (host autoritativo), Steamworks SDK, serialización y persistencia de estado'],
      ['Patrones', 'Repository, Factory, Strategy, Observer, Command, MVC, MVVM'],
    ],
    edu: [
      { what: 'Tecnicatura Universitaria en Programación Informática', where: 'UNSAM, 2022 – 2026. Bases de Datos, Programación Concurrente y Distribuida, Redes, Algoritmos I a III, Inteligencia Artificial.' },
      { what: 'Universidad Java: de cero a experto', where: 'Udemy, 2025. 150 horas.', url: 'https://ude.my/UC-0a1b81f8-2baf-4191-90af-627ed2af4b3d' },
      { what: 'Especialización en Unity', where: 'Codo a Codo 4.0, Gobierno de la Ciudad de Buenos Aires, 2022. 208 horas.' },
      { what: 'Full Stack Java', where: 'Codo a Codo 4.0, Agencia de Aprendizaje a lo largo de la Vida, 2021. 198 horas.' },
      { what: 'Oracle Next Education (ONE)', where: 'Oracle y Alura Latam, 2022 – 2023. Formaciones en programación, HTML y CSS, Front End y React.', url: 'https://app.aluracursos.com/user/cami-termine/degree-react-grupo4-one-15509/certificate' },
      { what: 'Big data al servicio de una gestión pública eficaz', where: 'Instituto Nacional de la Administración Pública (INAP), 2024.' },
    ],
  },

  en: {
    ui: {
      'skip': 'Skip to content',
      'nav.ai': 'GenAI', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
      'nav.about': 'About', 'nav.contact': 'Contact', 'nav.cv': 'Download CV',
      'hero.role': 'Backend Software Engineer. Java, Spring Boot, Kotlin and GenAI.',
      'hero.lead': 'I build backends and client-server systems: Java modules for an HR system with more than 30,000 users, and the persistence and state sync of a multiplayer game published by Team17 on Steam. I use GenAI across the whole development cycle, always with human review.',
      'hero.cta.ai': 'See what I built with AI', 'hero.cta.cv': 'Download CV',
      'career.caption': 'Before coding, I spent eleven years looking after CONICET’s film archive. Since 2024 I write the software that saves and syncs data.',
      'ai.title': 'How I use GenAI',
      'ai.lead': 'I use it to build products and to write software. Either way, I keep a record of what the model did and what I corrected.',
      'sri.sub': 'Spring Boot REST API that classifies player feedback with Claude',
      'sri.desc': 'It imports all 2,367 Goblin Cleanup reviews from Steam’s public API and classifies them with Claude Haiku 4.5 into bugs, feature requests, praise and other, across 24 languages. Every Monday, an n8n workflow posts a summary of new bugs and requests to Discord.',
      'sri.p1': '449 bug reports and 344 feature requests found, for less than USD 1 in total.',
      'sri.p2': '20 reviews per request with structured outputs, and batch processing that resumes without data loss if the API fails.',
      'sri.p3': 'PostgreSQL with Flyway migrations, Docker Compose, 25 tests with JUnit, Mockito and Testcontainers, and CI on GitHub Actions.',
      'ttf.sub': 'AI-assisted development, documented as an experiment',
      'ttf.desc': 'A tactical multiplayer tic-tac-toe in Unity 6 where each player has at most three pieces. I build it iteratively with Claude Code and the Unity MCP, under my supervision. Every iteration is logged: what I asked the AI, what it produced and what I had to correct.',
      'ttf.p1': 'The rules live in a pure C# domain module with no engine dependencies, covered by 33 unit tests and reused by local play, online play and a future AI opponent.',
      'ttf.p2': 'Architecture decisions recorded as ADRs, and agent instructions versioned in the repo (CLAUDE.md).',
      'ai.agents.title': 'Review agents at Crisalu Games',
      'ai.agents.desc': 'I integrated Claude Code with Unity through the Model Context Protocol and built custom agents and skills that audit the code before every pull request, to catch bugs and speed up refactors.',
      'link.code': 'View code on GitHub',
      'demo.next': 'Classify another real review',
      'demo.thinking': 'Claude Haiku 4.5 is classifying',
      'demo.result': 'Category:',
      'log.entry': 'Entry', 'log.of': 'of',
      'exp.title': 'Experience',
      'proj.title': 'More projects',
      'proj.lead': 'Professional and university work, arranged like a catalog. Filter by area.',
      'filter.all': 'All', 'filter.ai': 'AI',
      'about.title': 'About me',
      'about.p1': 'I’m a Software Engineer based in Buenos Aires, focused on backend and client-server systems. At <strong>CONICET</strong> I built Java and Spring Boot modules for SIGERH: I optimized queries on a MySQL schema of more than 300 tables, worked on integrations with external systems and fixed production incidents every week.',
      'about.p2': 'Today, at <strong>Crisalu Games</strong>, I design the state sync and persistence of <strong>Goblin Cleanup</strong>, a co-op game published by Team17 on Steam, and handle technical communication in English with the publisher.',
      'about.p3': 'Before coding, I spent more than ten years at <strong>CONICET Documental</strong> managing the archive for over 35 documentaries, and I have an IMDb credit for post-production on <em>Maelstrom: 2001</em>. That’s where my obsession with never losing data, and with documenting what I build, comes from.',
      'skills.title': 'Stack', 'edu.title': 'Education', 'edu.cert': 'View certificate',
      'contact.title': 'Let’s talk',
      'contact.lead': 'I’m looking for Java or Kotlin backend roles, or GenAI integration work. Happy to talk in English or Spanish.',
      'contact.copy': 'Copy email', 'contact.copied': 'Email copied', 'contact.cv': 'CV as PDF',
      'footer.built': 'Handmade with HTML, CSS and JavaScript.',
      'card.code': 'Code', 'card.steam': 'Goblin Cleanup on Steam', 'card.video': 'Video of the system running in the game',
      'media.play': 'Play video', 'media.pause': 'Pause video',
      'game.cpu': 'Vs computer', 'game.pvp': 'Two players', 'game.reset': 'New game',
      'game.rule': 'Each player can have at most three pieces. Placing a fourth removes the oldest one.',
      'game.you': 'Your turn: X', 'game.thinking': 'The computer is thinking…', 'game.turn': '{p} to move',
      'game.youWin': 'You won. Another one?', 'game.cpuWins': 'The computer won.', 'game.wins': '{p} wins.',
      'game.cell': 'Row {r}, column {c}', 'game.empty': 'empty', 'game.fades': 'fades on the next move',
    },
    career: {
      today: 'now',
      notes: [
        { kind: 'archive', when: '2013 – 2024', what: 'Data manager and post-production, CONICET Documental', fact: 'Over 300 TB of footage backed up across ten years with zero data loss, for more than 35 documentaries.' },
        { kind: 'backend', when: '2024 – 2025', what: 'Java backend, CONICET (SIGERH)', fact: 'Spring Boot modules for the national HR system, used by more than 30,000 people.' },
        { kind: 'games', when: '2025 – now', what: 'Software Engineer, Crisalu Games', fact: 'Client-server sync and persistence for Goblin Cleanup: 70% fewer desync bugs.' },
      ],
    },
    log: [
      {
        n: 1, title: 'Verifying the Core extraction', date: 'September 22, 2026',
        fields: [
          ['Request', 'Pick up the Core extraction branch and check that it compiles and the tests pass before moving on.'],
          ['What the AI did', 'Ran the 33 tests through MCP and found one failure. It replayed the move sequence outside the test runner and isolated the cause: O’s filler pieces formed a winning line, so the game ended early. The bug was in the test data, not in the rules engine.'],
          ['Human review', 'On the plan, I asked for an exact position key instead of a hash, tests for state immutability and event order, and a commit before regenerating the scene.'],
          ['Verification', '33 of 33 tests pass, no compile errors.'],
        ],
      },
      {
        n: 2, title: 'A helper against contaminated sequences', date: 'September 22, 2026',
        fields: [
          ['Request', 'A helper that fails if a setup move is rejected or ends the game earlier than intended. Constraint: don’t change any rules or any assertion that passes today.'],
          ['What the AI did', 'Created MoveSequence.Apply and used it in 8 tests. It tried a ninth, noticed it removed 6 existing assertions and reverted it.'],
          ['Lesson', 'A test that builds a scenario move by move has to check its own premise first, so it fails where the mistake is and not further down.'],
        ],
      },
      {
        n: 5, title: 'HUD: a hypothesis ruled out with evidence', date: 'September 22, 2026',
        fields: [
          ['Request', 'HUD labels were overlapping. My hypothesis was that the scene builder duplicated objects, and I asked for it to be checked through MCP before touching anything.'],
          ['What the AI did', 'Inspected the hierarchy and the scene YAML: there were no duplicates. The cause was that the warning and the counter shared one text field. While testing in the Simulator it found two nested-layout bugs and measured them with GetWorldCorners instead of by eye.'],
          ['Human review', 'I approved the plan with four changes, including making the portrait lock mandatory, since the design document requires it.'],
        ],
      },
    ],
    jobs: [
      {
        role: 'Software Engineer (C# / Unity)', company: 'Crisalu Games', when: 'Aug 2025 – now', where: 'Remote',
        context: 'Goblin Cleanup: co-op multiplayer game for up to 4 players, published by Team17 on Steam. Started part-time alongside CONICET, then moved to full-time.',
        points: [
          'Designed the multiplayer save and restore system from scratch: serialization, checkpoints and entity rebuilding from the host’s authoritative state, compatible across game versions.',
          'Cut reported desync bugs by <strong>70%</strong> (around 50 issues) by diagnosing race conditions and fixing real-time client-server state sync.',
          'Integrated Claude Code with Unity through MCP and built custom agents and skills that audit the code before every pull request.',
          'Built synchronized multiplayer features (emotes, photo mode), keyboard and gamepad navigation across every menu with UI Toolkit, with Steam Deck support, and the achievements system with the Steamworks SDK.',
          'Resolved <strong>300+ tickets</strong> in Jira using Scrum and Kanban, handled technical communication in English with Team17 and onboarded a new team member.',
        ],
        stack: 'C#, Unity, FishNet, Steamworks SDK, UI Toolkit, Claude Code, MCP',
      },
      {
        role: 'Java Backend Developer', company: 'CONICET', when: 'Sep 2024 – Oct 2025', where: 'Buenos Aires',
        context: 'SIGERH: nationwide human resources system with more than 30,000 users.',
        points: [
          'Built the working-hours certification module: search an employee’s clock-in records by CUIL and generate a monthly PDF report with JasperReports showing entries, exits and hour differences.',
          'Built part of the bank account change module: a request queue with approval restricted to administrators, and CBU validation using its check-digit algorithm.',
          'Optimized the SQL behind the request filters on a MySQL schema of <strong>300+ tables</strong>, improving response times, and fixed 6–7 production incidents per week.',
          'Worked on integrations with external systems, such as the notification service and SINE.',
          'Worked with pull requests and peer code review, deployed to development and testing environments with Jenkins jobs, and documented new modules.',
        ],
        stack: 'Java, Spring Boot, Hibernate, Struts 2, MySQL, JasperReports, Jenkins',
      },
      {
        role: 'Data Manager & Post-production Assistant', company: 'CONICET Documental', when: 'Aug 2013 – Aug 2024', where: 'Buenos Aires',
        context: 'CONICET’s production company: science documentaries for Argentina’s public TV channels.',
        points: [
          'Managed backups and organization for <strong>300+ TB</strong> of footage over more than 10 years with zero data loss, and catalogued material for <strong>35+ documentaries</strong>.',
          'Maintained the company website on WordPress and prepared transcripts and accessible captions for broadcast on Aerolíneas Argentinas flights. IMDb credit: <em>Maelstrom: 2001</em>.',
        ],
        stack: 'Data management, backups, WordPress, Premiere Pro',
      },
    ],
    projects: [
      {
        name: 'Pasaporte BA', origin: 'Databases course, UNSAM (team)', tab: 'Backend', cats: ['backend'],
        desc: 'Mobile app for checking in at bars, cafés, cultural venues and murals in Buenos Aires. The FastAPI backend has swappable persistence using the Repository and Factory patterns: the same API runs on MySQL or HBase depending on a request header.',
        stack: 'Python, FastAPI, MySQL, HBase, React Native (Expo), Docker Compose',
        code: 'https://github.com/camitermine/Pasaporte-BA',
      },
      {
        name: 'MercadoLite and MercadoLite Envíos', origin: 'UNSAM (team)', tab: 'Frontend and backend', cats: ['frontend', 'backend'],
        desc: 'A React and TypeScript marketplace on an MVVM framework, with search, filters, pagination and orders with states. Plus a shipping system with its own Kotlin REST API, a KPI dashboard and carrier management: every marketplace order creates a shipment through the API.',
        stack: 'React, TypeScript, Kotlin, REST APIs, GitHub Actions',
      },
      {
        name: 'Goblin Cleanup: save system', origin: 'Crisalu Games', tab: 'Backend', cats: ['backend', 'gamedev'],
        desc: 'Multiplayer save and restore designed from scratch: serialization, checkpoints and entity rebuilding from the host’s authoritative state, compatible across game versions.',
        stack: 'C#, Unity, FishNet', steam: true,
      },
      {
        name: 'Xpace', origin: 'Algorithms II, UNSAM (team)', tab: 'Backend', cats: ['backend'],
        desc: 'Space expedition management with object-oriented modeling, Strategy, Observer and Command patterns, a mission state machine and domain validation rules. Tests with measured coverage, CI and GitFlow with reviewed pull requests.',
        stack: 'Kotlin, Gradle, GitHub Actions',
        code: 'https://github.com/camitermine/xpace',
      },
      {
        name: 'Neural network from scratch', origin: 'Artificial Intelligence course, UNSAM', tab: 'AI', cats: ['ai'],
        desc: 'Classifies player behavior in online games without ML frameworks: linear algebra and backpropagation implemented by hand.',
        stack: 'Python, NumPy',
        code: 'https://github.com/camitermine/TpRedesNeuronales',
      },
      {
        name: 'n8n bots', origin: 'Personal project', tab: 'AI', cats: ['ai'],
        desc: 'A WhatsApp bot that answers FAQs and forwards questions by email, and an automated newsletter sent to Discord.',
        stack: 'n8n, webhooks, REST APIs',
      },
      {
        name: 'Goblin Cleanup: emotes', origin: 'Crisalu Games', tab: 'Game dev', cats: ['gamedev'],
        desc: 'Dances and gestures players trigger in-game, synchronized in multiplayer and wired into the game’s animation controllers.',
        stack: 'C#, Unity, FishNet', video: 'assets/videos/emotes.mp4', steam: true,
      },
      {
        name: 'Goblin Cleanup: photo mode', origin: 'Crisalu Games', tab: 'Game dev', cats: ['gamedev'],
        desc: 'In-game photo mode to capture moments of a match, with camera control, framing, filters and its own UI.',
        stack: 'C#, Unity, Cinemachine', video: 'assets/videos/snapshot.mp4', steam: true,
      },
      {
        name: 'Arkanoid in 8086 Assembly', origin: 'UNSAM', tab: 'Game dev', cats: ['gamedev'],
        desc: 'Rendering, input and game logic at the lowest level, with no engine or libraries.',
        stack: '8086 Assembly, TASM, DOSBox', video: 'assets/videos/arkanoid.mp4',
        code: 'https://github.com/camitermine/TP-Final-SPD',
      },
    ],
    facts: [
      ['Location', 'Buenos Aires, Argentina'],
      ['Now', 'Crisalu Games'],
      ['Studying', 'Computer Programming degree, UNSAM'],
      ['Languages', 'Spanish (native), English B2'],
      ['Works with', 'Scrum, Kanban, code review'],
    ],
    skills: [
      ['Languages', 'Java, Kotlin, TypeScript, JavaScript, Python, C#, SQL'],
      ['Backend', 'Spring Boot, FastAPI, Hibernate, JPA, Struts 2, REST APIs, OpenAPI, JasperReports, layered architecture'],
      ['Databases', 'PostgreSQL, MySQL, HBase, Flyway, relational and NoSQL modeling, SQL optimization'],
      ['GenAI', 'Claude API (Anthropic Java SDK), structured outputs, Claude Code, MCP, code review agents, prompt engineering, n8n'],
      ['Frontend', 'React, TypeScript, React Native (Expo), HTML, CSS'],
      ['Testing & DevOps', 'JUnit, Mockito, Testcontainers, GitHub Actions, Jenkins, Docker, Docker Compose, Git, Linux'],
      ['Client-server', 'Unity, FishNet (host-authoritative), Steamworks SDK, state serialization and persistence'],
      ['Patterns', 'Repository, Factory, Strategy, Observer, Command, MVC, MVVM'],
    ],
    edu: [
      { what: 'University Degree in Computer Programming', where: 'UNSAM, 2022 – 2026. Databases, Concurrent and Distributed Programming, Networks, Algorithms I to III, Artificial Intelligence.' },
      { what: 'Java University: zero to expert', where: 'Udemy, 2025. 150 hours.', url: 'https://ude.my/UC-0a1b81f8-2baf-4191-90af-627ed2af4b3d' },
      { what: 'Unity Specialization', where: 'Codo a Codo 4.0, Buenos Aires City Government, 2022. 208 hours.' },
      { what: 'Full Stack Java', where: 'Codo a Codo 4.0, Agencia de Aprendizaje a lo largo de la Vida, 2021. 198 hours.' },
      { what: 'Oracle Next Education (ONE)', where: 'Oracle and Alura Latam, 2022 – 2023. Programming, HTML and CSS, Front End and React tracks.', url: 'https://app.aluracursos.com/user/cami-termine/degree-react-grupo4-one-15509/certificate' },
      { what: 'Big data for effective public management', where: 'National Institute of Public Administration (INAP), 2024.' },
    ],
  },
};

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
