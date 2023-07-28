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
        <div style={override} className={styles.todoStepTime} figma-id="8:27:172">
        <div className={styles.todoStepFrame} figma-id="8:29:374">
          <div className={styles.todoStep} figma-id="8:27:167" />
          {icon}
        </div>
        <div className={styles.todoStepTaskFrame} figma-id="8:27:171">
          <p className={styles.todoStepEllipse} figma-id="8:27:169">
            {task}
          </p>
          <p className={styles.todoStepIcon} figma-id="8:27:170">
            {time}
          </p>
        </div>
        <img
          src={img_2585_1.src}
          className={styles.todoStepTask}
          figma-id="8:29:685"
        />
       </div> 
      );
    case "Complete":
      return (
        <div
         style={override}
         className={styles.completeStepTaskFrame}
         figma-id="8:29:524"
       >
        <CheckMark
          override={{
            height: "56px",
            width: "56px",
            position: "relative",
          }}
          figma-id="8:29:538"
        />
        <div className={styles.completeStepMark} figma-id="8:29:528">
          <p className={styles.todoStepImage} figma-id="8:29:529">
            {task}
          </p>
          <p className={styles.completeStep} figma-id="8:29:530">
            {time}
          </p>
        </div>
       </div> 
      );
    case "Unsupported":
      return (
        <div
         style={override}
         className={styles.unsupportedStepComingSoon}
         figma-id="8:223:165"
       >
        <div className={styles.completeStepTime} figma-id="8:223:166">
          <div className={styles.completeStepTask} figma-id="8:223:167" />
          {icon}
        </div>
        <div className={styles.unsupportedStepTask} figma-id="8:223:169">
          <div className={styles.unsupportedStepIcon} figma-id="8:223:175">
            <p className={styles.unsupportedStep} figma-id="8:223:170">
              {task}
            </p>
            <div className={styles.unsupportedStepEllipse} figma-id="8:223:174">
              <p className={styles.unsupportedStepFrame} figma-id="8:223:176">
                Coming Soon!
              </p>
            </div>
          </div>
          <p className={styles.unsupportedStepTaskFrame} figma-id="8:223:171">
            {time}
          </p>
        </div>
       </div> 
      );
    case "Up Next":
      return (
        <div
         style={override}
         className={styles.upNextStepTime}
         figma-id="8:233:1790"
       >
        <div className={styles.upNextStep} figma-id="8:233:1791">
          <div className={styles.unsupportedStepTime} figma-id="8:233:1792" />
          {icon}
        </div>
        <div className={styles.upNextStepComingUp} figma-id="8:233:1794">
          <div className={styles.upNextStepTaskFrame} figma-id="8:233:1846">
            <p className={styles.upNextStepFrame} figma-id="8:233:1795">
              {task}
            </p>
            <div className={styles.upNextStepIcon} figma-id="8:233:1836">
              <p className={styles.upNextStepEllipse} figma-id="8:233:1837">
                Up Next!
              </p>
            </div>
          </div>
          <p className={styles.upNextStepTask} figma-id="8:233:1796">
            {time}
          </p>
        </div>
       </div> 
      );
    default:
      return null;
  }
};
