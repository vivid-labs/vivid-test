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
        <div className={styles.stepComponent1} style={override}>
          <div className={styles.stepIcon}>
            <p className={styles.text1}>{number}</p>
          </div>
          <p className={styles.stepText1}>{text}</p>
        </div>
      );
    case "To Do":
      return (
        <div className={styles.stepComponent2} style={override}>
          <div className={styles.stepIconDiv}>
            <p className={styles.text1Text}>{number}</p>
          </div>
          <p className={styles.stepText2}>{text}</p>
        </div>
      );
    default:
      return null;
  }
};
