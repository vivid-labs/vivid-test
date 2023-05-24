import styles from "./XAvatarsRow.module.css";
import { XSubscriptionsGroupAvatars } from "./XSubscriptionsGroupAvatars";

export const XAvatarsRow = () => {
  return (
    <div className={styles.xAvatarsRow0}>
      <div className={styles.xAvatarsRow1}>
        <div className={styles.xAvatarsRow2} />
        <XSubscriptionsGroupAvatars />
        <div className={styles.xAvatarsRow3} />
      </div>
      <div className={styles.xAvatarsRow4}>
        <div className={styles.xAvatarsRow5} />
        <XSubscriptionsGroupAvatars />
        <div className={styles.xAvatarsRow6} />
      </div>
      <div className={styles.xAvatarsRow7}>
        <div className={styles.xAvatarsRow8} />
        <XSubscriptionsGroupAvatars />
        <div className={styles.xAvatarsRow9} />
      </div>
    </div>
  );
};
