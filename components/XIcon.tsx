import styles from "./XIcon.module.css";
import x from "./x.svg";
export const XIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.xIconComponent} style={override}>
      <img className={styles.x} src={x.src} />
    </div>
  );
};
