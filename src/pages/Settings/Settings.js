import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import classes from "./Settings.module.scss";

function Settings() {
  const { t } = useTranslation();
  
  return (
    <Layout title={t("screen-titles.settings")}>
      <div className={classes.Settings}>Settings</div>;
    </Layout>
  );
}

export default Settings;
