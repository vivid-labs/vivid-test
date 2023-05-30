import styles from "./CommunitiesSubscriptionsAll.module.css";
import { XTitleLayout_12_5 } from "./XTitleLayout_12_5";
import { XAvatarsRow } from "./XAvatarsRow";

export const CommunitiesSubscriptionsAll = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesSubscriptionsAll0}>
      <div className={styles.communitiesSubscriptionsAll1}>
        <div className={styles.communitiesSubscriptionsAll2}>
          <XTitleLayout_12_5
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
        </div>
      </div>
      <div className={styles.communitiesSubscriptionsAll3} />
      <XAvatarsRow />
      <XAvatarsRow
        style={{
          height: "fit-content",
          width: "fit-content",
        }}
      />
      <div className={styles.communitiesSubscriptionsAll4} />
    </div>
  );
};
