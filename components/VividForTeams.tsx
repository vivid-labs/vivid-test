import styles from "./VividForTeams.module.css";
import { NavBar } from "./NavBar";
import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const VividForTeams = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      heading: "Create PRs in GitHub",
      description:
        "As soon as designs are complete, developers can review generated code in their normal workflow. ",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
    {
      heading: "Reuse Components",
      description:
        "Once you generate a component, Vivid will call that component in future generations so you never generate duplicated code. ",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
    {
      heading: "Call existing components",
      description:
        "Already have components implemented in your codebase? Vivid  links your Figma components to existing React components.",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
  ];
  return (
    <div style={override} className={styles.vividForTeams}>
      <NavBar type="Colored" />
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.left}>
            <div className={styles.teamsInformation}>
              <div className={styles.heading_2}>
                <div className={styles.divAiAddonBlockEyebrowYe8W5}>
                  <div className={styles.svg}>
                    <div className={styles.frame}>
                      <img src={group.src} className={styles.group} />
                    </div>
                  </div>
                  <p className={styles.freeFor_2WeeksInBeta}>
                    Free for 2 weeks in beta
                  </p>
                </div>
                <p className={styles.vividTeams}>Vivid Teams</p>
              </div>
              <div className={styles.pTextTextJYg6z}>
                <p
                  className={
                    styles.manageYourEntireDesignSystemInFigmaLetDevelopersFocusOnFunctionalityWhileDesignersOwnTheUiShipFaster
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
            <div className={styles.divAiAddonBlockActionsFsahh}>
              <Button type="Primary" text="Get started" />
              <Button type="Secondary" text="I like shipping slowly" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.pictureAiMobileDesktopPng}>
              <img
                src={pictureAiMobileDesktopPng.src}
                className={styles.pictureAiMobileDesktopPngImage}
              />
            </div>
            <p className={styles.demoImageGif}>DEMO IMAGE/GIF</p>
          </div>
        </div>
      </div>
    </div>
  );
};
