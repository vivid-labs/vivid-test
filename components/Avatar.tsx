import styles from "./Avatar.module.css";
import { Avatar_1 } from "./Avatar_1";
export const Avatar = ({
  override,
  property_1,
  avatarPhoto,
}: {
  override?: React.CSSProperties;
  property_1: string;
  avatarPhoto: React.ReactNode;
}) => {
  switch (property_1) {
    case "medium":
      return (
        <div className={styles.avatar} style={override}>
        {avatarPhoto}
       </div> 
      );
    case "Big":
      return (
        <div className={styles.avatarBig} style={override}>
        {avatarPhoto}
       </div> 
      );
    case "Small":
      return (
        <div className={styles.avatarSmall} style={override}>
        {avatarPhoto}
       </div> 
      );
    default:
      return null;
  }
};
