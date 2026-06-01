const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqnkrz8JekRWH9DA3sMtMDzU6xQs-G_sU0PvKVuwWBmh4VkrX4HCKjqqWKIusrXWtlWQ/exec";

const SECTIONS = [
  { name: 'Ambiente de Control', icon: '🏛️', color: '#3ed6c8' },
  { name: 'Evaluación del Riesgo', icon: '⚠️', color: '#ffca5c' },
  { name: 'Actividades de Control', icon: '✅', color: '#83f0a8' },
  { name: 'Información y Comunicación', icon: '📡', color: '#2b93ff' },
  { name: 'Monitoreo', icon: '📊', color: '#ff7070' }
];

const QUESTIONS = [
  // Sección 1: Ambiente de Control
  {
    id: 1,
    seccion: 'Ambiente de Control',
    pregunta: 'Un funcionario de la Secretaría de Desarrollo Social de la Gobernación de Cundinamarca gestiona la entrega de subsidios para el adulto mayor en los municipios del departamento. Ante la alta afluencia de solicitudes y la presión de la comunidad, un compañero de oficina le propone omitir la visita de validación socioeconómica en el terreno para un grupo de beneficiarios, sugiriendo aprobarlos directamente con los datos del Sisbén para acelerar el indicador de entrega.',
    opciones: [
      ['A', 'Aceptar la sugerencia para cumplir más rápido con la actividad.'],
      ['B', 'Mantener el procedimiento establecido, explicar la importancia de cumplirlo e informar la situación por los canales definidos si es necesario.'],
      ['C', 'Omitir el paso, pero dejar evidencia para justificar la decisión.'],
      ['D', 'Ignorar la situación y continuar con tu trabajo sin intervenir.']
    ],
    correcta: 'B',
    valor: 10
  },
  {
    id: 2,
    seccion: 'Ambiente de Control',
    pregunta: 'En la Secretaría de la Mujer y Equidad de Género de la Gobernación de Cundinamarca, el equipo técnico debe consolidar y cargar el reporte de ejecución de los programas de apoyo a las mujeres emprendedoras del departamento en la plataforma del Sistema Integrado de Gestión Institucional. Debido a la alta demanda y la cercanía del cierre de vigencia, un profesional del área se enfrenta a un volumen masivo de información documental proveniente de las distintas provincias. Al priorizar estas actividades diarias dentro de la dependencia, ¿cuál de las siguientes conductas refleja una adecuada cultura y ambiente de control por parte del funcionario en el marco del MIPG departamental?',
    opciones: [
      ['A', 'Ejecutar las actividades sin verificar los lineamientos para optimizar el tiempo.'],
      ['B', 'Revisar los procedimientos, solo si surge alguna duda.'],
      ['C', 'Verificar de manera constante que sus actividades cumplan con los procedimientos definidos antes de finalizarlas.'],
      ['D', 'Delegar la revisión de cumplimiento a otros compañeros.']
    ],
    correcta: 'C',
    valor: 10
  },

  // Sección 2: Evaluación del Riesgo
  {
    id: 3,
    seccion: 'Evaluación del Riesgo',
    pregunta: 'Un profesional de la Secretaría de Movilidad Contemporánea de la Gobernación de Cundinamarca está a cargo de consolidar las bases de datos para el recaudo de trámites de tránsito departamentales. Durante sus actividades diarias, identifica una falla intermitente en la sincronización de la plataforma digital que podría generar duplicidad en los registros o retrasos en los reportes de recaudo. El funcionario sabe que el mapa de riesgos de la secretaría tiene tipificado el "fallo tecnológico en sistemas de información masivos" como un riesgo institucional que impacta directamente el recaudo departamental. Frente a esta situación que podría afectar el cumplimiento normativo y financiero del proceso, ¿cuál es la acción que mejor refleja una adecuada gestión del riesgo por parte del servidor público?',
    opciones: [
      ['A', 'Informar verbalmente a un compañero y continuar con sus actividades.'],
      ['B', 'No realizar ninguna acción hasta que el riesgo se materialice.'],
      ['C', 'Registrar y reportar la situación en los medios definidos y ejecutar acciones para prevenir su impacto.'],
      ['D', 'Ajustar sus actividades sin registrar ni reportar la situación.']
    ],
    correcta: 'C',
    valor: 10
  },
  {
    id: 4,
    seccion: 'Evaluación del Riesgo',
    pregunta: 'En la Secretaría de Educación de la Gobernación de Cundinamarca, un profesional técnico está a cargo de estructurar los pliegos de condiciones para la licitación del Programa de Alimentación Escolar (PAE) del próximo año. Para finalizar el documento institucional, requiere obligatoriamente un informe demográfico y socioeconómico actualizado que debe remitir la Secretaría de Planeación departamental. El funcionario detecta que la entrega de dicha información presenta retrasos internos, lo cual podría postergar la licitación y vulnerar el derecho de los estudiantes en los municipios no certificados. Ante esta situación que amenaza directamente el cumplimiento oportuno del proceso misional, ¿cómo debe actuar el funcionario bajo una adecuada cultura de gestión del riesgo en el marco del MIPG?',
    opciones: [
      ['A', 'Esperar a que el problema ocurra para tomar acciones.'],
      ['B', 'Informar verbalmente a su jefe y continuar con sus tareas.'],
      ['C', 'Registrar la situación como riesgo, reportarla en los medios definidos y proponer acciones preventivas.'],
      ['D', 'Ajustar sus actividades sin dejar evidencia ni reporte.']
    ],
    correcta: 'C',
    valor: 10
  },

  // Sección 3: Actividades de Control
  {
    id: 5,
    seccion: 'Actividades de Control',
    pregunta: 'En la Secretaría de Hacienda de la Gobernación de Cundinamarca, un profesional técnico se encuentra finalizando el reporte consolidado del recaudo del Impuesto sobre Vehículos Automotores del último trimestre. Faltando pocos minutos para cargar el documento definitivo en el sistema institucional y remitirlo a la Contraloría de Cundinamarca, el funcionario detecta que la cifra total de recaudo de la Provincia de Sabana Centro registrada en su informe no coincide con los estados de cuenta originales emitidos por la entidad bancaria recaudadora. Frente a esta inconsistencia en una actividad de control, ¿cuál de las siguientes acciones refleja un adecuado autocontrol por parte del funcionario en el ejercicio de sus funciones diarias?',
    opciones: [
      ['A', 'Entregar el informe y luego informar la inconsistencia.'],
      ['B', 'Verificar la información, corregir el dato y dejar evidencia antes de entregar el informe.'],
      ['C', 'Ajustar el dato sin verificar la fuente para cumplir con el tiempo.'],
      ['D', 'No entregar el informe hasta tener respuesta de su jefe.']
    ],
    correcta: 'B',
    valor: 10
  },
  {
    id: 6,
    seccion: 'Actividades de Control',
    pregunta: 'En la Secretaría de Educación de la Gobernación de Cundinamarca, un profesional universitario está encargado de proyectar los actos administrativos (resoluciones) para la asignación de traslados ordinarios de personal docente en las instituciones educativas de los municipios no certificados del departamento. El proceso requiere confrontar minuciosamente la cédula de cada docente, la plaza disponible reportada en el sistema institucional y el orden de la lista de elegibles, con el fin de evitar vicios de legalidad o posteriores demandas a la entidad. Antes de finalizar y enviar formalmente los proyectos de resolución al despacho del secretario para su respectiva firma, ¿qué acción del profesional refleja una adecuada aplicación de las actividades de control en el marco del MIPG departamental?',
    opciones: [
      ['A', 'No realizar verificación para ahorrar tiempo.'],
      ['B', 'Revisar ocasionalmente sin dejar evidencia.'],
      ['C', 'Revisar, validar la actividad y dejar evidencia (correo, registro o sistema).'],
      ['D', 'Confiar únicamente en que la actividad está correcta.']
    ],
    correcta: 'C',
    valor: 10
  },

  // Sección 4: Información y Comunicación
  {
    id: 7,
    seccion: 'Información y Comunicación',
    pregunta: 'Un profesional de la Secretaría de Vivienda de la Gobernación de Cundinamarca recibe el expediente digital para proyectar el informe de viabilidad técnica de una obra de mejoramiento de vivienda en la Provincia de Almeidas. Al revisar los documentos cargados en el sistema de gestión documental, nota que los planos topográficos adjuntos corresponden a otra zona del departamento y que falta el análisis de suelos indispensable para emitir el concepto institucional definitivo. El plazo para la entrega del informe vence al finalizar la semana. Ante esta situación que compromete la calidad del insumo recibido, ¿qué acción por parte del profesional refleja una adecuada gestión de la información y comunicación en el marco del MIPG departamental?',
    opciones: [
      ['A', 'Completar el trabajo con la información disponible.'],
      ['B', 'Ajustar los datos según su criterio para evitar retrasos.'],
      ['C', 'Verificar la información, solicitar aclaración por un canal formal y dejar evidencia antes de continuar.'],
      ['D', 'Esperar sin realizar ninguna acción.']
    ],
    correcta: 'C',
    valor: 10
  },
  {
    id: 8,
    seccion: 'Información y Comunicación',
    pregunta: 'En la Dirección de Rentas de la Secretaría de Hacienda de la Gobernación de Cundinamarca, un analista se encuentra procesando las liquidaciones extemporáneas del impuesto sobre vehículos. Mientras cruza los datos en el sistema financiero de la entidad, identifica que los registros de pagos de un lote de contribuyentes muestran alteraciones en las fechas de validación y descuentos aplicados que no coinciden con los soportes bancarios físicos ni con el calendario tributario legal vigente. El analista sospecha que se trata de una inconsistencia sistémica grave o una alteración indebida de la información. Si durante el desarrollo de sus actividades diarias el funcionario identifica esta irregularidad en la información institucional, ¿cómo debe actuar bajo los lineamientos de la dimensión de Información y Comunicación del MIPG?',
    opciones: [
      ['A', 'Comunicarla verbalmente.'],
      ['B', 'No reportarla para evitar inconvenientes.'],
      ['C', 'Reportarla por canales formales como correo, sistema o jefe inmediato.'],
      ['D', 'Ignorarla si no afecta directamente tu trabajo.']
    ],
    correcta: 'C',
    valor: 10
  },

  // Sección 5: Monitoreo
  {
    id: 9,
    seccion: 'Monitoreo',
    pregunta: 'En la Secretaría de Bienestar Verde de la Gobernación de Cundinamarca, un funcionario es el encargado de realizar el seguimiento mensual a las acciones de mejora suscritas en el plan de mejoramiento institucional, el cual se derivó de una auditoría realizada por la Contraloría de Cundinamarca respecto a la entrega de licencias ambientales y concesiones de agua provinciales. Al revisar los soportes de la vigencia, el funcionario identifica que una de las acciones clave —consistente en la actualización del software de registro de cuencas— tiene como fecha límite el día de hoy, pero el equipo que supervisa la plataforma reporta que la actividad se encuentra apenas en un 30% de ejecución debido a problemas contractuales. Ante el incumplimiento evidente del plazo establecido para esta acción del plan de mejoramiento, ¿cómo debe actuar el funcionario responsable del monitoreo de acuerdo con los lineamientos del MIPG departamental?',
    opciones: [
      ['A', 'Esperar a que la dependencia responsable termine la actividad sin importar la fecha, para no generar alarmas innecesarias.'],
      ['B', 'Modificar directamente las fechas del cronograma en el sistema de control interno para que no se refleje el retraso ante la Contraloría.'],
      ['C', 'Registrar formalmente el avance real, reportar la alerta de incumplimiento al líder del proceso y solicitar los soportes de justificación para tramitar la reprogramación sustentada ante Control Interno.'],
      ['D', 'Eliminar esa acción específica del plan de mejoramiento argumentando fallas de fuerza mayor por parte del contratista.']
    ],
    correcta: 'C',
    valor: 10
  },
  {
    id: 10,
    seccion: 'Monitoreo',
    pregunta: 'En la Secretaría de Ciencia, Tecnología e Innovación de la Gobernación de Cundinamarca, un profesional técnico realiza el seguimiento mensual al tablero de control del Plan de Desarrollo Departamental. Al revisar el indicador relacionado con el "Número de jóvenes rurales capacitados en herramientas de transformación digital", detecta una caída drástica e inusual del 45% en la provincia de Rionegro en comparación con el trimestre anterior. Aunque esta meta específica está asignada formalmente a otra dirección de la dependencia, el funcionario sabe que el rezago impactará directamente el Índice de Gestión de toda la secretaría al cierre de la vigencia. Frente a este comportamiento inusual o negativo detectado en el indicador, ¿cuál es la acción más adecuada que debe adoptar el funcionario bajo una sólida cultura de monitoreo y evaluación de resultados?',
    opciones: [
      ['A', 'Ignorarlo porque no afecta directamente sus funciones.'],
      ['B', 'Esperar a que alguien más lo revise en informes periódicos.'],
      ['C', 'Analizar el indicador, identificar posibles causas y reportar la situación para su seguimiento.'],
      ['D', 'Ajustar sus actividades sin revisar el indicador.']
    ],
    correcta: 'C',
    valor: 10
  }
];

