import styles from "./Archive.module.css";
import archive from "./archive.svg";
export const Archive = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
      className={styles.archiveComponent}
      src={archive.src}
      style={override}
    />
  );
};
