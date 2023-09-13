import styles from "./CommentIcon.module.css";
import commentIcon from "./commentIcon.svg";
export const CommentIcon = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
      className={styles.commentIconComponent}
      src={commentIcon.src}
      style={override}
    />
  );
};
