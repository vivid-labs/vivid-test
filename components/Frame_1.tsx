import styles from "./Frame_1.module.css";
import { Vector_1 } from "./Vector_1";
import { Ellipse_3 } from "./Ellipse_3";

export const Frame_1 = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.frame_10}>
      <Vector_1 />
      <div className={styles.frame_11} />
      <Ellipse_3 style={{}} />
    </div>
  );
};
