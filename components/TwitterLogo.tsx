import styles from "./TwitterLogo.module.css";
import twitterLogo from "./twitterLogo.svg";

export const TwitterLogo = ({ style }: { style?: any }) => {
  return (
    <img src={twitterLogo.src} style={style} className={styles.twitterLogo} />
  );
};
