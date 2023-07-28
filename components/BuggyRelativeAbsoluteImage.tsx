import styles from "./BuggyRelativeAbsoluteImage.module.css";
import frame from "./frame.jpg";
export const BuggyRelativeAbsoluteImage = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div
      style={override}
      className={styles.buggyRelativeAbsoluteImage}
      figma-id="15:132:19"
    >
      <div className={styles.autoLayoutVerticalDiv} figma-id="15:132:20">
        <div className={styles.frameDiv} figma-id="15:132:21">
          <div className={styles.frame} figma-id="15:132:22">
            <img src={frame.src} className={styles.image} figma-id="" />
          </div>
        </div>
        <div className={styles.autoLayoutVertical} figma-id="15:132:23">
          <div className={styles.autoLayoutHorizontal} figma-id="15:132:24">
            <p className={styles.bollywoodJazz} figma-id="15:132:25">
              Bollywood Jazz
            </p>
          </div>
          <div className={styles.frameDiv1} figma-id="15:132:26">
            <p
              className={styles.theBestOfJazzMusicFromBollywoodCoverArRahman}
              figma-id="15:132:27"
            >
              The best of Jazz music from Bollywood. Cover- A R Rahman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
