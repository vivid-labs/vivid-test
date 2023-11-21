import styles from "./Ski.module.css";
import ski from "./ski.png";
export const Ski = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.skiComponent} style={override}>
      <img className={styles.skiImage} src={ski.src} />
    </div>
  );
};
