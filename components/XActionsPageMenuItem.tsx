import styles from "./XActionsPageMenuItem.module.css";
import { Notification_24 } from "./Notification_24";

export const XActionsPageMenuItem = () => {
  return (
    <div className={styles.xActionsPageMenuItem0}>
      <p className={styles.xActionsPageMenuItem1}>Включить уведомления</p>
      <Notification_24 />
    </div>
  );
};
