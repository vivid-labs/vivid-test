import styles from "./VividForTeams.module.css";
import { NavBar } from "./NavBar";
import { FigmaLogo } from "./FigmaLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
export const VividForTeams = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      description:
        "As soon as designs are complete, developers can review generated code in their normal workflow. ",
      heading: "Create PRs in GitHub",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
    {
      description:
        "Once you generate a component, Vivid will call that component in future generations so you never generate duplicated code. ",
      heading: "Reuse Components",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
    {
      description:
        "Already have components implemented in your codebase? Vivid  links your Figma components to existing React components.",
      heading: "Call existing components",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
  ];
  return (
    <div className={styles.headerVividForTeams} style={override}>
    <NavBar
      type="Colored"
      time="Time to do this task"
      icon={<FigmaLogo />}
      task="Do this task"
      override={{
        position: "relative",
      }}
    />
    <div className={styles.headerContent}>
      <div className={styles.headerSection}>
        <div className={styles.headerLeft}>
          <div className={styles.headerTeamsInformation}>
            <div className={styles.headerHeading2}>
              <div className={styles.headerDivAiAddonBlockEyebrowYe8W5}>
                <div className={styles.headerSvg}>
                  <div className={styles.headerFrame}>
                    <img className={styles.headerGroup} src={group.src} />
                  </div>
                </div>
                <p className={styles.headerFreeFor2WeeksInBeta}>
                  Free for 2 weeks in beta
                </p>
              </div>
              <p className={styles.headerVividTeams}>Vivid Teams</p>
            </div>
            <div className={styles.headerPTextTextJYg6z}>
              <p
                className={
                  styles.headerManageYourEntireDesignSystemInFigmaLetDevelopersFocusOnFunctionalityWhileDesignersOwnTheUiShipFaster
                }
              >
                Manage your entire design system in Figma. Let developers
                focus on functionality while designers own the UI. Ship
                faster.{" "}
              </p>
            </div>
            <div className={styles.descriptions}>
              {featureProps.map((props, i) => (
                <Feature {...props} key={i} />
              ))}
            </div>
          </div>
          <div className={styles.headerDivAiAddonBlockActionsFsahh}>
            <Button type="Primary" text="Get started" />
            <Button type="Secondary" text="I like shipping slowly" />
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerPictureAiMobileDesktopPngDiv}>
            <img
              className={styles.headerPictureAiMobileDesktopPng}
              src={pictureAiMobileDesktopPng.src}
            />
          </div>
          <p className={styles.headerDemoImageGif}>DEMO IMAGE/GIF</p>
        </div>
      </div>
    </div>
   </div> 
  );
};
