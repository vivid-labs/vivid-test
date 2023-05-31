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
        <div style={style} className={styles.avatar0}>
          {avatarPhoto}
        </div>
      );
    case "Big":
      return (
        <div style={style} className={styles.avatar1}>
          {avatarPhoto}
        </div>
      );
    case "Small":
      return (
        <div style={style} className={styles.avatar2}>
          {avatarPhoto}
        </div>
      );
  }
};
