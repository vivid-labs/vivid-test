import styles from "./Pregame.module.css";
import pregame_1 from "./pregame_1.png";

export const Pregame = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.pregame}>
      <img src={pregame_1.src} className={styles.pregameImage} />
    </div>
  );
};
