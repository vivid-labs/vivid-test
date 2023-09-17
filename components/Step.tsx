import styles from "./Step.module.css";
import { CheckIcon } from "./CheckIcon";
export const Step = ({
  override,
  status,
  text,
  number,
}: {
  override?: React.CSSProperties;
  status: string;
  text: string;
  number: string;
}) => {
  switch (status) {
    case "Done":
      return (
        <div className={styles.stepComponent} style={override}>
          <CheckIcon />
          <p className={styles.stepText}>{text}</p>
        </div>
      );
    case "Active":
      return (
        <div className={styles.stepText2} style={override}>
        <div className={styles.stepComponent1}>
          <p className={styles.stepText1}>{number}</p>
        </div>
        <p className={styles.stepIconDiv}>{text}</p>
       </div> 
      );
    case "To Do":
      return (
        <div className={styles.stepIcon} style={override}>
        <div className={styles.stepComponent2}>
          <p className={styles.text1}>{number}</p>
        </div>
        <p className={styles.text1Text}>{text}</p>
       </div> 
      );
    default:
      return null;
  }
};
