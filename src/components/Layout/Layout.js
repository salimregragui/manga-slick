import React from "react";
import Header from "../UI/Header/Header";
import Leftbar from "../UI/Leftbar/Leftbar";
import classes from "./Layout.module.scss";

function Layout({ children, title }) {
  return (
    <div className={classes.Layout}>
      <Leftbar />

      <div className={classes.content}>
        <Header title={title} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
