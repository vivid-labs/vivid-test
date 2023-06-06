import styles from "./Basketball.module.css";
import basketball from "./basketball.svg";

export const Basketball = ({ style }: { style?: any }) => {
  return (
    <img src={basketball.src} style={style} className={styles.basketball} />
  );
};
