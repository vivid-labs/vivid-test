import styles from "./Monkey.module.css";
import monkey from "./monkey.png";

export const Monkey = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.monkey}>
      <img src={monkey.src} className={styles.monkeyImage} />
    </div>
  );
};
