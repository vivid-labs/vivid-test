import styles from "./Avatar.module.css";
import { Avatar_1 } from "./Avatar_1";
export const Avatar = ({
  override,
  property_1,
  avatarPhoto,
}: {
  override?: any;
  property_1: string;
  avatarPhoto: any;
}) => {
  switch (property_1) {
    case "medium":
      return (
        <div style={override} className={styles.avatarContainer}>
        {avatarPhoto}
       </div>)
      );
    case "Big":
      return (
       (<div style={override} className={styles.bigAvatarContainer}>
        {avatarPhoto}
       </div>)
      );
    case "Small":
      return (
       (<div style={override} className={styles.smallAvatarContainer}>
        {avatarPhoto}
       </div> 
      );
    default:
      return null;
  }
};
