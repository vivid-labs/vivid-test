import styles from "./Content.module.css";
import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const Content = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      heading: "Create PRs in GitHub",
      description: "Generate summaries, action items & insights",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
    {
      heading: "Reuse Components",
      description: "Generate summaries, action items & insights",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
    {
      heading: "Call existing components",
      description: "Generate summaries, action items & insights",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
  ];
  const buttonProps = [
    {
      type: "Primary",
      text: "Get started",
    },
    {
      type: "Secondary",
      text: "I like shipping slowly",
    },
  ];
  return (
    <div style={override} className={styles.content}>
    <div className={styles.section}>
      <div className={styles.left}>
        <div className={styles.teamsContainer}>
          <div className={styles.headingContainer}>
            <div className={styles.eyebrowContainer}>
              <div className={styles.svgContainer}>
                <div className={styles.frameContainer}>
                  <img src={group.src} className={styles.groupImage} />
                </div>
              </div>
              <p className={styles.betaMessage}>
                Free for 1 month in beta
              </p>
            </div>
            <p className={styles.vividTeamsText}>Vivid Teams</p>
          </div>
          <div className={styles.descriptionContainer}>
            <p
              className={
                styles.description
              }
            >
              Manage your entire design system in Figma. Let developers focus
              on functionality while designers own the UI. Ship faster.{" "}
            </p>
          </div>
          <div className={styles.featuresContainer}>
            {featureProps.map((props, i) => (
              <Feature {...props} key={i} />
            ))}
          </div>
        </div>
        <div className={styles.actionsContainer}>
          {buttonProps.map((props, i) => (
            <Button {...props} key={i} />
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.pictureContainer}>
          <img
            src={pictureAiMobileDesktopPng.src}
            className={styles.pictureImage}
          />
        </div>
        <p className={styles.demoText}>DEMO IMAGE/GIF</p>
      </div>
    </div>
   </div> 
  );
};
