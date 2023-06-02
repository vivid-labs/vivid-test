import styles from "./FramePage.module.css";
import frameImage5 from "./frameImage5.png";
import line from "./line.svg";
import vectorImage from "./vectorImage.svg";
import groupImage4 from "./groupImage4.svg";
import groupImage3 from "./groupImage3.svg";
import frameImage4 from "./frameImage4.svg";
import frameImage3 from "./frameImage3.svg";
import groupImage2 from "./groupImage2.svg";
import groupImage1 from "./groupImage1.svg";
import groupImage from "./groupImage.svg";
import frameImage2 from "./frameImage2.svg";
import frameImage1 from "./frameImage1.svg";
import frameImage from "./frameImage.svg";
import vector from "./vector.svg";
import group from "./group.svg";
import frame from "./frame.svg";
import image from "./image.png";

export const FramePage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.framePage}>
      <div className={styles.frame}>
        <img
          src={frameImage5.src}
          className={
            styles.objectFitCoverOpacity_148a6497ee70e4ce52d63248c16e9d762a6c04cf4
          }
        />
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <img src={line.src} className={styles.line} />
              <img src={vectorImage.src} className={styles.vector} />
              <img src={groupImage4.src} className={styles.group} />
              <img src={groupImage3.src} className={styles.groupImage} />
            </div>
          </div>
          <div className={styles.autoLayoutHorizontal}>
            <div className={styles.rectangle} />
            <img src={frameImage4.src} className={styles.frameImage} />
          </div>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.autoLayoutHorizontalDiv}>
              <p className={styles.startAFreeEnterpriseTrial}>
                Start a free enterprise trial
              </p>
              <img src={frameImage3.src} className={styles.frameImage1} />
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.frameDiv6}>
                <div className={styles.frameDiv7}>
                  <p className={styles.emailAddress}>Email address</p>
                </div>
              </div>
              <div className={styles.autoLayoutHorizontalDiv1}>
                <p className={styles.signUpForGitHub}>Sign up for GitHub</p>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv8}>
            <p className={styles.trustedByTheWorldSLeadingOrganizations}>
              Trusted by the world’s leading organizations ↘︎
            </p>
            <div className={styles.frameDiv9}>
              <div className={styles.autoLayoutHorizontalDiv2}>
                <div className={styles.frameDiv10}>
                  <div>
                    <img src={groupImage2.src} className={styles.groupImage1} />
                  </div>
                </div>
              </div>
              <div className={styles.autoLayoutHorizontalDiv3}>
                <div className={styles.frameDiv11}>
                  <div>
                    <img src={groupImage1.src} className={styles.groupImage2} />
                  </div>
                </div>
              </div>
              <div className={styles.autoLayoutHorizontalDiv4}>
                <div className={styles.frameDiv12}>
                  <div>
                    <div>
                      <div>
                        <img
                          src={groupImage.src}
                          className={styles.groupImage3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.autoLayoutHorizontalDiv5}>
                <img src={frameImage2.src} className={styles.frameImage2} />
              </div>
              <div className={styles.autoLayoutHorizontalDiv6}>
                <img src={frameImage1.src} className={styles.frameImage3} />
              </div>
              <div className={styles.autoLayoutHorizontalDiv7}>
                <img src={frameImage.src} className={styles.frameImage4} />
              </div>
            </div>
          </div>
          <div className={styles.autoLayoutHorizontalDiv8}>
            <div className={styles.frameDiv13}>
              <div className={styles.autoLayoutHorizontalDiv9}>
                <div className={styles.frameDiv14}>
                  <img src={vector.src} className={styles.vectorImage} />
                  <div>
                    <img src={group.src} className={styles.groupImage4} />
                  </div>
                </div>
              </div>
              <div className={styles.autoLayoutVertical}>
                <p className={styles.introducingGitHubCopilotX}>
                  Introducing GitHub Copilot X
                </p>
                <p className={styles.yourAiPairProgrammerIsLevelingUp}>
                  Your AI pair programmer is leveling up
                </p>
              </div>
              <img src={frame.src} className={styles.frameImage5} />
            </div>
          </div>
          <p
            className={
              styles.harnessedForProductivityDesignedForCollaborationCelebratedForBuiltInSecurityWelcomeToThePlatformDevelopersLove
            }
          >
            Harnessed for productivity. Designed for collaboration. Celebrated
            for built-in security. Welcome to the platform developers love.
          </p>
          <p className={styles.letSBuildFromHere}>Let’s build from here</p>
          <div className={styles.image}>
            <img src={image.src} className={styles.imageImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
