import React from "react";
import classes from "./ProgressBar.module.scss";

function ProgressBar({ percent }) {
  return (
    <div className={classes.ProgressBar}>
      <div
        className={classes.ProgressBarInner}
        style={{ width: percent + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
