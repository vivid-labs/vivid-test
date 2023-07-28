import styles from "./VividDashboard.module.css";
import { NavBar } from "./NavBar";
import { FigmaLogo } from "./FigmaLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { Step } from "./Step";
import { OutlinedLogo } from "./OutlinedLogo";
import { GitHubIcon } from "./GitHubIcon";
import figmaScreen_1 from "./figmaScreen_1.png";
import vsCodeScreen_1 from "./vsCodeScreen_1.png";
export const VividDashboard = ({ override }: { override?: any }) => {
  const stepProps = [
    {
      status: "Complete",
      time: "<1 minute",
      task: "Install Figma Plugin",
      icon: <FigmaLogo figma-id="8:" />,
      override: {
        height: "86px",
        width: "100%",
      },
      "figma-id": "8:27:173",
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Set up team",
      icon: <OutlinedLogo figma-id="8:" />,
      override: {
        width: "100%",
        height: "86px",
      },
      "figma-id": "8:27:254",
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Invite teammates",
      icon: <OutlinedLogo figma-id="8:" />,
      override: {
        width: "100%",
        height: "86px",
      },
      "figma-id": "8:233:1868",
    },
    {
      status: "Up Next",
      time: "5 minutes",
      task: "Connect to GitHub",
      icon: <GitHubIcon figma-id="8:" />,
      override: {
        width: "100%",
        height: "86px",
      },
      "figma-id": "8:29:751",
    },
    {
      status: "Unsupported",
      time: "15 minutes",
      task: "Submit existing components",
      icon: <OutlinedLogo figma-id="8:" />,
      override: {
        height: "86px",
        width: "100%",
      },
      "figma-id": "8:27:259",
    },
  ];
  return (
    <div style={override} className={styles.dashboardVividDashboard} figma-id="8:15:103">
    <NavBar
      type="Colored"
      time="Time to do this task"
      icon={<FigmaLogo figma-id="8:" />}
      task="Do this task"
      figma-id="8:15:104"
    />
    <div className={styles.dashboardContent} figma-id="8:17:83">
      <div className={styles.dashboardSection} figma-id="8:17:84">
        <div className={styles.dashboardLeft} figma-id="8:17:85">
          <div className={styles.dashboardProgress} figma-id="8:18:165">
            <div className={styles.dashboardProgressBar} figma-id="8:18:162">
              <div className={styles.dashboardFrame6} figma-id="8:18:163" />
            </div>
            <p className={styles.dashboardText25CompleteNiceWork} figma-id="8:18:164">
              25% complete &#x2014; nice work!
            </p>
          </div>
          <div className={styles.dashboardTeamsInformation} figma-id="8:17:86">
            <div className={styles.dashboardHeading2} figma-id="8:17:87">
              <p
                className={styles.dashboardGetStartedWithVivid}
                figma-id="8:17:95"
              >
                Get Started with Vivid!
              </p>
            </div>
          </div>
          <div className={styles.dashboardSteps} figma-id="8:27:264">
            {stepProps.map((props, i) => (
              <Step {...props} key={i} />
            ))}
          </div>
        </div>
        <div figma-id="8:232:171">
          <div className={styles.dashboardRight} figma-id="8:15:231">
            <div
              className={styles.dashboardPictureAiMobileDesktopDiv}
              figma-id="8:15:232"
            >
              <img
                src={pictureAiMobileDesktopPng.src}
                className={styles.dashboardPictureAiMobileDesktop}
                figma-id="8:15:232"
              />
            </div>
            <img
              src={figmaScreen_1.src}
              className={styles.dashboardFigmaScreen1}
              figma-id="8:226:1608"
            />
            <img
              src={vsCodeScreen_1.src}
              className={styles.dashboardVsCodeScreen1}
              figma-id="8:226:1607"
            />
          </div>
        </div>
      </div>
    </div>
   </div> 
  );
};
