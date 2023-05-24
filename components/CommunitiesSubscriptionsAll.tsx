import styles from "./CommunitiesSubscriptionsAll.module.css";
import { XTitleLayout_12_5 } from "./XTitleLayout_12_5";
import { XAvatarsRow } from "./XAvatarsRow";

export const CommunitiesSubscriptionsAll = () => {
  return (
    <div className={styles.communitiesSubscriptionsAll0}>
      <div className={styles.communitiesSubscriptionsAll1}>
        <div className={styles.communitiesSubscriptionsAll2}>
          <XTitleLayout_12_5 />
        </div>
      </div>
      <div className={styles.communitiesSubscriptionsAll3} />
      <XAvatarsRow />
      <XAvatarsRow />
      <div className={styles.communitiesSubscriptionsAll4} />
    </div>
  );
};
