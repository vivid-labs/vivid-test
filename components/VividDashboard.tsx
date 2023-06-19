import styles from "./VividDashboard.module.css";
import { NavBar } from "./NavBar";
import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { OutlinedLogo } from "./OutlinedLogo";
import { GitHubIcon } from "./GitHubIcon";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";

export const VividDashboard = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.vividDashboard}>
      <NavBar type="Colored" />
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.left}>
            <div className={styles.progress}>
              <div className={styles.progressBar}>
                <div className={styles.frame_6} />
              </div>
              <p className={styles.text25CompleteNiceWork}>
                25% complete — nice work!
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
              <Step
                status="Complete"
                icon={<FigmaLogo />}
                task="Install Figma Plugin"
                time="<1 minute"
                override={{
                  height: "86px",
                  width: "100%",
                }}
              />
              <Step
                status="Todo"
                icon={<OutlinedLogo />}
                task="Invite teammates"
                time="<1 minute"
                override={{
                  width: "100%",
                  height: "86px",
                }}
              />
              <Step
                status="Todo"
                icon={<GitHubIcon />}
                task="Connect to GitHub"
                time="5 minutes"
                override={{
                  width: "100%",
                  height: "86px",
                }}
              />
              <Step
                status="Todo"
                icon={<OutlinedLogo />}
                task="Submit existing components"
                time="15 minutes"
                override={{
                  height: "86px",
                  width: "100%",
                }}
              />
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
    </div>
  );
};
