import styles from "./CheckMark.module.css";
import group from "./group.svg";
export const CheckMark = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.checkMarkComponent} style={override}>
      <img className={styles.group} src={group.src} />
    </div>
  );
};
