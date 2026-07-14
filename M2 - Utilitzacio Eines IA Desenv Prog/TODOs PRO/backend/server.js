const envFitxer = process.env.DB_TARGET === 'railway' ? '.env.railway' : '.env.local';
require('dotenv').config({ path: __dirname + '/' + envFitxer });

const express       = require('express');
const session       = require('express-session');
const path          = require('path');
const pool          = require('./db');
const routesAuth    = require('./routes/auth');
const routesTasques = require('./routes/tasques');
const { requereixSessioPagina } = require('./middleware/sessio');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ── Middleware globals ── */

app.use(express.json());

app.use(session({
  secret:            process.env.SESSION_SECRET || 'canvia-mi',
  resave:            false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure:   false,   // true a producció (HTTPS)
    sameSite: 'lax',
    maxAge:   24 * 60 * 60 * 1000   // 24 hores
  }
}));

/* ── Rutes API ── */

app.use('/api', routesAuth);
app.use('/api/tasques', routesTasques);

/* ── Rutes de pàgina (sendFile, sense .html a la URL) ── */

app.get('/', (_req, res) => {
  res.redirect('/todos');
});

app.get('/todos', requereixSessioPagina, (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/login', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.get('/registre', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'registre.html'));
});

/* ── Estàtics (CSS, JS, imatges) ── */

app.use(express.static(path.join(__dirname, '..', 'public')));

/* ── Health check ── */

app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ estat: 'ok', db: 'ok' });
  } catch (_err) {
    res.status(500).json({ estat: 'error', db: 'ko' });
  }
});

/* ── Arrancar el servidor ── */

app.listen(PORT, () => {
  console.log(`Servidor arrancat a http://localhost:${PORT}`);
});
