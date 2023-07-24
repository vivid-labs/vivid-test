import styles from "./Profile.module.css";
import profile from "./profile.jpg";
export const Profile = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className={styles.profileComponent}
      figma-id="7:36:1213"
    >
      <img src={profile.src} className={styles.profile} figma-id="7:36:1212" />
    </div>
  );
};
