import styles from "./UserAvatar.module.css";
export const UserAvatar = ({
  override,
  letters,
}: {
  override?: React.CSSProperties;
  letters: string;
}) => {
  return (
    <div className={styles.initials} style={override}>
    <p className={styles.avatar}>{letters}</p>
   </div> 
  );
};
