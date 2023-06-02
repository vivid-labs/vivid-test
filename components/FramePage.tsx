import styles from "./FramePage.module.css";
import imageImage1 from "./imageImage1.png";
import frameImage1 from "./frameImage1.svg";
import frameImage from "./frameImage.svg";
import frame from "./frame.svg";
import imageImage from "./imageImage.png";
import image from "./image.png";

export const FramePage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.framePage}>
      <div className={styles.image}>
        <img src={imageImage1.src} className={styles.imageImage} />
      </div>
      <div className={styles.frame}>
        <img src={frameImage1.src} className={styles.frameImage} />
      </div>
      <div className={styles.frameDiv}>
        <p className={styles.thePlaceForAnyoneFromAnywhereToBuildAnything}>
          The place for anyone from anywhere to build anything
        </p>
        <p
          className={
            styles.whetherYouReScalingYourStartupOrJustLearningHowToCodeGitHubIsYourHomeJoinTheWorldSLargestDeveloperPlatformToBuildTheInnovationsThatEmpowerHumanityLetSBuildFromHere
          }
        >
          Whether you’re scaling your startup or just learning how to code,
          GitHub is your home. Join the world’s largest developer platform to
          build the innovations that empower humanity. Let’s build from here.
        </p>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.frameDiv1}>
            <p className={styles.signUpForGitHub}>Sign up for GitHub</p>
            <img src={frameImage.src} className={styles.frameImage1} />
          </div>
          <div className={styles.frameDiv2}>
            <p className={styles.startAFreeEnterpriseTrial}>
              Start a free enterprise trial
            </p>
            <img src={frame.src} className={styles.frameImage2} />
          </div>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img src={imageImage.src} className={styles.imageImage1} />
      </div>
      <div className={styles.imageDiv1}>
        <img src={image.src} className={styles.imageImage2} />
      </div>
    </div>
  );
};
