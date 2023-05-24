import styles from "./CommunitiesActionCollapsedButton.module.css";
import { XActionsPageMenuButton } from "./XActionsPageMenuButton";
import { XActionsPageMenuItem } from "./XActionsPageMenuItem";

export const CommunitiesActionCollapsedButton = () => {
  return (
    <div className={styles.communitiesActionCollapsedButton0}>
      <XActionsPageMenuButton />
      <div className={styles.communitiesActionCollapsedButton1} />
      <div className={styles.communitiesActionCollapsedButton2}>
        <XActionsPageMenuItem />
        <XActionsPageMenuItem />
        <XActionsPageMenuItem />
      </div>
    </div>
  );
};
