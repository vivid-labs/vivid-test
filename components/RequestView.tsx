import styles from "./RequestView.module.css";
import { ZoomIcon } from "./ZoomIcon";
import { Tab } from "./Tab";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { StepBar } from "./StepBar";
import { Checkbox } from "./Checkbox";
import { CogIcon } from "./CogIcon";
import { RequestRow } from "./RequestRow";
export const RequestView = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const tabProps = [
    {
      status: "Active",
      text: "Assigned to me (15)",
    },
    {
      status: "Idle",
      text: "Pending (100)",
      override: {
        height: "fit-content",
        width: "fit-content",
      },
    },
    {
      status: "Idle",
      text: "Reviewed (0)",
    },
    {
      status: "Idle",
      text: "All (115)",
      override: {
        height: "fit-content",
        width: "fit-content",
      },
    },
  ];
  const requestRowProps = [
    {
      eMail: "harry@lumos.com",
      name: "Harry Potter",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
    {
      eMail: "hermione@lumos.com",
      name: "Hermione Granger",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
    {
      eMail: "ron@lumos.com",
      name: "Ron Weasley",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
    {
      eMail: "snape@lumos.com",
      name: "Severus Snape",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
    {
      eMail: "albus@lumos.com",
      name: "Albus Dumbeldore",
      override: {
        height: "60px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "rgb(243, 244, 246)",
      },
    },
  ];
  return (
    <div className={styles.requestViewComponent} style={override}>
      <div className={styles.topBar}>
        <div className={styles.zoomContainer}>
          <ZoomIcon />
          <p className={styles.zoom}>Zoom</p>
        </div>
        <div className={styles.lowerContentContainer}>
          <div className={styles.tabs}>
            {tabProps.map((props, i) => (
              <Tab {...props} key={i} />
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <Button text="Remove Accounts" />
            <IconButton icon="Ellipsis" />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <StepBar
          override={{
            height: "fit-content",
            width: "100%",
          }}
        />
        <div className={styles.requests}>
          <div className={styles.headerRow}>
            <p className={styles.employee}>Employee</p>
            <p className={styles.manager}>Manager</p>
            <p className={styles.accountStatus}>Account Status</p>
            <p className={styles.lastLogIn}>Last Log In</p>
            <p className={styles.groups}>Groups</p>
            <p className={styles.licenses}>Licenses</p>
            <Checkbox
              override={{
                position: "absolute",
                top: "calc(50% - 8px)",
                left: "14px",
              }}
            />
            <CogIcon
              override={{
                position: "absolute",
                top: "calc(50% - 8px)",
                right: "12px",
              }}
            />
            <div className={styles.decisionContainer}>
              <p className={styles.decision}>Decision</p>
            </div>
          </div>
          {requestRowProps.map((props, i) => (
            <RequestRow {...props} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
