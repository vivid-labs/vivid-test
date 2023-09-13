import styles from "./RequestRow.module.css";
import { UserAvatar } from "./UserAvatar";
import { Checkbox } from "./Checkbox";
import line_1 from "./line_1.svg";
import { IconButton } from "./IconButton";
import { CommentIcon } from "./CommentIcon";
export const RequestRow = ({
  override,
  name,
  eMail,
}: {
  override?: React.CSSProperties;
  name: string;
  eMail: string;
}) => {
  return (
    <div className={styles.requestRowComponent} style={override}>
      <div className={styles.userContainer}>
        <UserAvatar letters="HP" />
        <div className={styles.nameContainer}>
          <p className={styles.harryPotter}>{name}</p>
          <p className={styles.harryatLumosCom}>{eMail}</p>
        </div>
      </div>
      <p className={styles.manager}>Aspen Rosser</p>
      <p className={styles.accountStatus}>Active</p>
      <p className={styles.lastTime}>19 days ago</p>
      <p className={styles.groups}>
        zoom-basic,
        <br />
        zoom-pro
      </p>
      <p className={styles.licenses}>Business</p>
      <Checkbox
        override={{
          position: "absolute",
          top: "calc(50% - 8px)",
          left: "14px",
        }}
      />
      <div className={styles.decisionContainer}>
        <UserAvatar letters="SP" />
        <img className={styles.line_1} src={line_1.src} />
        <div className={styles.buttonContainer}>
          <IconButton icon="X" />
          <IconButton icon="Check" />
        </div>
        <CommentIcon />
      </div>
    </div>
  );
};