/* ── Normalización de Secretarías ── */
const SECRETARIA_ALIASES = [
  { keywords: ['uaegrd'], canonical: 'UAEGRD' },
  { keywords: ['uaegrc'], canonical: 'UAEGRD' },
  { keywords: ['gestion', 'riesgo'], canonical: 'UAEGRD' },
  { keywords: ['hacienda'], canonical: 'Secretaría de Hacienda' },
  { keywords: ['gobierno'], canonical: 'Secretaría de Gobierno' },
  { keywords: ['salud'], canonical: 'Secretaría de Salud' },
  { keywords: ['educacion'], canonical: 'Secretaría de Educación' },
  { keywords: ['planeacion'], canonical: 'Secretaría de Planeación' },
  { keywords: ['infraestructura'], canonical: 'Secretaría de Infraestructura' },
  { keywords: ['desarrollo', 'social'], canonical: 'Secretaría de Desarrollo Social' },
  { keywords: ['desarrollo', 'economico'], canonical: 'Secretaría de Desarrollo Económico' },
  { keywords: ['ambiente'], canonical: 'Secretaría de Ambiente' },
  { keywords: ['medio', 'ambiente'], canonical: 'Secretaría de Medio Ambiente' },
  { keywords: ['cultura'], canonical: 'Secretaría de Cultura' },
  { keywords: ['deporte'], canonical: 'Secretaría del Deporte' },
  { keywords: ['juridica'], canonical: 'Secretaría Jurídica' },
  { keywords: ['administrativa'], canonical: 'Secretaría Administrativa' },
  { keywords: ['general'], canonical: 'Secretaría General' },
  { keywords: ['tic'], canonical: 'Secretaría TIC' },
  { keywords: ['tecnologia'], canonical: 'Secretaría TIC' },
  { keywords: ['mujer'], canonical: 'Secretaría de la Mujer' },
  { keywords: ['movilidad'], canonical: 'Secretaría de Movilidad' },
  { keywords: ['vivienda'], canonical: 'Secretaría de Vivienda' },
  { keywords: ['seguridad'], canonical: 'Secretaría de Seguridad' },
  { keywords: ['transparencia'], canonical: 'Secretaría de Transparencia' },
  { keywords: ['interior'], canonical: 'Secretaría del Interior' },
  { keywords: ['agricultura'], canonical: 'Secretaría de Agricultura' },
  { keywords: ['turismo'], canonical: 'Secretaría de Turismo' },
  { keywords: ['participacion'], canonical: 'Secretaría de Participación' },
  { keywords: ['control', 'interno'], canonical: 'Oficina de Control Interno' },
  { keywords: ['contraloria'], canonical: 'Contraloría' },
  { keywords: ['personeria'], canonical: 'Personería' },
];

function stripDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function normalizeSecretaria(raw) {
  try {
    const val = String(raw || '').trim();
    if (!val) return 'Sin dato';
    const cleaned = stripDiacritics(val.replace(/\s+/g, ' '));
    for (const alias of SECRETARIA_ALIASES) {
      if (alias.keywords.every(kw => cleaned.includes(kw))) {
        return alias.canonical;
      }
    }
    return val.replace(/\s+/g, ' ').replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  } catch (e) {
    return String(raw || 'Sin dato');
  }
}

const state = {
  participant: null,
  questions: [],
  currentIndex: 0,
  selectedAnswer: null,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answers: [],
  timePerQuestion: 25,
  timeLeft: 25,
  timer: null,
  startAt: null,
  leaderboard: [],
  currentSection: null
};

const $ = (id) => document.getElementById(id);

document.addEventListener('DOMContentLoaded', () => {
  $('startBtn').addEventListener('click', () => showScreen('screenForm'));
  $('backWelcomeBtn').addEventListener('click', () => showScreen('screenWelcome'));
  $('validateBtn').addEventListener('click', startQuiz);
  $('nextBtn').addEventListener('click', nextQuestion);
  $('skipBtn').addEventListener('click', skipQuestion);
  $('restartBtn').addEventListener('click', resetExperience);
  $('statQuestions').textContent = QUESTIONS.length;
  $('statTime').textContent = `${state.timePerQuestion} s`;
  $('timerText').textContent = state.timePerQuestion;

  // Theme toggle
  initTheme();
  $('themeToggle').addEventListener('click', toggleTheme);

  loadLeaderboard();
});

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  $(id).classList.add('active');
}

