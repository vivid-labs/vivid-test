import styles from "./Trash.module.css";
import trash from "./trash.svg";
export const Trash = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img className={styles.trashComponent} src={trash.src} style={override} />
  );
};
