import styles from "./XAvatarsRow.module.css";
import { XSubscriptionsGroupAvatars } from "./XSubscriptionsGroupAvatars";

export const XAvatarsRow = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xAvatarsRow0}>
      <div className={styles.xAvatarsRow1}>
        <div className={styles.xAvatarsRow2} />
        <XSubscriptionsGroupAvatars
          style={{
            height: "fit-content",
            width: "70px",
          }}
        />
        <div className={styles.xAvatarsRow3} />
      </div>
      <div className={styles.xAvatarsRow4}>
        <div className={styles.xAvatarsRow5} />
        <XSubscriptionsGroupAvatars
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <div className={styles.xAvatarsRow6} />
      </div>
      <div className={styles.xAvatarsRow7}>
        <div className={styles.xAvatarsRow8} />
        <XSubscriptionsGroupAvatars
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <div className={styles.xAvatarsRow9} />
      </div>
    </div>
  );
};
