import styles from "./XCommunityTitleLayout.module.css";
import { XAvatarCircle } from "./XAvatarCircle";
import { XButtonActionsLabelFixedPrimary } from "./XButtonActionsLabelFixedPrimary";
import { XButtonActionsLabelFixedSecondary } from "./XButtonActionsLabelFixedSecondary";

export const XCommunityTitleLayout = () => {
  return (
    <div className={styles.xCommunityTitleLayout0}>
      <XAvatarCircle />
      <div className={styles.xCommunityTitleLayout1} />
      <div className={styles.xCommunityTitleLayout2}>
        <p className={styles.xCommunityTitleLayout3}>Vkontakte</p>
        <p className={styles.xCommunityTitleLayout4}>Community</p>
      </div>
      <div className={styles.xCommunityTitleLayout5} />
      <div className={styles.xCommunityTitleLayout6}>
        <XButtonActionsLabelFixedPrimary />
        <XButtonActionsLabelFixedSecondary />
      </div>
    </div>
  );
};
