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
    <div className={styles.decisionContainer} style={override}>
    <div className={styles.userName}>
      <UserAvatar letters="HP" />
      <div className={styles.nameContainer}>
        <p className={styles.requestRowComponent}>{name}</p>
        <p className={styles.userContainer}>{eMail}</p>
      </div>
    </div>
    <p className={styles.userEmail}>Aspen Rosser</p>
    <p className={styles.managerName}>Active</p>
    <p className={styles.accountStatus}>19 days ago</p>
    <p className={styles.lastTime}>
      zoom-basic,
      <br />
      zoom-pro
    </p>
    <p className={styles.groups}>Business</p>
    <Checkbox
      override={{
        position: "absolute",
        top: "calc(50% - 8px)",
        left: "14px",
      }}
    />
    <div className={styles.buttonContainer}>
      <UserAvatar letters="SP" />
      <img className={styles.licenses} src={line_1.src} />
      <div className={styles.lineImage}>
        <IconButton icon="X" />
        <IconButton icon="Check" />
      </div>
      <CommentIcon />
    </div>
   </div> 
  );
};
