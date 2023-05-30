import styles from "./CommunitiesSubscriptionsFriendsSmallAlone.module.css";
import { XTitleLayout_12_5 } from "./XTitleLayout_12_5";
import { XAvatarCircle } from "./XAvatarCircle";

export const CommunitiesSubscriptionsFriendsSmallAlone = ({
  style,
}: {
  style: any;
}) => {
  return (
    <div
      style={style}
      className={styles.communitiesSubscriptionsFriendsSmallAlone0}
    >
      <div className={styles.communitiesSubscriptionsFriendsSmallAlone1}>
        <XTitleLayout_12_5
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
      </div>
      <XAvatarCircle
        style={{
          height: "24px",
          width: "24px",
        }}
      />
    </div>
  );
};