function startQuiz() {
  const secretaria = $('secretaria').value.trim();
  const nombre = $('nombre').value.trim();
  const correo = $('correo').value.trim();
  if (!secretaria || !nombre || !correo) {
    toast('Completa todos los campos (Secretaría, Nombre y Correo).');
    return;
  }
  state.participant = { secretaria, nombre, correo };
  state.questions = prepareQuestions(QUESTIONS);
  state.currentIndex = 0;
  state.selectedAnswer = null;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answers = [];
  state.startAt = Date.now();
  state.currentSection = null;
  updateHud();
  showScreen('screenQuiz');
  renderQuestion();
}

/* Prepares questions keeping section order but shuffling options within each question */
function prepareQuestions(source) {
  return source.map(q => ({
    ...q,
    opciones: shuffleArray([...q.opciones])
  }));
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  if (!q) {
    finishQuiz();
    return;
  }

  const newSection = q.seccion;
  const isNewSection = state.currentSection !== newSection;
  state.currentSection = newSection;

  if (isNewSection) {
    showSectionTransition(newSection, () => {
      displayQuestion(q);
    });
  } else {
    animateQuestionSwap(() => {
      displayQuestion(q);
    });
  }
}

function displayQuestion(q) {
  $('sectionChip').textContent = q.seccion;
  $('countChip').textContent = `Pregunta ${state.currentIndex + 1} de ${state.questions.length}`;
  $('bonusChip').textContent = `+${q.valor} pts`;

  // Show image banner only for first 5 questions
  const banner = $('questionBanner');
  if (q.id <= 5) {
    banner.classList.add('visible');
  } else {
    banner.classList.remove('visible');
  }

  $('questionTitle').textContent = q.pregunta;
  $('helperText').textContent = 'Selecciona una respuesta antes de continuar.';
  $('nextBtn').disabled = true;
  $('progressText').textContent = `Avance ${state.currentIndex + 1}/${state.questions.length}`;
  $('progressBar').style.width = `${(state.currentIndex / state.questions.length) * 100}%`;
  state.selectedAnswer = null;

  const grid = $('optionsGrid');
  grid.innerHTML = '';
  q.opciones.forEach(([key, text], i) => {
    const btn = document.createElement('button');
    btn.className = 'option-card';
    btn.style.animationDelay = `${i * 80}ms`;
    btn.innerHTML = `
      <div class="option-text">${escapeHtml(text)}</div>
      <div class="option-mark"></div>
    `;
    btn.addEventListener('click', () => selectAnswer(key, btn));
    grid.appendChild(btn);
  });

  // Add entrance animation to options
  grid.querySelectorAll('.option-card').forEach(card => {
    card.classList.add('option-enter');
    card.addEventListener('animationend', () => card.classList.remove('option-enter'), { once: true });
  });

  startTimer();
}

