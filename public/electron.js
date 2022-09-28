const path = require("path");
const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron/main");
const { GET_ALL_PROFILES, GET_ONE_PROFILE } = require("./api/actions");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(path.join(__dirname, "preload.js")),
    },
    autoHideMenuBar: true,
    backgroundColor: "#181818",
    show: false,
  });

  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  } else {
    mainWindow.loadURL("http://localhost:3000");
  }

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.maximize();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.handle(GET_ALL_PROFILES, async (event, args) => {
  return "all profiles !";
});

ipcMain.handle(GET_ONE_PROFILE, async (event, args) => {
  return "one profile !";
});
