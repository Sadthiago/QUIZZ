const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqnkrz8JekRWH9DA3sMtMDzU6xQs-G_sU0PvKVuwWBmh4VkrX4HCKjqqWKIusrXWtlWQ/exec";

const QUESTIONS = [
  {id:1,seccion:'Ambiente de control',pregunta:'¿En el último mes, ha consultado o aplicado el código de integridad en alguna situación laboral?',opciones:[['A','No lo conozco o no lo he usado'],['B','Lo conozco, pero no lo he aplicado recientemente'],['C','Sí, lo he aplicado en decisiones o situaciones concretas']],correcta:'C',valor:5},
  {id:2,seccion:'Ambiente de control',pregunta:'En su trabajo diario, ¿con qué frecuencia verifica que sus actividades cumplan con lineamientos o procedimientos definidos?',opciones:[['A','Siempre (antes de finalizar la actividad)'],['B','Algunas veces'],['C','Nunca']],correcta:'A',valor:5},
  {id:3,seccion:'Ambiente de control',pregunta:'Respecto a sus actividades (contractuales o funcionales), usted:',opciones:[['A','No tiene claridad sobre ellas'],['B','Las conoce, pero no están documentadas o no las consulta'],['C','Las tiene documentadas y las consulta cuando es necesario']],correcta:'C',valor:5},
  {id:4,seccion:'Ambiente de control',pregunta:'Durante una actividad laboral, un compañero le sugiere omitir un paso del procedimiento para agilizar el resultado. Usted sabe que esto va en contra de los lineamientos establecidos. ¿Qué hace?',opciones:[['A','Mantiene el procedimiento establecido, explica la importancia de cumplirlo e informa la situación por los canales definidos si es necesario'],['B','Acepta la sugerencia para cumplir más rápido con la actividad'],['C','Omite el paso, pero deja evidencia para justificar la decisión'],['D','Ignora la situación y continúa con su trabajo sin intervenir']],correcta:'A',valor:5},
  {id:5,seccion:'Evaluación del riesgo',pregunta:'En su proceso, usted:',opciones:[['A','Conoce algunos riesgos, pero no participa en su gestión'],['B','Puede identificar riesgos y ha participado en su registro o actualización'],['C','No conoce los riesgos del proceso']],correcta:'B',valor:5},
  {id:6,seccion:'Evaluación del riesgo',pregunta:'¿En qué herramienta o medio se registran y actualizan los riesgos de su proceso?',opciones:[['A','En documentos informales o sin periodicidad definida'],['B','No se registran'],['C','En una matriz formal (ej. aplicativo institucional o archivo oficial) actualizada periódicamente']],correcta:'C',valor:5},
  {id:7,seccion:'Evaluación del riesgo',pregunta:'Cuando identifica una situación que puede afectar el proceso, usted:',opciones:[['A','Solo informa verbalmente'],['B','Registra y reporta la situación y ejecuta acciones para prevenirlo'],['C','No realiza ninguna acción']],correcta:'B',valor:5},
  {id:8,seccion:'Evaluación del riesgo',pregunta:'Durante la ejecución de sus actividades, identifica que un proceso podría presentar retrasos por falta de información oportuna de otra dependencia. ¿Qué hace?',opciones:[['A','Registra la situación como un posible riesgo, la reporta en los medios definidos y propone acciones para prevenir el impacto'],['B','Informa verbalmente a su jefe y continúa con sus actividades'],['C','Espera a que el problema se materialice para tomar acciones'],['D','Ajusta sus actividades sin registrar ni reportar la situación']],correcta:'A',valor:5},
  {id:9,seccion:'Actividades de control',pregunta:'Para realizar sus actividades, usted:',opciones:[['A','Consulta procedimientos documentados y los aplica'],['B','Conoce los procedimientos, pero no los consulta'],['C','No existen o no los conoce']],correcta:'A',valor:5},
  {id:10,seccion:'Actividades de control',pregunta:'Antes de finalizar una actividad, usted:',opciones:[['A','Revisa ocasionalmente sin dejar evidencia'],['B','Revisa, valida o deja evidencia (correo, registro, sistema)'],['C','No realiza verificación']],correcta:'B',valor:5},
  {id:11,seccion:'Actividades de control',pregunta:'Su trabajo es:',opciones:[['A','Revisado o validado por otra instancia o persona y queda evidencia'],['B','Revisado ocasionalmente'],['C','No es revisado']],correcta:'A',valor:5},
  {id:12,seccion:'Actividades de control',pregunta:'Usted está finalizando un informe y nota que un dato clave no coincide con la fuente original. El tiempo de entrega es limitado y su jefe no está disponible. ¿Qué hace?',opciones:[['A','Verifica la información, corrige el dato y deja evidencia del ajuste realizado antes de entregar el informe'],['B','Entrega el informe como está y luego informa la inconsistencia'],['C','Ajusta el dato sin verificar la fuente para cumplir con el tiempo'],['D','Decide no entregar el informe hasta tener respuesta de su jefe']],correcta:'A',valor:5},
  {id:13,seccion:'Información y comunicación',pregunta:'Para realizar sus actividades, usted:',opciones:[['A','Accede a información actualizada en sistemas, correos o documentos oficiales'],['B','Usa información parcialmente actualizada'],['C','No cuenta con información clara']],correcta:'A',valor:5},
  {id:14,seccion:'Información y comunicación',pregunta:'Cuando recibe información para trabajar, usted:',opciones:[['A','La usa sin validación previa'],['B','Ha identificado errores frecuentes'],['C','Verifica que esté completa y actualizada antes de usarla']],correcta:'C',valor:5},
  {id:15,seccion:'Información y comunicación',pregunta:'Si identifica una irregularidad, usted:',opciones:[['A','La comunica verbalmente'],['B','La reporta por canales formales (correo, sistema, jefe)'],['C','No la reporta']],correcta:'B',valor:5},
  {id:16,seccion:'Información y comunicación',pregunta:'Usted recibe un correo con información necesaria para elaborar un informe, pero nota que algunos datos están incompletos y podrían afectar el resultado final. El plazo de entrega es cercano. ¿Qué hace?',opciones:[['A','Completa el informe con la información disponible para cumplir con el plazo'],['B','Verifica la información, solicita aclaración por un canal formal y deja evidencia antes de continuar con el informe'],['C','Ajusta los datos según su criterio para evitar retrasos'],['D','Espera a que le envíen la información completa sin realizar ninguna acción']],correcta:'B',valor:5},
  {id:17,seccion:'Monitoreo',pregunta:'En relación con la revisión de resultados de actividades o procesos, ¿cuál de las siguientes situaciones describe mejor su participación?',opciones:[['A','Participa en espacios donde se revisan resultados y se dejan registros o evidencias de las conclusiones'],['B','Conoce que se realizan revisiones, pero no participa activamente'],['C','No tiene conocimiento de revisiones periódicas']],correcta:'A',valor:5},
  {id:18,seccion:'Monitoreo',pregunta:'Frente a los resultados de auditorías internas o externas, ¿cuál es su nivel de involucramiento?',opciones:[['A','Tiene conocimiento general de los resultados, sin participación directa'],['B','No conoce los resultados de auditorías'],['C','Participa en la formulación o ejecución de acciones de mejora y conoce su estado']],correcta:'C',valor:5},
  {id:19,seccion:'Monitoreo',pregunta:'En el seguimiento a un plan de mejoramiento, observa que una acción no se ha cumplido en el plazo establecido. ¿Qué hace?',opciones:[['A','Da por cerrada la acción para evitar retrasos en el informe'],['B','Espera a que el responsable actualice la información sin intervenir'],['C','Registra el incumplimiento, solicita actualización al responsable y verifica el nuevo compromiso hasta su cumplimiento'],['D','Informa de manera informal sin dejar evidencia']],correcta:'C',valor:5},
  {id:20,seccion:'Monitoreo',pregunta:'En su área se manejan indicadores de seguimiento (cumplimiento, tiempos, resultados). ¿Qué hace cuando observa que uno de ellos presenta un comportamiento inusual o negativo?',opciones:[['A','Lo ignora porque no afecta directamente sus actividades'],['B','Consulta el indicador, analiza posibles causas y reporta la situación para su revisión y seguimiento'],['C','Espera a que en los informes periódicos alguien más lo revise'],['D','Ajusta sus actividades sin revisar el indicador ni reportarlo']],correcta:'B',valor:5}
];

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
  leaderboard: []
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
  loadLeaderboard();
});

