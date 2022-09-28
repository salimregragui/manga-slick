import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import classes from "./Donation.module.scss";

function Donation() {
  const { t } = useTranslation();
  
  return (
    <Layout title={t("screen-titles.donation")}>
      <div className={classes.Donation}>Donation</div>;
    </Layout>
  );
}

export default Donation;
