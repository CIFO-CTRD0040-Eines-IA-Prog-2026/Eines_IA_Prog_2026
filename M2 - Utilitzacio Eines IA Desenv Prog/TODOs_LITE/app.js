// ----- TASQUES -----

const STORAGE_KEY = 'todos_lite_tasks';
const CITY_KEY = 'todos_lite_city';

let tasks = [];

function loadTasks() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    tasks = data ? JSON.parse(data) : [];
  } catch {
    tasks = [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById('task-list');
  const empty = document.getElementById('empty-state');

  list.innerHTML = '';

  if (tasks.length === 0) {
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn-done';
    doneBtn.textContent = task.completed ? 'Desfer' : 'Fet';
    doneBtn.addEventListener('click', () => toggleTask(index));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Esborrar';
    deleteBtn.addEventListener('click', () => deleteTask(index));

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    list.appendChild(li);
  });
}

function addTask(text) {
  tasks.push({ text: text.trim(), completed: false });
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// ----- WIDGET TEMPS -----

function getWeatherEmoji(code) {
  if (code === 0) return '\u2600\uFE0F';
  if (code <= 3) return '\u26C5';
  if (code <= 48) return '\uD83C\uDF2B\uFE0F';
  if (code <= 55) return '\uD83C\uDF26\uFE0F';
  if (code <= 65) return '\uD83C\uDF27\uFE0F';
  if (code <= 77) return '\u2744\uFE0F';
  if (code <= 82) return '\uD83C\uDF26\uFE0F';
  if (code <= 99) return '\u26C8\uFE0F';
  return '\uD83C\uDF21\uFE0F';
}

async function fetchCoordinates(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=ca`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('No s\'ha pogut trobar la ciutat.');
  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('Ciutat no trobada. Prova\'n una altra.');
  }
  return data.results[0];
}

async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('No s\'ha pogut obtenir el temps.');
  const data = await res.json();
  return data.current_weather;
}

function renderWeather(cityName, weather) {
  const info = document.getElementById('weather-info');
  const emoji = getWeatherEmoji(weather.weathercode);
  info.className = 'weather-info';
  info.textContent = `${cityName}: ${emoji} ${weather.temperature}\u00B0C`;
}

function renderWeatherError(msg) {
  const info = document.getElementById('weather-info');
  info.className = 'weather-info error';
  info.textContent = msg;
}

async function updateWeather(city) {
  const info = document.getElementById('weather-info');
  info.className = 'weather-info';
  info.textContent = 'Carregant...';

  try {
    const location = await fetchCoordinates(city);
    const weather = await fetchWeather(location.latitude, location.longitude);
    renderWeather(location.name, weather);
    localStorage.setItem(CITY_KEY, city);
  } catch (err) {
    renderWeatherError(err.message);
  }
}

// ----- INICI -----

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  renderTasks();

  const addBtn = document.getElementById('add-btn');
  const taskInput = document.getElementById('task-input');
  const validationMsg = document.getElementById('validation-msg');

  addBtn.addEventListener('click', () => {
    const text = taskInput.value;
    if (!text.trim()) {
      validationMsg.textContent = 'Escriu una tasca abans d\'afegir-la.';
      return;
    }
    validationMsg.textContent = '';
    addTask(text);
    taskInput.value = '';
  });

  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
  });

  taskInput.addEventListener('input', () => {
    validationMsg.textContent = '';
  });

  const weatherBtn = document.getElementById('weather-btn');
  const cityInput = document.getElementById('city-input');

  weatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (!city) return;
    updateWeather(city);
  });

  cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') weatherBtn.click();
  });

  const lastCity = localStorage.getItem(CITY_KEY);
  if (lastCity) {
    cityInput.value = lastCity;
    updateWeather(lastCity);
  }
});
