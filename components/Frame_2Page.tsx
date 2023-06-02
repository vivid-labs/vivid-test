import styles from "./Frame_2Page.module.css";
import pregameImage from "./pregameImage.png";
import pregame from "./pregame.png";

export const Frame_2Page = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.frame_2Page}>
      <div className={styles.pregame}>
        <img src={pregameImage.src} className={styles.pregameImage} />
      </div>
      <div className={styles.pregameDiv}>
        <img src={pregame.src} className={styles.pregameImage1} />
      </div>
    </div>
  );
};
