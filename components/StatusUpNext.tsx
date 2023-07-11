import styles from "./StatusUpNext.module.css";
import { FigmaLogo } from "./FigmaLogo";
export const StatusUpNext = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.statusUpNext} figma-id="233:1790">
    <div className={styles.statusUpNextFrame} figma-id="233:1791">
      <div className={styles.statusUpNextEllipse} figma-id="233:1792" />
      <FigmaLogo
        override={{
          height: "35px",
          width: "35px",
        }}
      />
    </div>
    <div className={styles.statusUpNextFrame_7} figma-id="233:1794">
      <div className={styles.statusUpNextFrame_38} figma-id="233:1846">
        <p className={styles.statusUpNextDoTask} figma-id="233:1795">
          Do this task
        </p>
        <div className={styles.statusUpNextFrame_14} figma-id="233:1836">
          <p className={styles.statusUpNextUpNextImportant} figma-id="233:1837">
            Up Next!
          </p>
        </div>
      </div>
      <p className={styles.statusUpNextTimeTask} figma-id="233:1796">
        Time to do this task
      </p>
    </div>
   </div> 
  );
};
