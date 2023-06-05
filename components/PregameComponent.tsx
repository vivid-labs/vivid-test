import styles from "./PregameComponent.module.css";
import pregame from "./pregame.png";

export const PregameComponent = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.pregameComponent}>
      <img src={pregame.src} className={styles.pregame} />
    </div>
  );
};
