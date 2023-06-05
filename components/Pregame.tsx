import styles from "./Pregame.module.css";
import pregameImage from "./pregameImage.png";

export const Pregame = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.pregame}>
      <img src={pregameImage.src} className={styles.pregameImage} />
    </div>
  );
};
