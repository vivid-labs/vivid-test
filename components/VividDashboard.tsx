import styles from "./VividDashboard.module.css";
import { NavBar } from "./NavBar";
import { FigmaLogo } from "./FigmaLogo";
import imageImage from "./imageImage.jpg";
import { Step } from "./Step";
import { OutlinedLogo } from "./OutlinedLogo";
import { GitHubIcon } from "./GitHubIcon";
import figmaScreen_1 from "./figmaScreen_1.png";
import image from "./image.png";
export const VividDashboard = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
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
    <div className={styles.vividDashboardComponentStyle} style={override}>
    <NavBar
      type="Colored"
      time="Time to do this task"
      icon={<FigmaLogo />}
      task="Do this task"
      override={{
        position: "relative",
      }}
    />
    <div className={styles.contentStyle}>
      <div className={styles.sectionStyle}>
        <div className={styles.leftStyle}>
          <div className={styles.progressStyle}>
            <div className={styles.progressBarStyle}>
              <div className={styles.frameStyle} />
            </div>
            <p className={styles.textStyle}>25% complete &#x2014; nice work!</p>
          </div>
          <div className={styles.teamsInformationStyle}>
            <div className={styles.headingStyle}>
              <p className={styles.textTextStyle}>Get Started with Vivid!</p>
            </div>
          </div>
          <div className={styles.stepsStyle}>
            {stepProps.map((props, i) => (
              <Step {...props} key={i} />
            ))}
          </div>
        </div>
        <div>
          <div className={styles.rightStyle}>
            <div className={styles.divStyle} />
            <img className={styles.figmaScreenStyle} src={figmaScreen_1.src} />
            <img className={styles.imageStyle} src={image.src} />
          </div>
        </div>
      </div>
    </div>
   </div> 
  );
};
