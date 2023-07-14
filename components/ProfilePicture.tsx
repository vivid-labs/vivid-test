import styles from "./ProfilePicture.module.css";
export const ProfilePicture = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.profilePicture} figma-id="1:57">
      <div className={styles.profilePictureDiv} figma-id="1:160" />
    </div>
  );
};
