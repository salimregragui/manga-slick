import React from "react";
import classes from "./HeaderButton.module.scss";
import { Link } from "react-router-dom";

function HeaderButton({ Icon, notification, to, text }) {
  return (
    <Link to={to} className={classes.HeaderButton}>
      <Icon />
    </Link>
  );
}

export default HeaderButton;
