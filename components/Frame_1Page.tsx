import styles from "./Frame_1Page.module.css";
import { Vector_1 } from "./Vector_1";
import { Ellipse_3 } from "./Ellipse_3";

export const Frame_1Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.frame_1Page0}>
      <Vector_1 />
      <div className={styles.frame_1Page1} />
      <Ellipse_3 style={{}} />
    </div>
  );
};
