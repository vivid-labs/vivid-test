import styles from "./Avatar_1.module.css";
import avatarPlaceholder from "./avatarPlaceholder.png";

export const Avatar_1 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.avatar_1}>
      <img src={avatarPlaceholder.src} className={styles.avatarPlaceholder} />
    </div>
  );
};
