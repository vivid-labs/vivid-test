import styles from "./InstagramLogo.module.css";
import instagramLogo from "./instagramLogo.svg";

export const InstagramLogo = ({ style }: { style?: any }) => {
  return (
    <img
      src={instagramLogo.src}
      style={style}
      className={styles.instagramLogo}
    />
  );
};
