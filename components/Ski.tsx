import styles from "./Ski.module.css";
import ski from "./ski.jpg";

export const Ski = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.ski}>
      <img src={ski.src} className={styles.skiImage} />
    </div>
  );
};
