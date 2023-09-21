import styles from "./Arrow.module.css";
import arrow from "./arrow.svg";
export const Arrow = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className={styles.arrowComponent} src={arrow.src} style={override} />
  );
};
