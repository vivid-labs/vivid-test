import styles from "./StatusUpNext.module.css";
import { FigmaLogo } from "./FigmaLogo";
export const StatusUpNext = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.statusUpNext} figma-id="233:1790">
      <div className={styles.frame_8} figma-id="233:1791">
        <div className={styles.ellipse_3} figma-id="233:1792" />
        <FigmaLogo
          override={{
            height: "35px",
            width: "35px",
          }}
        />
      </div>
      <div className={styles.frame_7} figma-id="233:1794">
        <div className={styles.frame_38} figma-id="233:1846">
          <p className={styles.doThisTask} figma-id="233:1795">
            Do this task
          </p>
          <div className={styles.frame_14} figma-id="233:1836">
            <p className={styles.upNextimportant} figma-id="233:1837">
              Up Next!
            </p>
          </div>
        </div>
        <p className={styles.timeToDoThisTask} figma-id="233:1796">
          Time to do this task
        </p>
      </div>
    </div>
  );
};
