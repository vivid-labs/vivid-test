import styles from "./Avatar.module.css";
import { Avatar_1 } from "./Avatar_1";

export const Avatar = ({
  property_1,
  avatarPhoto,
}: {
  property_1: string;
  avatarPhoto: any;
}) => {
  return <div className={styles.avatar0}>{avatarPhoto}</div>;
};
