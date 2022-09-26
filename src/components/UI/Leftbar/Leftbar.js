import React from "react";
import classes from "./Leftbar.module.scss";
import LeftbarLink from "./LeftbarLink/LeftbarLink";
import {BiLibrary} from "react-icons/bi"
import {MdOutlineRecommend, MdOutlineChangeCircle, MdSystemUpdateAlt} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {AiOutlineLike} from "react-icons/ai"
import { useTranslation } from "react-i18next"

function Leftbar() {
    const { t } = useTranslation();
  return (
    <div className={classes.Leftbar}>
      <div className={classes.ProfileInfos}>
        <div className={classes.ProfileInfosImage}></div>
        <h1>
          Salim<br/>Regragui
        </h1>
      </div>

      <div className={classes.LeftbarCategory}>
        <LeftbarLink to="/all-library" Icon={BiLibrary} text={t("leftbar.all_library")} quantity={25} />
        <LeftbarLink to="/wishlist" Icon={AiOutlineLike} text={t("leftbar.wishlist")} quantity={127} />
        <LeftbarLink to="/recommendations" Icon={MdOutlineRecommend} text={t("leftbar.recommendations")} />
      </div>

      <div className={classes.LeftbarCategory}>
        <LeftbarLink to="/settings" Icon={FiSettings} text={t("leftbar.settings")} />
        <LeftbarLink to="/updates" Icon={MdSystemUpdateAlt} text={t("leftbar.updates")} />
        <LeftbarLink to="/changelog" Icon={MdOutlineChangeCircle} text={t("leftbar.changelog")} />
      </div>
    </div>
  );
}

export default Leftbar;
