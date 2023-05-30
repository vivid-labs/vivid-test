import styles from "./XCommunityTitleLayout.module.css";
import { XAvatarCircle } from "./XAvatarCircle";
import { XButtonActionsLabelFixedPrimary } from "./XButtonActionsLabelFixedPrimary";
import { XButtonActionsLabelFixedSecondary } from "./XButtonActionsLabelFixedSecondary";

export const XCommunityTitleLayout = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xCommunityTitleLayout0}>
      <XAvatarCircle
        style={{
          height: "46px",
          width: "46px",
        }}
      />
      <div className={styles.xCommunityTitleLayout1} />
      <div className={styles.xCommunityTitleLayout2}>
        <p className={styles.xCommunityTitleLayout3}>Vkontakte</p>
        <p className={styles.xCommunityTitleLayout4}>Community</p>
      </div>
      <div className={styles.xCommunityTitleLayout5} />
      <div className={styles.xCommunityTitleLayout6}>
        <XButtonActionsLabelFixedPrimary
          style={{
            height: "30px",
            width: "157px",
          }}
        />
        <XButtonActionsLabelFixedSecondary
          style={{
            height: "30px",
            width: "156px",
          }}
        />
      </div>
    </div>
  );
};
