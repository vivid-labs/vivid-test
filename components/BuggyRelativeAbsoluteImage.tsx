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
     className={styles.buggyRelativeAbsoluteImageClass}
     figma-id="15:132:19"
   >
    <div className={styles.autoLayoutVerticalDivClass} figma-id="15:132:20">
      <div className={styles.frameDivClass} figma-id="15:132:21">
        <div className={styles.frameClass} figma-id="15:132:22">
          <img src={frame.src} className={styles.imageClass} figma-id="" />
        </div>
      </div>
      <div className={styles.autoLayoutVerticalClass} figma-id="15:132:23">
        <div className={styles.autoLayoutHorizontalClass} figma-id="15:132:24">
          <p className={styles.bollywoodJazzClass} figma-id="15:132:25">
            Bollywood Jazz
          </p>
        </div>
        <div className={styles.frameDiv1Class} figma-id="15:132:26">
          <p
            className={styles.theBestOfJazzMusicFromBollywoodCoverArRahmanClass}
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
