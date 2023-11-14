import styles from "./InboxIcon.module.css";
import inboxIcon from "./inboxIcon.svg";
export const InboxIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <img
      className={styles.inboxIconComponent}
      src={inboxIcon.src}
      style={override}
    />
  );
};
