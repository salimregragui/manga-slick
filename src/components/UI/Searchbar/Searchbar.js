import React from "react";
import classes from "./Searchbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Searchbar() {
  const { t } = useTranslation();
  return (
    <div className={classes.Searchbar}>
      <AiOutlineSearch />
      <span>{t("searchbar.placeholder")}</span>
    </div>
  );
}

export default Searchbar;
