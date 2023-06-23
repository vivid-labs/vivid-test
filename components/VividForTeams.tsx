import styles from "./VividForTeams.module.css";
import { NavBar } from "./NavBar";
import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";

export const VividForTeams = ({ override }: { override?: any }) => {
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
                  <p className={styles.freeFor_1MonthInBeta}>
                    Free for 1 month in beta
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
                <Feature
                  heading="Create PRs in GitHub"
                  description="Generate summaries, action items & insights"
                  override={{
                    height: "fit-content",
                    flex: "1 1 0%",
                    minWidth: "0px",
                  }}
                />
                <Feature
                  heading="Reuse Components"
                  description="Generate summaries, action items & insights"
                  override={{
                    height: "fit-content",
                    flex: "1 1 0%",
                    minWidth: "0px",
                  }}
                />
                <Feature
                  heading="Call existing components"
                  description="Generate summaries, action items & insights"
                  override={{
                    height: "fit-content",
                    flex: "1 1 0%",
                    minWidth: "0px",
                  }}
                />
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
