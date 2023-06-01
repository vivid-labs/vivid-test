import styles from "./Eye.module.css";
import eye from "./eye.svg";

export const Eye = ({ style }: { style?: any }) => {
  return <img src={eye.src} style={style} className={styles.eye} />;
};
