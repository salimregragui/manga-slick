import { ipcRenderer } from "electron";
import { GET_ALL_PROFILES, GET_ONE_PROFILE } from "./actions";

exports.ProfileManager = class ProfileManager {
  getAllAvailableProfiles() {
    ipcRenderer.invoke(GET_ALL_PROFILES);
  }

  getProfileData = () => {
    ipcRenderer.invoke(GET_ONE_PROFILE);
  };
};
