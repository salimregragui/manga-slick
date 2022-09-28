import React from "react";
import classes from "./Leftbar.module.scss";
import LeftbarLink from "./LeftbarLink/LeftbarLink";
import { BiLibrary, BiDonateHeart, BiHome } from "react-icons/bi";
import {
  MdOutlineRecommend,
  MdOutlineChangeCircle,
  MdSystemUpdateAlt,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import {
  AiOutlineLike,
  AiOutlineInfoCircle,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import checkIsCurrentRoute from "../../../utils/functions/check-is-current-route";

function Leftbar() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className={classes.Leftbar}>
      <div className={classes.ProfileInfos}>
        <div className={classes.ProfileInfosImage}></div>
        <div className={classes.ProfileInfosRight}>
          <h1>
            Salim
            <br />
            Regragui
          </h1>
          <Link to="/">{t("leftbar.switch-account")}</Link>
        </div>
      </div>

      <div className={classes.LeftBarCategories}>
        <div className={classes.LeftbarCategory}>
          <LeftbarLink
            to="/home"
            Icon={BiHome}
            text={t("leftbar.home")}
            quantity={25}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/home")}
          />
          <LeftbarLink
            to="/library"
            Icon={BiLibrary}
            text={t("leftbar.all_library")}
            quantity={25}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/library")}
          />
          <LeftbarLink
            to="/wishlist"
            Icon={AiOutlineLike}
            text={t("leftbar.wishlist")}
            quantity={127}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/wishlist")}
          />
          {/* <LeftbarLink
          to="/recommendations"
          Icon={MdOutlineRecommend}
          text={t("leftbar.recommendations")}
        /> */}
        </div>

        <div className={classes.LeftbarCategory}>
          <LeftbarLink
            to="/settings"
            Icon={FiSettings}
            text={t("leftbar.settings")}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/settings")}
          />
          <LeftbarLink
            to="/plugins"
            Icon={AiOutlineAppstoreAdd}
            text={t("leftbar.plugins")}
            quantity={5}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/plugins")}
          />
          <LeftbarLink
            to="/updates"
            Icon={MdSystemUpdateAlt}
            text={t("leftbar.updates")}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/updates")}
          />
          <LeftbarLink
            to="/changelog"
            Icon={MdOutlineChangeCircle}
            text={t("leftbar.changelog")}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/changelog")}
          />
        </div>

        <div className={classes.LeftbarCategory}>
          <LeftbarLink
            to="/donation"
            Icon={BiDonateHeart}
            text={t("leftbar.donation")}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/donation")}
          />
          <LeftbarLink
            to="/about"
            Icon={AiOutlineInfoCircle}
            text={t("leftbar.about")}
            isCurrentRoute={checkIsCurrentRoute(location.pathname, "/about")}
          />
        </div>
      </div>

      <div className={classes.LeftBarResume}>
        <h3>{t("leftbar.resumeReading")}</h3>
        <Link className={classes.LeftBarResumeLink} to="/">
          <div className={classes.LeftBarResumeImage}></div>
          <div className={classes.LeftBarResumeData}>
            <div className={classes.LeftBarResumeDataManga}>
              <h4>One Piece</h4>
              <span>Eichiro Oda</span>
            </div>
            <span>Chapter 147</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Leftbar;
