import styles from "./User.module.css";
import user from "./user.svg";
export const User = ({ override }: { override?: any }) => {
  return <img src={user.src} style={override} className={styles.avatar} />;
};
