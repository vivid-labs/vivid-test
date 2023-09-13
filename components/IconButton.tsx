import styles from "./IconButton.module.css";
import { CheckIcon } from "./CheckIcon";
import { XIcon } from "./XIcon";
export const IconButton = ({
  override,
  icon,
}: {
  override?: React.CSSProperties;
  icon: string;
}) => {
  switch (icon) {
    case "Check":
      return (
        <div className={styles.iconButton} style={override}>
        <CheckIcon
          override={{
            height: "20px",
            width: "20px",
          }}
        />
       </div> 
      );
    case "X":
      return (
        <div className={styles.iconButton1} style={override}>
        <XIcon />
       </div> 
      );
    case "Ellipsis":
      return (
        <div className={styles.iconButton2} style={override}>
        <div className={styles.ellipsisContainer}>
          <div className={styles.ellipse1} />
          <div className={styles.ellipse2} />
          <div className={styles.ellipse3} />
        </div>
       </div> 
      );
    default:
      return null;
  }
};
