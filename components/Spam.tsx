import styles from "./Spam.module.css";
import spam from "./spam.svg";
export const Spam = ({ override }: { override?: React.CSSProperties }) => {
  return (<img className={styles.spamImage} src={spam.src} style={override} />);
};
