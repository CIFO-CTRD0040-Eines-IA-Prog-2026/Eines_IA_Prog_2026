const { app, BrowserWindow, shell, dialog } = require('electron');
const path = require('path');
const { fork } = require('child_process');
const http = require('http');

let mainWindow;
let backendProc;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  mainWindow.loadURL('http://localhost:3000/todos');

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function startBackend() {
  const backendPath = app.isPackaged
    ? path.join(process.resourcesPath, 'backend', 'server.js')
    : path.join(__dirname, '..', 'backend', 'server.js');

  backendProc = fork(backendPath, [], { stdio: 'pipe' });

  backendProc.stderr.on('data', (data) => {
    const msg = data.toString();
    if (mainWindow) {
      dialog.showErrorBox('Error del backend', msg);
    }
  });

  backendProc.on('exit', (code) => {
    if (code !== 0 && mainWindow) {
      dialog.showErrorBox('Backend sortit', `El backend ha sortit amb codi ${code}`);
      app.quit();
    }
  });
}

function waitForBackend(retries = 30, interval = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      http.get('http://localhost:3000/health', (res) => {
        if (res.statusCode === 200) {
          resolve();
        } else {
          retry();
        }
      }).on('error', retry);
    };
    const retry = () => {
      attempts++;
      if (attempts >= retries) {
        reject(new Error('Timeout esperant el backend'));
      } else {
        setTimeout(check, interval);
      }
    };
    check();
  });
}

app.whenReady().then(async () => {
  startBackend();
  try {
    await waitForBackend();
    createWindow();
  } catch (err) {
    dialog.showErrorBox('Error', err.message);
    app.quit();
  }
});

app.on('window-all-closed', () => {
  if (backendProc) {
    backendProc.kill();
  }
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});