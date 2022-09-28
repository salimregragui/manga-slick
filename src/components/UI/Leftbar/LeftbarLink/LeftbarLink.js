import React from "react";
import { Link } from "react-router-dom";
import classes from "./LeftbarLink.module.scss";

function LeftbarLink({ Icon, to, text, quantity, isCurrentRoute }) {
  return (
    <Link className={`${classes.LeftbarLink} ${isCurrentRoute && classes.CurrentRoute}`} to={to}>
      <div className={classes.LinkData}>
        <Icon />
        <span>{text}</span>
      </div>

      {quantity && <span className={classes.LinkQuantity}>{quantity}</span>}
    </Link>
  );
}

export default LeftbarLink;
