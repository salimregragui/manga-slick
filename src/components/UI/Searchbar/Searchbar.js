import React from "react";
import classes from "./Searchbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../../../store/slices/globalSlice";

function Searchbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const openSearchbarhandler = () => {
    dispatch(setSearchModal(true));
  };

  return (
    <div className={classes.Searchbar} onClick={openSearchbarhandler}>
      <AiOutlineSearch />
      <span>{t("searchbar.placeholder")}</span>
    </div>
  );
}

export default Searchbar;