/* Animate question swap (within same section) */
function animateQuestionSwap(callback) {
  const quizCard = document.querySelector('.quiz-card');
  quizCard.classList.add('question-exit');
  setTimeout(() => {
    quizCard.classList.remove('question-exit');
    quizCard.classList.add('question-enter');
    callback();
    setTimeout(() => quizCard.classList.remove('question-enter'), 400);
  }, 250);
}

/* Shows a full-screen section transition animation */
function showSectionTransition(sectionName, callback) {
  const sectionData = SECTIONS.find(s => s.name === sectionName) || SECTIONS[0];
  const sectionIndex = SECTIONS.findIndex(s => s.name === sectionName);
  const overlay = $('sectionOverlay');

  // Set content
  $('sectionTransIcon').textContent = sectionData.icon;
  $('sectionTransName').textContent = sectionData.name;
  $('sectionTransNumber').textContent = `Sección ${sectionIndex + 1} de ${SECTIONS.length}`;

  // Set accent color
  overlay.style.setProperty('--section-accent', sectionData.color);

  // Build progress dots
  const dotsContainer = $('sectionTransDots');
  dotsContainer.innerHTML = SECTIONS.map((s, i) =>
    `<div class="section-dot ${i <= sectionIndex ? 'active' : ''}" style="--dot-color: ${s.color}"></div>`
  ).join('');

  // Create floating particles
  spawnSectionParticles(overlay, sectionData.color);

  // Show overlay
  overlay.classList.add('visible');

  // Auto-hide after animation
  setTimeout(() => {
    overlay.classList.add('leaving');
    setTimeout(() => {
      overlay.classList.remove('visible', 'leaving');
      callback();
    }, 500);
  }, 2000);
}

