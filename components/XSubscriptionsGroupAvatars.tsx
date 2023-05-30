import styles from "./XSubscriptionsGroupAvatars.module.css";
import { XAvatarCircle } from "./XAvatarCircle";

export const XSubscriptionsGroupAvatars = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xSubscriptionsGroupAvatars0}>
      <XAvatarCircle
        style={{
          height: "50px",
          width: "50px",
        }}
      />
      <p className={styles.xSubscriptionsGroupAvatars1}>Dmitry</p>
    </div>
  );
};
