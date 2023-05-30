import styles from "./XActionsPageMenuItem.module.css";
import { Notification_24 } from "./Notification_24";

export const XActionsPageMenuItem = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xActionsPageMenuItem0}>
      <p className={styles.xActionsPageMenuItem1}>Включить уведомления</p>
      <Notification_24
        style={{
          opacity: "0.6",
        }}
      />
    </div>
  );
};