/* Spawn floating particles for section transition */
function spawnSectionParticles(container, color) {
  const particleLayer = container.querySelector('.section-particles');
  particleLayer.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('span');
    p.className = 'section-particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.width = p.style.height = `${4 + Math.random() * 10}px`;
    p.style.background = color;
    p.style.animationDelay = `${Math.random() * 1.2}s`;
    p.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    particleLayer.appendChild(p);
  }
}

function selectAnswer(letter, button) {
  document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
  button.classList.add('selected');
  state.selectedAnswer = letter;
  $('nextBtn').disabled = false;
  $('helperText').textContent = 'Respuesta registrada. Puedes continuar.';
  playTone(540, 0.05, 'sine');
}

function nextQuestion() {
  if (!state.selectedAnswer) {
    toast('Selecciona una opción o usa Saltar.');
    return;
  }
  registerAnswer(state.selectedAnswer);
}

function skipQuestion() {
  registerAnswer(null);
}

function registerAnswer(selected) {
  clearInterval(state.timer);
  const q = state.questions[state.currentIndex];
  const isCorrect = selected === q.correcta;
  const gained = isCorrect ? q.valor : 0;

  if (isCorrect) {
    state.score += gained;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    toast(`¡Correcto! +${gained} puntos`);
    playSuccessSound();
    if (state.streak >= 3) launchConfetti(26);
  } else {
    state.streak = 0;
    toast(selected ? 'Respuesta registrada.' : 'Pregunta saltada.');
    playTone(selected ? 220 : 180, 0.08, selected ? 'square' : 'sawtooth');
  }

  state.answers.push({
    id: q.id,
    seccion: q.seccion,
    selected: selected || 'Sin respuesta',
    correct: q.correcta,
    isCorrect,
    timeRemaining: state.timeLeft,
    points: gained
  });

  state.currentIndex += 1;
  updateHud();
  renderQuestion();
}

