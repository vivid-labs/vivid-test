import styles from "./CommunitiesPostContainer.module.css";
import { XTitleLayoutPost } from "./XTitleLayoutPost";
import { XContentContainer } from "./XContentContainer";
import { XContainerCounters } from "./XContainerCounters";

export const CommunitiesPostContainer = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesPostContainer0}>
      <div className={styles.communitiesPostContainer1}>
        <div className={styles.communitiesPostContainer2}>
          <XTitleLayoutPost
            style={{
              height: "50px",
              width: "510px",
            }}
          />
        </div>
      </div>
      <div className={styles.communitiesPostContainer3} />
      <XContentContainer />
      <div className={styles.communitiesPostContainer4} />
      <XContainerCounters />
    </div>
  );
};
