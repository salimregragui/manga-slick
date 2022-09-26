import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import classes from "./Header.module.scss";
import HeaderButton from "./HeaderButton/HeaderButton";

import { MdFavoriteBorder } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHistory } from "react-icons/bi";

function Header({ title }) {
  return (
    <div className={classes.Header}>
      <h1>{title}</h1>

      <div className={classes.HeaderContent}>
        <Searchbar />

        <HeaderButton
          Icon={MdFavoriteBorder}
          to="/favorites"
          text="Favorites"
        />

        <HeaderButton
          Icon={IoMdNotificationsOutline}
          to="/notifications"
          text="Notifications"
        />

        <HeaderButton Icon={BiHistory} to="/history" text="History" />
      </div>
    </div>
  );
}

export default Header;
