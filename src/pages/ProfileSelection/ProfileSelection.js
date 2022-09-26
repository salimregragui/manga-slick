import React from "react";
import { useTranslation } from "react-i18next";
import ProfileBox from "../../components/UI/ProfileBox/ProfileBox";
import classes from "./ProfileSelection.module.scss";

function ProfileSelection() {
  const { t } = useTranslation();
  return (
    <div className={classes.ProfileSelection}>
      <h1 className={classes.WelcomeText}>
        {t("profileSelection.welcomeText")}
      </h1>

      <div className={classes.AvailableProfiles}>
        <ProfileBox name="Salim" />
        <ProfileBox name="Mike" />
        <ProfileBox name="Britta" />
        <ProfileBox name="Private" />
      </div>
    </div>
  );
}

export default ProfileSelection;
