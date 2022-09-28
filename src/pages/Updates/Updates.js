import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import classes from "./Updates.module.scss";

function Updates() {
  const { t } = useTranslation();
  
  return (
    <Layout title={t("screen-titles.Updates")}>
      <div className={classes.Updates}>Updates</div>;
    </Layout>
  );
}

export default Updates;
