import styles from "./LockKey.module.css";
import lockKey from "./lockKey.svg";

export const LockKey = ({ style }: { style?: any }) => {
  return <img src={lockKey.src} style={style} className={styles.lockKey} />;
};
