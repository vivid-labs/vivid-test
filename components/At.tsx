import styles from "./At.module.css";
import at from "./at.svg";
export const At = ({ override }: { override?: React.CSSProperties }) => {
  return <img className={styles.atComponent} src={at.src} style={override} />;
};
