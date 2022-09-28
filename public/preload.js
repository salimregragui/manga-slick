const { contextBridge } = require("electron");
const { ProfileManager } = require("./api/profile-manager");

contextBridge.exposeInMainWorld("api", {
  profileManager: ProfileManager,
});
