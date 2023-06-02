import styles from "./Frame_1Page.module.css";
import { Pregame } from "./Pregame";

export const Frame_1Page = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.frame_1Page}>
      <Pregame />
      <Pregame />
    </div>
  );
};
