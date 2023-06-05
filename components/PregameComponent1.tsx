import styles from "./PregameComponent1.module.css";
import pregame from "./pregame.png";

export const PregameComponent1 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.pregameComponent1}>
      <img src={pregame.src} className={styles.pregame} />
    </div>
  );
};
