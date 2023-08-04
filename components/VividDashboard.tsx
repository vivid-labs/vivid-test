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
    <div className={styles.vividDashboardComponent} style={override}>
      <NavBar
        type="Colored"
        time="Time to do this task"
        icon={<FigmaLogo />}
        task="Do this task"
        override={{
          position: "relative",
        }}
      />
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.left}>
            <div className={styles.progress}>
              <div className={styles.progressBar}>
                <div className={styles.frame_6} />
              </div>
              <p className={styles.text}>25% complete &#x2014; nice work!</p>
            </div>
            <div className={styles.teamsInformation}>
              <div className={styles.heading_2}>
                <p className={styles.textText}>Get Started with Vivid!</p>
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
              <div className={styles.div} />
              <img className={styles.figmaScreen_1} src={figmaScreen_1.src} />
              <img className={styles.image} src={image.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
