import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import classes from "./Plugins.module.scss";

function Plugins() {
  const { t } = useTranslation();
  
  return (
    <Layout title={t("screen-titles.plugins")}>
      <div className={classes.Plugins}>Plugins</div>;
    </Layout>
  );
}

export default Plugins;
