import styles from "./Content.module.css";
import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { GitHubIcon } from "./GitHubIcon";
import { OutlinedLogo } from "./OutlinedLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const Content = ({ override }: { override?: any }) => {
  const stepProps = [
    {
      status: "Complete",
      icon: <FigmaLogo />,
      task: "Install Figma Plugin",
      time: "5 minutes",
      override: {
        height: "86px",
        width: "100%",
      },
    },
    {
      status: "Todo",
      icon: <GitHubIcon />,
      task: "Connect to GitHub",
      time: "5 minutes",
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Todo",
      icon: <OutlinedLogo />,
      task: "Submit existing components",
      time: "15 minutes",
      override: {
        height: "86px",
        width: "100%",
      },
    },
  ];
  return (
    <div style={override} className={styles.content}>
    <div className={styles.section}>
      <div className={styles.left}>
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div className={styles.frame6} />
          </div>
          <p className={styles.textCompleteNiceWork}>
            33% complete — nice work!
          </p>
        </div>
        <div className={styles.teamsInformation}>
          <div className={styles.heading2}>
            <p className={styles.getStartedWithVividimportant}>
              Get Started with Vivid!
            </p>
          </div>
        </div>
        <div className={styles.steps}>
          {stepProps.map((props, i) => (
            <Step {...props} key={i} />
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.pictureAiMobileDesktopPng}>
          <img
            src={pictureAiMobileDesktopPng.src}
            className={styles.pictureAiMobileDesktopPngImage}
          />
        </div>
        <p className={styles.insertFunImageHere}>Insert fun image here</p>
      </div>
    </div>
   </div> 
  );
};
