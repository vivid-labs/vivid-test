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
        <div style={override} className={styles.step} figma-id="404:195">
          <div className={styles.frame_8} figma-id="404:196">
            <div className={styles.ellipse_3} figma-id="404:197" />
            {icon}
          </div>
          <div className={styles.frame_7} figma-id="404:199">
            <p className={styles.doThisTask} figma-id="404:200">
              {task}
            </p>
            <p className={styles.timeToDoThisTask} figma-id="404:201">
              {time}
            </p>
          </div>
          <img
            src={img_2585_1.src}
            className={styles.img_2585_1}
            figma-id="404:202"
          />
        </div>
      );
    case "Complete":
      return (
        <div
          style={override}
          className={styles.stepComponent}
          figma-id="404:203"
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
          />
          <div className={styles.frame_7Div} figma-id="404:205">
            <p className={styles.doThisTaskText} figma-id="404:206">
              {task}
            </p>
            <p className={styles.timeToDoThisTaskText} figma-id="404:207">
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
          figma-id="404:208"
        >
          <div className={styles.frame_8Div} figma-id="404:209">
            <div className={styles.ellipse_3Div} figma-id="404:210" />
            {icon}
          </div>
          <div className={styles.frame_7Div1} figma-id="404:212">
            <div className={styles.frame_14} figma-id="404:213">
              <p className={styles.doThisTaskText1} figma-id="404:214">
                {task}
              </p>
              <div className={styles.frame_13} figma-id="404:215">
                <p className={styles.comingSoonimportant} figma-id="404:216">
                  Coming Soon!
                </p>
              </div>
            </div>
            <p className={styles.timeToDoThisTaskText1} figma-id="404:217">
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
          figma-id="404:218"
        >
          <div className={styles.frame_8Div1} figma-id="404:219">
            <div className={styles.ellipse_3Div1} figma-id="404:220" />
            {icon}
          </div>
          <div className={styles.frame_7Div2} figma-id="404:222">
            <div className={styles.frame_38} figma-id="404:223">
              <p className={styles.doThisTaskText2} figma-id="404:224">
                {task}
              </p>
              <div className={styles.frame_14Div} figma-id="404:225">
                <p className={styles.upNextimportant} figma-id="404:226">
                  Up Next!
                </p>
              </div>
            </div>
            <p className={styles.timeToDoThisTaskText2} figma-id="404:227">
              {time}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
