import styles from "./Component.module.css";
import pregame from "./pregame.png";

export const Component = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.component}>
      <img src={pregame.src} className={styles.pregame} />
    </div>
  );
};
