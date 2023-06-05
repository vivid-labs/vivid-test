import styles from "./PregamePage.module.css";
import pregame from "./pregame.png";

export const PregamePage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.pregamePage}>
      <img src={pregame.src} className={styles.pregame} />
    </div>
  );
};
