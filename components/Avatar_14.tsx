import styles from "./Avatar_14.module.css";
import avatarPlaceholderImage from "./avatarPlaceholderImage.png";
export const Avatar_14 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.avatarContainer}>
    <img
      src={avatarPlaceholderImage.src}
      className={styles.avatarImagePlaceholder}
    />
   </div> 
  );
};
