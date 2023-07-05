import styles from "./EyeSlash.module.css";
import eyeSlash from "./eyeSlash.svg";

export const EyeSlash = ({ override }: { override?: any }) => {
  return (
    <img src={eyeSlash.src} style={override} className={styles.eyeSlash} />
  );
};
