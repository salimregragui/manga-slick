import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import classes from "./Wishlist.module.scss";

function Wishlist() {
  const { t } = useTranslation();
  
  return (
    <Layout title={t("screen-titles.wishlist")}>
      <div className={classes.Wishlist}>Wishlist</div>;
    </Layout>
  );
}

export default Wishlist;
