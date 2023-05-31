import styles from "./Profile.module.css";
import profile from "./profile.jpg";

export const Profile = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.profile}>
      <img src={profile.src} className={styles.profileImage} />
    </div>
  );
};
