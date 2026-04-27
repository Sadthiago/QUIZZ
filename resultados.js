/* ══════════════════════════════════════════════════════
   RESULTADOS — JavaScript
   Fetches quiz results from Apps Script and provides
   interactive filtering, sorting, stats, and CSV export.
   ══════════════════════════════════════════════════════ */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqnkrz8JekRWH9DA3sMtMDzU6xQs-G_sU0PvKVuwWBmh4VkrX4HCKjqqWKIusrXWtlWQ/exec";

const $ = (id) => document.getElementById(id);

/* ══════════════════════════════════════════════════════
   NORMALIZACIÓN DE SECRETARÍAS
   ──────────────────────────────────────────────────────
   Unifica variaciones como "Sec. de Hacienda",
   "secretaria hacienda", "SECRETARÍA DE HACIENDA"
   en un solo nombre canónico.

   Para agregar nuevas reglas, añade entradas al mapa
   SECRETARIA_ALIASES con las palabras clave y el nombre
   canónico deseado.
   ══════════════════════════════════════════════════════ */

/*
 * Mapa de normalización: cada entrada tiene:
 *   keywords : array de palabras clave que deben aparecer en el texto (se buscan TODAS)
 *   canonical: nombre oficial que se usará en la tabla / filtros / gráficos
 *
 * ⚠️  El orden importa: la PRIMERA coincidencia gana.
 *     Pon las más específicas arriba.
 */
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

/**
 * Elimina acentos/diacríticos y convierte a minúsculas.
 * "Secretaría" → "secretaria", "Planeación" → "planeacion"
 */
function stripDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

/**
 * Normaliza el nombre de una secretaría.
 * 1. Limpia espacios, puntos, acentos.
 * 2. Busca coincidencia por palabras clave en SECRETARIA_ALIASES.
 * 3. Si no encuentra, aplica Title Case al original.
 */
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

    // Fallback: Title Case
    return val.replace(/\s+/g, ' ')
      .replace(/\w\S*/g, w =>
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
      );
  } catch (e) {
    console.warn('Error normalizando secretaria:', e);
    return String(raw || 'Sin dato');
  }
}

/* ── State ───────────────────────────────────────── */
const state = {
  allData: [],
  filtered: [],
  sortKey: 'score',
  sortAsc: false,
  filters: {
    search: '',
    secretaria: '',
    level: '',
    scoreMin: 0,
    scoreMax: 100
  }
};

/* ── Init ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  $('themeToggle').addEventListener('click', toggleTheme);

  // Filter event listeners
  $('filterSearch').addEventListener('input', debounce(onFilterChange, 250));
  $('filterSecretaria').addEventListener('change', onFilterChange);
  $('filterScoreMin').addEventListener('input', debounce(onFilterChange, 300));
  $('filterScoreMax').addEventListener('input', debounce(onFilterChange, 300));
  $('clearFiltersBtn').addEventListener('click', clearFilters);
  $('exportCsvBtn').addEventListener('click', exportCsv);

  // Level chips
  document.querySelectorAll('.level-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const level = chip.dataset.level;
      if (state.filters.level === level) {
        state.filters.level = '';
        chip.classList.remove('active');
      } else {
        document.querySelectorAll('.level-chip').forEach(c => c.classList.remove('active'));
        state.filters.level = level;
        chip.classList.add('active');
      }
      applyFilters();
    });
  });

  loadData();
});

/* ── Data Loading ────────────────────────────────── */
async function loadData() {
  $('tableBody').innerHTML = '';
  $('loadingIndicator').style.display = 'block';

  try {
    // La API de Apps Script ahora devuelve todos los resultados (?all=true)
    const response = await fetch(`${APPS_SCRIPT_URL}?all=true`);
    const data = await response.json();
    const leaderboard = Array.isArray(data.leaderboard) ? data.leaderboard : [];

    state.allData = leaderboard.map((item, i) => {
      const rawSecretaria = item.secretaria || 'Sin dato';
      return {
        rank: i + 1,
        nombre: item.nombre || 'Participante',
        secretaria: normalizeSecretaria(rawSecretaria),
        secretariaOriginal: rawSecretaria,
        score: Number(item.score || 0),
        percentage: Number(item.percentage || 0),
        level: item.level || 'Inicial',
        timeSpent: Number(item.timeSpent || 0),
        bestStreak: Number(item.bestStreak || 0)
      };
    }).filter(item =>
      !['PRUEBA', 'prueba', 'x', '.', 'Participante'].includes(item.nombre)
    );

    // Re-asignar ranks después del filtro
    state.allData.forEach((r, idx) => r.rank = idx + 1);

    populateSecretariaFilter();
    applyFilters();
    toast('Datos cargados correctamente');
  } catch (error) {
    console.error('Error loading data:', error);
    $('loadingIndicator').style.display = 'none';
    $('tableBody').innerHTML = `
      <tr><td colspan="8">
        <div class="empty-state">
          <span class="empty-icon">⚠️</span>
          Error al cargar datos desde la API: ${error.message}
        </div>
      </td></tr>`;
    toast('Error: ' + error.message);
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

/* ── Populate Secretaría dropdown ────────────────── */
function populateSecretariaFilter() {
  const select = $('filterSecretaria');
  const secretarias = [...new Set(state.allData.map(d => d.secretaria))].sort();
  select.innerHTML = '<option value="">Todas las secretarías</option>';
  secretarias.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    select.appendChild(opt);
  });
}

