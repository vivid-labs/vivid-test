import styles from "./YoutubeLogo.module.css";
import youtubeLogo from "./youtubeLogo.svg";

export const YoutubeLogo = ({ style }: { style?: any }) => {
  return (
    <img src={youtubeLogo.src} style={style} className={styles.youtubeLogo} />
  );
};
