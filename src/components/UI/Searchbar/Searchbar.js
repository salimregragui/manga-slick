import React from "react";
import classes from "./Searchbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
  return (
    <div className={classes.Searchbar}>
      <AiOutlineSearch />
      <span>Search</span>
    </div>
  );
}

export default Searchbar;