function updateHud() {
  $('scoreText').textContent = `Score: ${state.score}`;
  $('streakBadge').textContent = `Racha: ${state.streak}`;
  $('streakBanner').textContent = `🔥 Racha actual: ${state.streak}`;
}

function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = state.timePerQuestion;
  paintTimer();
  state.timer = setInterval(() => {
    state.timeLeft -= 1;
    paintTimer();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      toast('Tiempo agotado.');
      registerAnswer(null);
    }
  }, 1000);
}

function paintTimer() {
  const pct = Math.max(0, (state.timeLeft / state.timePerQuestion) * 100);
  $('timerText').textContent = state.timeLeft;
  $('timerRing').style.background = `conic-gradient(var(--warning) ${pct}%, rgba(255,255,255,.08) 0)`;
}

async function finishQuiz() {
  clearInterval(state.timer);
  $('progressBar').style.width = '100%';
  $('progressText').textContent = 'Completado';

  const maxScore = QUESTIONS.length * 10;
  const percentage = Math.round((state.score / maxScore) * 100);
  const level = percentage >= 85 ? 'Fortalecido' : percentage >= 60 ? 'En desarrollo' : 'Inicial';
  const payload = {
    secretaria: state.participant.secretaria,
    nombre: state.participant.nombre,
    correo: state.participant.correo,
    score: state.score,
    percentage,
    level,
    timeSpent: Math.round((Date.now() - state.startAt) / 1000),
    bestStreak: state.bestStreak,
    answers: state.answers
  };

  $('finalScore').textContent = state.score;
  $('finalPercent').textContent = `${percentage}%`;
  $('finalLevel').textContent = level;
  $('resultTitle').textContent = `${state.participant.nombre}, terminaste el reto.`;
  $('resultSubtitle').textContent = `Secretaría: ${state.participant.secretaria}. Enviando datos a Google Sheets...`;
  showScreen('screenResult');
  launchConfetti(48);
  playFinishSound();

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!data.ok) throw new Error(data.message || 'No se pudo guardar');
    $('resultSubtitle').textContent = `Secretaría: ${state.participant.secretaria}. Resultado guardado correctamente.`;
    toast('Resultado enviado a Google Sheets.');
    await loadLeaderboard();
  } catch (error) {
    console.error(error);
    $('resultSubtitle').textContent = 'No fue posible guardar el resultado. Revisa permisos o CORS en Apps Script.';
    toast('Error al enviar a Apps Script.');
  }
}

async function loadLeaderboard() {
  try {
    const response = await fetch(`${APPS_SCRIPT_URL}?all=true`);
    const data = await response.json();
    const leaderboard = Array.isArray(data.leaderboard) ? data.leaderboard : [];

    const filteredRows = leaderboard.map(item => ({
      ...item,
      secretaria: normalizeSecretaria(item.secretaria)
    })).filter(item =>
      !['PRUEBA', 'prueba', 'x', '.', 'Participante'].includes(item.nombre)
    );

    state.leaderboard = filteredRows;
    renderLeaderboard(filteredRows);
    renderPodium(filteredRows);
  } catch (error) {
    console.error("Error cargando leaderboard:", error);
    $('leaderboard').innerHTML = '<div class="empty-state">No fue posible cargar el leaderboard.</div>';
  }
}

function parseCsvLine(line) {
  const result = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = "";
    } else {
      cur += char;
    }
  }
  result.push(cur.trim());
  return result;
}

/** 
 * Protege la privacidad mostrando solo el primer nombre y la inicial del apellido.
 * Ejemplo: "Santiago Calderon" -> "Santiago C."
 */
