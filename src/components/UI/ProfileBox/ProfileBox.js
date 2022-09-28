import React from "react";
import classes from "./ProfileBox.module.scss";
import { useNavigate } from "react-router-dom";

function ProfileBox({ name, avatar }) {
  const navigate = useNavigate();

  const handleProfileSelection = () => {
    navigate("/home");
  };

  return (
    <div className={classes.ProfileBox} onClick={handleProfileSelection}>
      <div
        className={classes.ProfileBoxImage}
        style={{ backgroundImage: `url("${avatar}")` }}
      ></div>
      <h3>{name}</h3>
    </div>
  );
}

export default ProfileBox;