/* ── Filter Logic ────────────────────────────────── */
function onFilterChange() {
  state.filters.search = $('filterSearch').value.trim().toLowerCase();
  state.filters.secretaria = $('filterSecretaria').value;

  const minVal = parseInt($('filterScoreMin').value);
  const maxVal = parseInt($('filterScoreMax').value);
  state.filters.scoreMin = isNaN(minVal) ? 0 : minVal;
  state.filters.scoreMax = isNaN(maxVal) ? 100 : maxVal;

  applyFilters();
}

function applyFilters() {
  const { search, secretaria, level, scoreMin, scoreMax } = state.filters;

  state.filtered = state.allData.filter(item => {
    if (search && !item.nombre.toLowerCase().includes(search) &&
      !item.secretaria.toLowerCase().includes(search)) return false;
    if (secretaria && item.secretaria !== secretaria) return false;
    if (level && item.level !== level) return false;
    if (item.score < scoreMin || item.score > scoreMax) return false;
    return true;
  });

  sortData();
  renderKPIs();
  renderTable();
  renderCharts();
  renderActiveFilters();
  $('loadingIndicator').style.display = 'none';
}

function clearFilters() {
  state.filters = { search: '', secretaria: '', level: '', scoreMin: 0, scoreMax: 100 };
  $('filterSearch').value = '';
  $('filterSecretaria').value = '';
  $('filterScoreMin').value = '';
  $('filterScoreMax').value = '';
  document.querySelectorAll('.level-chip').forEach(c => c.classList.remove('active'));
  applyFilters();
  toast('Filtros limpiados');
}

/* ── Active filter tags ──────────────────────────── */
function renderActiveFilters() {
  const container = $('activeFilters');
  container.innerHTML = '';
  const { search, secretaria, level, scoreMin, scoreMax } = state.filters;

  if (search) addFilterTag(container, `Nombre: "${search}"`, () => {
    state.filters.search = ''; $('filterSearch').value = ''; applyFilters();
  });
  if (secretaria) addFilterTag(container, `Secretaría: ${secretaria}`, () => {
    state.filters.secretaria = ''; $('filterSecretaria').value = ''; applyFilters();
  });
  if (level) addFilterTag(container, `Nivel: ${level}`, () => {
    state.filters.level = '';
    document.querySelectorAll('.level-chip').forEach(c => c.classList.remove('active'));
    applyFilters();
  });
  if (scoreMin > 0 || scoreMax < 100) addFilterTag(container, `Puntaje: ${scoreMin}–${scoreMax}`, () => {
    state.filters.scoreMin = 0; state.filters.scoreMax = 100;
    $('filterScoreMin').value = ''; $('filterScoreMax').value = ''; applyFilters();
  });
}

