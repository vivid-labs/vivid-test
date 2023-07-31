import styles from "./Content.module.css";
import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { OutlinedLogo } from "./OutlinedLogo";
import { GitHubIcon } from "./GitHubIcon";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import figmaScreen_1 from "./figmaScreen_1.png";
import vsCodeScreen_1 from "./vsCodeScreen_1.png";
export const Content = ({ override }: { override?: any }) => {
  const stepProps = [
    {
      status: "Complete",
      time: "<1 minute",
      task: "Install Figma Plugin",
      icon: <FigmaLogo />,
      override: {
        height: "86px",
        width: "100%",
      },
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Set up team",
      icon: <OutlinedLogo />,
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Invite teammates",
      icon: <OutlinedLogo />,
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Up Next",
      time: "5 minutes",
      task: "Connect to GitHub",
      icon: <GitHubIcon />,
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Unsupported",
      time: "15 minutes",
      task: "Submit existing components",
      icon: <OutlinedLogo />,
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
              <div className={styles.frame_6} />
            </div>
            <p className={styles.text25CompleteNiceWork}>
              25% complete &#x2014; nice work!
            </p>
          </div>
          <div className={styles.teamsInformation}>
            <div className={styles.heading_2}>
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
        <div>
          <div className={styles.right}>
            <div className={styles.pictureAiMobileDesktopPngDiv}>
              <img
                src={pictureAiMobileDesktopPng.src}
                className={styles.pictureAiMobileDesktopPng}
              />
            </div>
            <img src={figmaScreen_1.src} className={styles.figmaScreen_1} />
            <img src={vsCodeScreen_1.src} className={styles.vsCodeScreen_1} />
          </div>
        </div>
      </div>
    </div>
  );
};