function maskName(name) {
  if (!name || name === 'Participante' || name === 'PRUEBA') return name;
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return parts[0];
  const firstName = parts[0];
  const lastInitial = parts[1][0] ? parts[1][0].toUpperCase() + '.' : '';
  return `${firstName} ${lastInitial}`;
}

function renderLeaderboard(items) {
  const box = $('leaderboard');
  if (!items.length) {
    box.innerHTML = '<div class="empty-state">Aún no hay resultados registrados.</div>';
    return;
  }
  box.innerHTML = items.slice(0, 10).map((item, index) => `
    <div class="leader-item top-${index + 1}">
      <div class="leader-rank">${index + 1}</div>
      <div>
        <div class="leader-name">${escapeHtml(item.nombre || 'Participante')}</div>
        <div class="leader-meta">${escapeHtml(item.secretaria || '')} · ${escapeHtml(item.level || '')}</div>
      </div>
      <div class="leader-score">${Number(item.score || 0)} pts</div>
    </div>
  `).join('');
}

function renderPodium(items) {
  const podium = $('podium');
  if (!items.length) {
    podium.innerHTML = '';
    return;
  }
  const top = [items[1], items[0], items[2]];
  const classes = ['second', 'first', 'third'];
  const medals = ['🥈', '🥇', '🥉'];
  podium.innerHTML = top.map((item, index) => item ? `
    <div class="podium-card ${classes[index]}">
      <div class="podium-medal">${medals[index]}</div>
      <strong>${escapeHtml(item.nombre || 'Participante')}</strong>
      <p>${escapeHtml(item.secretaria || '')}</p>
      <div class="leader-score" style="margin-top:10px">${Number(item.score || 0)} pts</div>
    </div>
  ` : `<div class="podium-card ${classes[index]}"><div class="podium-medal">${medals[index]}</div><p>Sin dato</p></div>`).join('');
}

function resetExperience() {
  $('secretaria').value = '';
  $('nombre').value = '';
  state.participant = null;
  state.questions = [];
  state.currentIndex = 0;
  state.selectedAnswer = null;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answers = [];
  state.startAt = null;
  state.currentSection = null;
  updateHud();
  $('progressBar').style.width = '0%';
  $('progressText').textContent = 'Listo para iniciar';
  $('timerText').textContent = state.timePerQuestion;
  showScreen('screenWelcome');
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function launchConfetti(count) {
  const host = $('confetti');
  host.innerHTML = '';
  const colors = ['#3ed6c8', '#2b93ff', '#ffca5c', '#ff7070', '#ffffff'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.opacity = '.95';
    piece.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
    piece.style.animationDelay = `${Math.random() * .4}s`;
    host.appendChild(piece);
  }
  setTimeout(() => { host.innerHTML = ''; }, 3200);
}

function playTone(freq, duration, type = 'sine') {
  try {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = .03;
    osc.connect(gain);
    gain.connect(context.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + duration);
    osc.stop(context.currentTime + duration);
  } catch (e) { }
}

function playSuccessSound() {
  playTone(660, .08, 'triangle');
  setTimeout(() => playTone(860, .08, 'triangle'), 90);
}

function playFinishSound() {
  playTone(523, .1, 'triangle');
  setTimeout(() => playTone(659, .1, 'triangle'), 120);
  setTimeout(() => playTone(784, .18, 'triangle'), 240);
}

function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._hide);
  el._hide = setTimeout(() => el.classList.remove('show'), 2600);
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

/* ── Theme Toggle ──────────────────────────────────── */
/* ── Theme Toggle ──────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('quiz-theme') || 'light';
  applyTheme(saved);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const validTheme = theme === 'dark' ? 'dark' : 'light';
  html.setAttribute('data-theme', validTheme);
  localStorage.setItem('quiz-theme', validTheme);

  const btn = $('themeToggle');
  if (btn) {
    btn.textContent = validTheme === 'light' ? '☀️' : '🌙';
  }
}
