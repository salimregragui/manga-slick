import React from "react";
import { Link } from "react-router-dom";
import classes from "./LeftbarLink.module.scss";

function LeftbarLink({ Icon, to, text, quantity }) {
  return (
    <Link className={classes.LeftbarLink} to={to}>
      <div className={classes.LinkData}>
        <Icon />
        <span>{text}</span>
      </div>

      {quantity && <span className={classes.LinkQuantity}>{quantity}</span>}
    </Link>
  );
}

export default LeftbarLink;
