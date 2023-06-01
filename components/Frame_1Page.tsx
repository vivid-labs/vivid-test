import styles from "./Frame_1Page.module.css";
import { Frame_2 } from "./Frame_2";

export const Frame_1Page = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.frame_1Page}>
      <Frame_2 />
      <p className={styles.hi}>Hi</p>
      <Frame_2 style={{}} />
    </div>
  );
};
