import styles from "./Avatar_14.module.css";
import avatarPlaceholderImage from "./avatarPlaceholderImage.png";

export const Avatar_14 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.avatar_14}>
      <img
        src={avatarPlaceholderImage.src}
        className={styles.avatarPlaceholder}
      />
    </div>
  );
};
