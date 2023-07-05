import styles from "./TwitterLogo.module.css";
import twitterLogo from "./twitterLogo.svg";

export const TwitterLogo = ({ override }: { override?: any }) => {
  return (
    <img
      src={twitterLogo.src}
      style={override}
      className={styles.twitterLogo}
    />
  );
};
