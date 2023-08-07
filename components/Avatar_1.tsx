import styles from "./Avatar_1.module.css";
import avatarPlaceholder from "./avatarPlaceholder.png";
export const Avatar_1 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.avatar_1Component} style={override}>
      <img className={styles.avatarPlaceholder} src={avatarPlaceholder.src} />
    </div>
  );
};
