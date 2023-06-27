import styles from "./Ski.module.css";
import ski from "./ski.jpg";

export const Ski = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.ski}>
      <img src={ski.src} className={styles.skiImage} />
    </div>
  );
};
