import styles from "./VividDashboard.module.css";
import { SideBar } from "./SideBar";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { GitHubIcon } from "./GitHubIcon";
import { OutlinedLogo } from "./OutlinedLogo";
export const VividDashboard = ({ override }: { override?: any }) => {
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
    <div style={override} className={styles.dashboardContainer}>
    <SideBar
      style="Colored"
      override={{
        height: "100%",
        width: "62px",
      }}
    />
    <div className={styles.dashboardContent}>
      <div className={styles.dashboardSection}>
        <div className={styles.dashboardLeft}>
          <div className={styles.dashboardProgress}>
            <div className={styles.dashboardProgressBar}>
              <div className={styles.dashboardFrame_6} />
            </div>
            <p className={styles.dashboardTextCompleteNiceWork}>
              33% complete — nice work!
            </p>
          </div>
          <div className={styles.dashboardTeamsInformation}>
            <div className={styles.dashboardHeading}>
              <p className={styles.dashboardGetStartedWithVivid}>
                Get Started with Vivid!
              </p>
            </div>
          </div>
          <div className={styles.dashboardSteps}>
            {stepProps.map((props, i) => (
              <Step {...props} key={i} />
            ))}
          </div>
        </div>
        <div className={styles.dashboardRight}>
          <div className={styles.dashboardPictureAiMobileDesktop}>
            <img
              src={pictureAiMobileDesktopPng.src}
              className={styles.dashboardPictureAiMobileDesktopImage}
            />
          </div>
          <p className={styles.dashboardInsertFunImageHere}>Insert fun image here</p>
        </div>
      </div>
    </div>
   </div> 
  );
};
