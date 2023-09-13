import styles from "./UserAvatar.module.css";
export const UserAvatar = ({
  override,
  letters,
}: {
  override?: React.CSSProperties;
  letters: string;
}) => {
  return (
    <div className={styles.userAvatarComponent} style={override}>
      <p className={styles.hp}>{letters}</p>
    </div>
  );
};
