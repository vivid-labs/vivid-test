import styles from "./Avatar.module.css";
import { Avatar_1 } from "./Avatar_1";

export const Avatar = ({
  style,
  property_1,
  avatarPhoto,
}: {
  style?: any;
  property_1: string;
  avatarPhoto: any;
}) => {
  switch (property_1) {
    case "medium":
      return (
        <div style={style} className={styles.avatar}>
          {avatarPhoto}
        </div>
      );
    case "Big":
      return (
        <div style={style} className={styles.avatarComponent}>
          {avatarPhoto}
        </div>
      );
    case "Small":
      return (
        <div style={style} className={styles.avatarComponent1}>
          {avatarPhoto}
        </div>
      );
    default:
      return null;
      break;
  }
};
