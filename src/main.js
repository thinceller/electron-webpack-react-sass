import { app, BrowserWindow } from 'electron';

let win = null;

const createWindow = () => {
  win = new BrowserWindow({ width: 800, height: 600 });

  let url = require('url').format({
    protocol: 'file',
    slashes: false,
    pathname: require('path').join(__dirname, 'index.html')
  });

  win.loadURL(url);

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