function addFilterTag(container, text, onRemove) {
  const tag = document.createElement('span');
  tag.className = 'filter-tag';
  tag.innerHTML = `${escapeHtml(text)} <button title="Quitar filtro">×</button>`;
  tag.querySelector('button').addEventListener('click', onRemove);
  container.appendChild(tag);
}

/* ── Sort ────────────────────────────────────────── */
function sortData() {
  const { sortKey, sortAsc } = state;
  state.filtered.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
    if (va < vb) return sortAsc ? -1 : 1;
    if (va > vb) return sortAsc ? 1 : -1;
    return 0;
  });
}

function handleSort(key) {
  if (state.sortKey === key) {
    state.sortAsc = !state.sortAsc;
  } else {
    state.sortKey = key;
    state.sortAsc = key === 'nombre' || key === 'secretaria';
  }
  applyFilters();

  // Update sort indicators
  document.querySelectorAll('.results-table th').forEach(th => {
    th.classList.remove('sorted');
    const indicator = th.querySelector('.sort-indicator');
    if (indicator) indicator.textContent = '↕';
  });
  const activeTh = document.querySelector(`.results-table th[data-sort="${key}"]`);
  if (activeTh) {
    activeTh.classList.add('sorted');
    const indicator = activeTh.querySelector('.sort-indicator');
    if (indicator) indicator.textContent = state.sortAsc ? '↑' : '↓';
  }
}

// Attach sort handlers after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.results-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => handleSort(th.dataset.sort));
  });
});

/* ── KPI Rendering ───────────────────────────────── */
function renderKPIs() {
  const data = state.filtered;
  const total = data.length;
  const avgScore = total ? Math.round(data.reduce((s, d) => s + d.score, 0) / total) : 0;
  const avgPct = total ? Math.round(data.reduce((s, d) => s + d.percentage, 0) / total) : 0;
  const maxStreak = total ? Math.max(...data.map(d => d.bestStreak)) : 0;

  animateValue($('kpiTotal'), total);
  animateValue($('kpiAvgScore'), avgScore);
  animateValue($('kpiAvgPct'), avgPct, '%');
  animateValue($('kpiMaxStreak'), maxStreak);
}

