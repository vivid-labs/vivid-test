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
        <div style={override} className={styles.step} figma-id="8:27:172">
          <div className={styles.frame_8} figma-id="8:29:374">
            <div className={styles.ellipse_3} figma-id="8:27:167" />
            {icon}
          </div>
          <div className={styles.frame_7} figma-id="8:27:171">
            <p className={styles.doThisTask} figma-id="8:27:169">
              {task}
            </p>
            <p className={styles.timeToDoThisTask} figma-id="8:27:170">
              {time}
            </p>
          </div>
          <img
            src={img_2585_1.src}
            className={styles.img_2585_1}
            figma-id="8:29:685"
          />
        </div>
      );
    case "Complete":
      return (
        <div
          style={override}
          className={styles.stepComponent}
          figma-id="8:29:524"
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
            figma-id="8:29:538"
          />
          <div className={styles.frame_7Div} figma-id="8:29:528">
            <p className={styles.doThisTaskText} figma-id="8:29:529">
              {task}
            </p>
            <p className={styles.timeToDoThisTaskText} figma-id="8:29:530">
              {time}
            </p>
          </div>
        </div>
      );
    case "Unsupported":
      return (
        <div
          style={override}
          className={styles.stepComponent1}
          figma-id="8:223:165"
        >
          <div className={styles.frame_8Div} figma-id="8:223:166">
            <div className={styles.ellipse_3Div} figma-id="8:223:167" />
            {icon}
          </div>
          <div className={styles.frame_7Div1} figma-id="8:223:169">
            <div className={styles.frame_14} figma-id="8:223:175">
              <p className={styles.doThisTaskText1} figma-id="8:223:170">
                {task}
              </p>
              <div className={styles.frame_13} figma-id="8:223:174">
                <p className={styles.comingSoonimportant} figma-id="8:223:176">
                  Coming Soon!
                </p>
              </div>
            </div>
            <p className={styles.timeToDoThisTaskText1} figma-id="8:223:171">
              {time}
            </p>
          </div>
        </div>
      );
    case "Up Next":
      return (
        <div
          style={override}
          className={styles.stepComponent2}
          figma-id="8:233:1790"
        >
          <div className={styles.frame_8Div1} figma-id="8:233:1791">
            <div className={styles.ellipse_3Div1} figma-id="8:233:1792" />
            {icon}
          </div>
          <div className={styles.frame_7Div2} figma-id="8:233:1794">
            <div className={styles.frame_38} figma-id="8:233:1846">
              <p className={styles.doThisTaskText2} figma-id="8:233:1795">
                {task}
              </p>
              <div className={styles.frame_14Div} figma-id="8:233:1836">
                <p className={styles.upNextimportant} figma-id="8:233:1837">
                  Up Next!
                </p>
              </div>
            </div>
            <p className={styles.timeToDoThisTaskText2} figma-id="8:233:1796">
              {time}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
