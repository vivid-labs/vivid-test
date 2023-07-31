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
  override?: any;
  status: string;
  icon: any;
  task: string;
  time: string;
}) => {
  switch (status) {
    case "Todo":
      return (
        <div style={override} className={styles.step}>
        <div className={styles.frame}>
          <div className={styles.circle} />
          {icon}
        </div>
        <div className={styles.container}>
          <p className={styles.task}>{task}</p>
          <p className={styles.time}>{time}</p>
        </div>
        <img src={img_2585_1.src} className={styles.image} />
       </div> 
      );
    case "Complete":
      return (
        <div style={override} className={styles.stepComponent}>
        <CheckMark
          override={{
            height: "56px",
            width: "56px",
          }}
        />
        <div className={styles.containerDiv}>
          <p className={styles.taskText}>{task}</p>
          <p className={styles.timeText}>{time}</p>
        </div>
       </div> 
      );
    case "Unsupported":
      return (
        <div style={override} className={styles.stepComponent1}>
        <div className={styles.frameDiv}>
          <div className={styles.circleDiv} />
          {icon}
        </div>
        <div className={styles.containerDiv1}>
          <div className={styles.frameText}>
            <p className={styles.taskText1}>{task}</p>
            <div className={styles.frameDiv1}>
              <p className={styles.comingSoon}>Coming Soon!</p>
            </div>
          </div>
          <p className={styles.timeText1}>{time}</p>
        </div>
       </div> 
      );
    case "Up Next":
      return (
        <div style={override} className={styles.stepComponent2}>
        <div className={styles.frameDiv1}>
          <div className={styles.circleDiv1} />
          {icon}
        </div>
        <div className={styles.containerDiv2}>
          <div className={styles.frameText1}>
            <p className={styles.taskText2}>{task}</p>
            <div className={styles.frameDiv2}>
              <p className={styles.upNext}>Up Next!</p>
            </div>
          </div>
          <p className={styles.timeText2}>{time}</p>
        </div>
       </div> 
      );
    default:
      return null;
  }
};
