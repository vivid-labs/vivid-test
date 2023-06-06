import styles from "./User.module.css";
import user from "./user.svg";

export const User = ({ style }: { style?: any }) => {
  return <img src={user.src} style={style} className={styles.user} />;
};