function showScreen(id){
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  $(id).classList.add('active');
}

function startQuiz(){
  const secretaria = $('secretaria').value.trim();
  const nombre = $('nombre').value.trim();
  if(!secretaria || !nombre){
    toast('Completa Secretaría y Nombres y Apellidos.');
    return;
  }
  state.participant = { secretaria, nombre };
  state.questions = shuffleQuestions(QUESTIONS);
  state.currentIndex = 0;
  state.selectedAnswer = null;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answers = [];
  state.startAt = Date.now();
  updateHud();
  showScreen('screenQuiz');
  renderQuestion();
}

function renderQuestion(){
  const q = state.questions[state.currentIndex];
  if(!q){
    finishQuiz();
    return;
  }
  $('sectionChip').textContent = q.seccion;
  $('countChip').textContent = `Pregunta ${state.currentIndex + 1} de ${state.questions.length}`;
  $('bonusChip').textContent = `+${q.valor} base`;
  $('questionTitle').textContent = q.pregunta;
  $('helperText').textContent = 'Selecciona una respuesta antes de continuar.';
  $('nextBtn').disabled = true;
  $('progressText').textContent = `Avance ${state.currentIndex + 1}/${state.questions.length}`;
  $('progressBar').style.width = `${(state.currentIndex / state.questions.length) * 100}%`;
  state.selectedAnswer = null;

  const grid = $('optionsGrid');
  grid.innerHTML = '';
  q.opciones.forEach(([key, text]) => {
    const btn = document.createElement('button');
    btn.className = 'option-card';
    btn.innerHTML = `
      <div class="option-key">${key}</div>
      <div>${escapeHtml(text)}</div>
      <div class="option-mark"></div>
    `;
    btn.addEventListener('click', () => selectAnswer(key, btn));
    grid.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(letter, button){
  document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
  button.classList.add('selected');
  state.selectedAnswer = letter;
  $('nextBtn').disabled = false;
  $('helperText').textContent = 'Respuesta registrada. Puedes continuar.';
  playTone(540, 0.05, 'sine');
}

function nextQuestion(){
  if(!state.selectedAnswer){
    toast('Selecciona una opción o usa Saltar.');
    return;
  }
  registerAnswer(state.selectedAnswer);
}

function skipQuestion(){
  registerAnswer(null);
}

function registerAnswer(selected){
  clearInterval(state.timer);
  const q = state.questions[state.currentIndex];
  const isCorrect = selected === q.correcta;
  const bonus = isCorrect ? Math.max(1, Math.round((state.timeLeft / state.timePerQuestion) * 5)) : 0;
  const gained = isCorrect ? q.valor + bonus : 0;

  if(isCorrect){
    state.score += gained;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    toast(`¡Correcto! +${gained} puntos`);
    playSuccessSound();
    if(state.streak >= 3) launchConfetti(26);
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

function updateHud(){
  $('scoreText').textContent = `Score: ${state.score}`;
  $('streakBadge').textContent = `Racha: ${state.streak}`;
  $('streakBanner').textContent = `🔥 Racha actual: ${state.streak}`;
}

function startTimer(){
  clearInterval(state.timer);
  state.timeLeft = state.timePerQuestion;
  paintTimer();
  state.timer = setInterval(() => {
    state.timeLeft -= 1;
    paintTimer();
    if(state.timeLeft <= 0){
      clearInterval(state.timer);
      toast('Tiempo agotado.');
      registerAnswer(null);
    }
  }, 1000);
}

function paintTimer(){
  const pct = Math.max(0, (state.timeLeft / state.timePerQuestion) * 100);
  $('timerText').textContent = state.timeLeft;
  $('timerRing').style.background = `conic-gradient(var(--warning) ${pct}%, rgba(255,255,255,.08) 0)`;
}

async function finishQuiz(){
  clearInterval(state.timer);
  $('progressBar').style.width = '100%';
  $('progressText').textContent = 'Completado';

  const maxScore = QUESTIONS.length * 10;
  const percentage = Math.round((state.score / maxScore) * 100);
  const level = percentage >= 85 ? 'Fortalecido' : percentage >= 60 ? 'En desarrollo' : 'Inicial';
  const payload = {
    secretaria: state.participant.secretaria,
    nombre: state.participant.nombre,
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
    if(!data.ok) throw new Error(data.message || 'No se pudo guardar');
    $('resultSubtitle').textContent = `Secretaría: ${state.participant.secretaria}. Resultado guardado correctamente.`;
    toast('Resultado enviado a Google Sheets.');
    await loadLeaderboard();
  } catch (error) {
    console.error(error);
    $('resultSubtitle').textContent = 'No fue posible guardar el resultado. Revisa permisos o CORS en Apps Script.';
    toast('Error al enviar a Apps Script.');
  }
}

async function loadLeaderboard(){
  try {
    const response = await fetch(APPS_SCRIPT_URL);
    const data = await response.json();
    const leaderboard = Array.isArray(data.leaderboard) ? data.leaderboard : [];
    state.leaderboard = leaderboard;
    renderLeaderboard(leaderboard);
    renderPodium(leaderboard);
  } catch (error) {
    console.error(error);
    $('leaderboard').innerHTML = '<div class="empty-state">No fue posible cargar el leaderboard.</div>';
  }
}

function renderLeaderboard(items){
  const box = $('leaderboard');
  if(!items.length){
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

function renderPodium(items){
  const podium = $('podium');
  if(!items.length){
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

function resetExperience(){
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
  updateHud();
  $('progressBar').style.width = '0%';
  $('progressText').textContent = 'Listo para iniciar';
  $('timerText').textContent = state.timePerQuestion;
  showScreen('screenWelcome');
}

function shuffleQuestions(source){
  return source
    .map(q => ({ ...q, opciones: shuffleArray([...q.opciones]) }))
    .sort(() => Math.random() - 0.5);
}

function shuffleArray(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function launchConfetti(count){
  const host = $('confetti');
  host.innerHTML = '';
  const colors = ['#3ed6c8','#2b93ff','#ffca5c','#ff7070','#ffffff'];
  for(let i = 0; i < count; i++){
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

function playTone(freq, duration, type='sine'){
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
  } catch (e) {}
}

function playSuccessSound(){
  playTone(660, .08, 'triangle');
  setTimeout(() => playTone(860, .08, 'triangle'), 90);
}

function playFinishSound(){
  playTone(523, .1, 'triangle');
  setTimeout(() => playTone(659, .1, 'triangle'), 120);
  setTimeout(() => playTone(784, .18, 'triangle'), 240);
}

function toast(message){
  const el = $('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._hide);
  el._hide = setTimeout(() => el.classList.remove('show'), 2600);
}

function escapeHtml(value){
  return String(value || '').replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
