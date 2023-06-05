import styles from "./Frame_1.module.css";
import { Pregame } from "./Pregame";
import { PregameComponent } from "./PregameComponent";
import { PregameComponent1 } from "./PregameComponent1";

export const Frame_1 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.frame_1}>
      <Pregame />
      <PregameComponent />
      <PregameComponent1 />
    </div>
  );
};
