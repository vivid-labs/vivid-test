import styles from "./EyeSlash.module.css";
import eyeSlash from "./eyeSlash.svg";

export const EyeSlash = ({ style }: { style?: any }) => {
  return <img src={eyeSlash.src} style={style} className={styles.eyeSlash} />;
};
