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
    pregunta: 'Cuando en el desarrollo de sus actividades laborales enfrenta una situación donde un compañero propone omitir un paso del procedimiento para agilizar el resultado, ¿cuál es la acción que mejor refleja el compromiso con el control interno?',
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
    pregunta: 'Cuando realiza sus actividades diarias y debe asegurar el cumplimiento de lineamientos institucionales, ¿cuál de las siguientes prácticas refleja una adecuada cultura de control?',
    opciones: [
      ['A', 'Ejecutar las actividades sin verificar los lineamientos para optimizar el tiempo.'],
      ['B', 'Revisar los procedimientos solo si surge alguna duda.'],
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
    pregunta: 'Cuando identifica una situación que podría afectar el cumplimiento de un proceso, ¿cuál es la acción que mejor refleja una adecuada gestión del riesgo?',
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
    pregunta: 'Durante la ejecución de sus actividades, detecta que un proceso podría retrasarse por falta de información de otra dependencia. ¿Cómo actúa?',
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
    pregunta: 'Cuando está finalizando un informe y detecta que un dato clave no coincide con la fuente original, ¿cuál es la acción que mejor refleja un adecuado autocontrol?',
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
    pregunta: 'Antes de finalizar una actividad, ¿qué acción refleja una adecuada aplicación de controles?',
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
    pregunta: 'Cuando recibe información para desarrollar una actividad y detecta que está incompleta, ¿qué acción refleja una adecuada gestión de la información?',
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
    pregunta: 'Si durante sus actividades identifica una irregularidad en la información, ¿cómo actúa?',
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
    pregunta: 'En el seguimiento a un plan de mejoramiento, identifica que una acción no se ha cumplido en el plazo establecido. ¿Qué hace?',
    opciones: [
      ['A', 'Dar por cerrada la acción para evitar retrasos en el informe.'],
      ['B', 'Esperar a que el responsable actualice la información.'],
      ['C', 'Registrar el incumplimiento, solicitar actualización y verificar el nuevo compromiso hasta su cumplimiento.'],
      ['D', 'Informar de manera informal sin dejar evidencia.']
    ],
    correcta: 'C',
    valor: 10
  },
  {
    id: 10,
    seccion: 'Monitoreo',
    pregunta: 'Cuando observa que un indicador presenta un comportamiento inusual o negativo, ¿cuál es la acción más adecuada?',
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
