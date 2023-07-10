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
          <div className={styles.frame_8}>
            <div className={styles.ellipse_3} />
            {icon}
          </div>
          <div className={styles.frame_7}>
            <p className={styles.doThisTask}>{task}</p>
            <p className={styles.timeToDoThisTask}>{time}</p>
          </div>
          <img src={img_2585_1.src} className={styles.img_2585_1} />
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
          <div className={styles.frame_7Div}>
            <p className={styles.doThisTaskText}>{task}</p>
            <p className={styles.timeToDoThisTaskText}>{time}</p>
          </div>
        </div>
      );
    case "Unsupported":
      return (
        <div style={override} className={styles.stepComponent1}>
          <div className={styles.frame_8Div}>
            <div className={styles.ellipse_3Div} />
            {icon}
          </div>
          <div className={styles.frame_7Div1}>
            <div className={styles.frame_14}>
              <p className={styles.doThisTaskText1}>{task}</p>
              <div className={styles.frame_13}>
                <p className={styles.comingSoonimportant}>Coming Soon!</p>
              </div>
            </div>
            <p className={styles.timeToDoThisTaskText1}>{time}</p>
          </div>
        </div>
      );
    case "Up Next":
      return (
        <div style={override} className={styles.stepComponent2}>
          <div className={styles.frame_8Div1}>
            <div className={styles.ellipse_3Div1} />
            {icon}
          </div>
          <div className={styles.frame_7Div2}>
            <div className={styles.frame_38}>
              <p className={styles.doThisTaskText2}>{task}</p>
              <div className={styles.frame_14Div}>
                <p className={styles.upNextimportant}>Up Next!</p>
              </div>
            </div>
            <p className={styles.timeToDoThisTaskText2}>{time}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
