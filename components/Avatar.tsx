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
        <div style={override} className={styles.avatar} figma-id="7:1188:11040">
          {avatarPhoto}
        </div>
      );
    case "Big":
      return (
        <div
          style={override}
          className={styles.avatarComponent}
          figma-id="7:1210:11457"
        >
          {avatarPhoto}
        </div>
      );
    case "Small":
      return (
        <div
          style={override}
          className={styles.avatarComponent1}
          figma-id="7:1188:11047"
        >
          {avatarPhoto}
        </div>
      );
    default:
      return null;
  }
};
