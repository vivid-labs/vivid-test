import styles from "./CommunitiesActionCollapsedButton.module.css";
import { XActionsPageMenuButton } from "./XActionsPageMenuButton";
import { XActionsPageMenuItem } from "./XActionsPageMenuItem";

export const CommunitiesActionCollapsedButton = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesActionCollapsedButton0}>
      <XActionsPageMenuButton
        style={{
          height: "36px",
          width: "fit-content",
        }}
      />
      <div className={styles.communitiesActionCollapsedButton1} />
      <div className={styles.communitiesActionCollapsedButton2}>
        <XActionsPageMenuItem
          style={{
            height: "36px",
            width: "200px",
          }}
        />
        <XActionsPageMenuItem
          style={{
            height: "36px",
            width: "200px",
          }}
        />
        <XActionsPageMenuItem
          style={{
            height: "36px",
            width: "200px",
          }}
        />
      </div>
    </div>
  );
};
