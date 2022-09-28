import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import classes from "./About.module.scss";

function About() {
  const { t } = useTranslation();
  
  return (
    <Layout title={t("screen-titles.about")}>
      <div className={classes.About}>About</div>;
    </Layout>
  );
}

export default About;
