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
        <ProfileBox
          name="Salim"
          avatar="https://ui-avatars.com/api/?name=Salim+regragui"
        />
        <ProfileBox
          name="Mike"
          avatar="https://ui-avatars.com/api/?name=Mike+Lebski"
        />
        <ProfileBox
          name="Britta"
          avatar="https://ui-avatars.com/api/?name=Britta+Marlo"
        />
        <ProfileBox
          name="Private"
          avatar="https://ui-avatars.com/api/?name=Private"
        />
      </div>
    </div>
  );
}

export default ProfileSelection;