function animateValue(el, target, suffix = '') {
  const start = parseInt(el.textContent) || 0;
  const duration = 500;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── Table Rendering ─────────────────────────────── */
function renderTable() {
  const tbody = $('tableBody');
  const data = state.filtered;

  $('resultCount').textContent = `${data.length} resultado${data.length !== 1 ? 's' : ''}`;

  if (!data.length) {
    tbody.innerHTML = `
      <tr><td colspan="8">
        <div class="empty-state">
          <span class="empty-icon">🔍</span>
          No se encontraron resultados con los filtros aplicados.
        </div>
      </td></tr>`;
    return;
  }

  tbody.innerHTML = data.map((item, i) => {
    const levelClass = item.level === 'Fortalecido' ? 'fortalecido' :
      item.level === 'En desarrollo' ? 'en-desarrollo' : 'inicial';
    const time = formatTime(item.timeSpent);
    return `
      <tr style="animation-delay: ${Math.min(i * 30, 500)}ms">
        <td><span class="rank-num">${i + 1}</span></td>
        <td><strong>${escapeHtml(item.nombre)}</strong></td>
        <td>${escapeHtml(item.secretaria)}</td>
        <td class="score-cell">${item.score}</td>
        <td>${item.percentage}%</td>
        <td><span class="level-badge ${levelClass}">${escapeHtml(item.level)}</span></td>
        <td>${time}</td>
        <td>${item.bestStreak} 🔥</td>
      </tr>`;
  }).join('');
}

function formatTime(seconds) {
  if (!seconds) return '–';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

/* ── Charts ──────────────────────────────────────── */
function renderCharts() {
  renderLevelChart();
  renderSecretariaChart();
}

function renderLevelChart() {
  const data = state.filtered;
  const total = data.length || 1;

  const levels = [
    { name: 'Fortalecido', color: 'var(--success)', count: 0 },
    { name: 'En desarrollo', color: 'var(--warning)', count: 0 },
    { name: 'Inicial', color: 'var(--danger)', count: 0 }
  ];

  data.forEach(d => {
    const l = levels.find(l => l.name === d.level);
    if (l) l.count++;
  });

  // Donut chart (conic-gradient)
  let angle = 0;
  const segments = levels.map(l => {
    const pct = (l.count / total) * 100;
    const start = angle;
    angle += pct;
    return { ...l, pct, start };
  });

  const gradient = segments.map(s =>
    `${s.color} ${s.start}% ${s.start + s.pct}%`
  ).join(', ');

  const donut = $('donutChart');
  donut.style.background = data.length ? `conic-gradient(${gradient})` : 'var(--option-bg)';

  $('donutTotal').textContent = data.length;

  const legend = $('donutLegend');
  legend.innerHTML = segments.map(s => `
    <div class="legend-item">
      <span class="legend-dot" style="background: ${s.color}"></span>
      <span>${s.name}</span>
      <span class="legend-count">${s.count} (${Math.round(s.pct)}%)</span>
    </div>
  `).join('');
}

function renderSecretariaChart() {
  const data = state.filtered;
  const counts = {};
  data.forEach(d => { counts[d.secretaria] = (counts[d.secretaria] || 0) + 1; });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const max = sorted.length ? sorted[0][1] : 1;

  const colors = ['var(--primary)', 'var(--secondary)', 'var(--warning)', 'var(--success)', 'var(--danger)'];

  const container = $('secretariaChart');
  if (!sorted.length) {
    container.innerHTML = '<div class="empty-state">Sin datos</div>';
    return;
  }

  container.innerHTML = sorted.map(([name, count], i) => `
    <div class="bar-item">
      <span class="bar-label" title="${escapeHtml(name)}">${escapeHtml(name)}</span>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${(count / max) * 100}%; --bar-color: ${colors[i % colors.length]}"></div>
      </div>
      <span class="bar-value">${count}</span>
    </div>
  `).join('');
}

/* ── CSV Export ───────────────────────────────────── */
function exportCsv() {
  const data = state.filtered;
  if (!data.length) { toast('No hay datos para exportar'); return; }

  const headers = ['#', 'Nombre', 'Secretaría', 'Puntaje', 'Porcentaje', 'Nivel', 'Tiempo (s)', 'Mejor Racha'];
  const rows = data.map((d, i) => [
    i + 1, d.nombre, d.secretaria, d.score, d.percentage + '%', d.level, d.timeSpent, d.bestStreak
  ]);

  const csv = [headers, ...rows].map(r =>
    r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `resultados_quiz_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  toast('CSV exportado correctamente');
}

/* ── Theme ───────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('quiz-theme') || 'light';
  applyTheme(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'light' ? 'dark' : 'light');
}

function applyTheme(theme) {
  const valid = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', valid);
  localStorage.setItem('quiz-theme', valid);
  const btn = $('themeToggle');
  if (btn) btn.textContent = valid === 'light' ? '☀️' : '🌙';
}

/* ── Utilities ───────────────────────────────────── */
function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._hide);
  el._hide = setTimeout(() => el.classList.remove('show'), 2600);
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, m =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])
  );
}

function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

function maskName(name) {
  if (!name || name === 'Participante' || name === 'PRUEBA') return name;
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return parts[0];
  const firstName = parts[0];
  const lastInitial = parts[1][0] ? parts[1][0].toUpperCase() + '.' : '';
  return `${firstName} ${lastInitial}`;
}
