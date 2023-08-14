import styles from "./Check.module.css";
import check from "./check.svg";
export const Check = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className={styles.checkComponent} src={check.src} style={override} />
  );
};
