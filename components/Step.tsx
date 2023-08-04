import styles from "./Step.module.css";
import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
import { CheckMark } from "./CheckMark";
export const Step = ({
  override,
  status,
  icon,
  task,
  time,
}: {
  override?: React.CSSProperties;
  status: string;
  icon: React.ReactNode;
  task: string;
  time: string;
}) => {
  switch (status) {
    case "Todo":
      return (
        <div className={styles.stepTime} style={override}>
        <div className={styles.frame8}>
          <div className={styles.stepTodo} />
          {icon}
        </div>
        <div className={styles.frame7}>
          <p className={styles.ellipse}>{task}</p>
          <p className={styles.stepIcon}>{time}</p>
        </div>
        <img className={styles.doThisTask} src={img_2585_1.src} />
       </div> 
      );
    case "Complete":
      return (
        <div className={styles.frame7Div} style={override}>
        <CheckMark
          override={{
            height: "56px",
            width: "56px",
          }}
        />
        <div className={styles.checkMarkOverride}>
          <p className={styles.stepImage}>{task}</p>
          <p className={styles.stepComplete}>{time}</p>
        </div>
       </div> 
      );
    case "Unsupported":
      return (
        <div className={styles.frame7Div1} style={override}>
        <div className={styles.textText}>
          <div className={styles.doThisTaskText} />
          {icon}
        </div>
        <div className={styles.textText1}>
          <div className={styles.comingSoonText}>
            <p className={styles.stepUnsupported}>{task}</p>
            <div className={styles.ellipseDiv}>
              <p className={styles.frame8Div}>Coming Soon!</p>
            </div>
          </div>
          <p className={styles.frame14}>{time}</p>
        </div>
       </div> 
      );
    case "Up Next":
      return (
        <div className={styles.frame7Div2} style={override}>
        <div className={styles.frame8Div1}>
          <div className={styles.stepUpNext} />
          {icon}
        </div>
        <div className={styles.textText2}>
          <div className={styles.frame14Div}>
            <p className={styles.ellipseDiv1}>{task}</p>
            <div className={styles.upNextText}>
              <p className={styles.doThisTaskText1}>Up Next!</p>
            </div>
          </div>
          <p className={styles.frame38}>{time}</p>
        </div>
       </div> 
      );
    default:
      return null;
  }
};
