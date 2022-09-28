import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import classes from "./Changelog.module.scss";
import { format } from "date-fns";
import { GiPlainCircle} from "react-icons/gi"

function Changelog() {
  const { t } = useTranslation();

  const changelogs = [
    {
      date: "09-27-2022",
      version: "0.0.3",
      added: [
        "Plugin Module",
        "Changelog Module",
        "Ability to add hover style by using a string",
      ],
      changed: [
        "Hover styling is now handled by components",
        "Fallback for styling in case there is no design system",
        "transition, backgroundColor, color, font weight now handled for styling",
        "Components now have a required type prop that allows the library to fetch the styling from the design system",
      ],
      removed: [
        "Components styling now checks for existence of a prop before trying to applying.",
        "Type of style components props to StyleProps for better type guard",
      ],
    },
    {
      date: "09-22-2022",
      version: "0.0.2",
      added: [
        "Plugin Module",
        "Changelog Module",
        "Ability to add hover style by using a string",
      ],
      changed: [
        "Hover styling is now handled by components",
        "Fallback for styling in case there is no design system",
        "transition, backgroundColor, color, font weight now handled for styling",
        "Components now have a required type prop that allows the library to fetch the styling from the design system",
      ],
      removed: [
        "Components styling now checks for existence of a prop before trying to applying.",
        "Type of style components props to StyleProps for better type guard",
      ],
    },
    {
      date: "09-12-2022",
      version: "0.0.1",
      added: [
        "Plugin Module",
        "Changelog Module",
        "Ability to add hover style by using a string",
      ],
      changed: [
        "Hover styling is now handled by components",
        "Fallback for styling in case there is no design system",
        "transition, backgroundColor, color, font weight now handled for styling",
        "Components now have a required type prop that allows the library to fetch the styling from the design system",
      ],
      removed: [
        "Components styling now checks for existence of a prop before trying to applying.",
        "Type of style components props to StyleProps for better type guard",
      ],
    },
  ];

  return (
    <Layout title={t("screen-titles.changelog")}>
      <div className={classes.Changelog}>
        {changelogs.map((version, i) => (
          <div
            className={`${classes.ChangelogVersion} ${
              i === 0 && classes.LatestVersion
            }`}
            key={version.version}
          >
            <div className={classes.Stepper}>
              <div className={classes.StepperBullet}>
                <GiPlainCircle />
              </div>
            </div>
            <div className={classes.ChangelogVersionHeader}>
              <h1>{format(new Date(version.date), "dd-MM-yyyy")}</h1>
              {i === 0 && <span>LATEST</span>}
            </div>

            <div className={classes.ChangelogVersionCategory}>
              <h2 className={classes.Added}>Added</h2>
              {version.added.map((addition) => (
                <li key={addition}>- {addition}</li>
              ))}
            </div>

            <div className={classes.ChangelogVersionCategory}>
              <h2 className={classes.Changed}>Changed</h2>
              {version.changed.map((change) => (
                <li key={change}>- {change}</li>
              ))}
            </div>

            <div className={classes.ChangelogVersionCategory}>
              <h2 className={classes.Removed}>Removed</h2>
              {version.removed.map((remove) => (
                <li key={remove}>- {remove}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Changelog;
