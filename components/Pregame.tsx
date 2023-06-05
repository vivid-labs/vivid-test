import styles from "./Pregame.module.css";
import pregame from "./pregame.png";

export const Pregame = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.pregame}>
      <img src={pregame.src} className={styles.pregameImage} />
    </div>
  );
};
