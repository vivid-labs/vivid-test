import styles from "./Frame_1.module.css";
import { Component } from "./Component";
import { Pregame } from "./Pregame";
import { PregameComponent } from "./PregameComponent";

export const Frame_1 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.frame_1}>
      <Component />
      <Pregame />
      <PregameComponent />
    </div>
  );
};
