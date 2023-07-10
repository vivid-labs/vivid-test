import styles from "./Avatar_1.module.css";
import avatarPlaceholder from "./avatarPlaceholder.png";
export const Avatar_1 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.avatarWrapper}>
    <img src={avatarPlaceholder.src} className={styles.avatarImage} />
   </div> 
  );
};
