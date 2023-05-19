import styles from "./Frame_10Page.module.css";
import { Card } from "./Card";
import { Frame_3 } from "./Frame_3";

export const Frame_10Page = () => {
  return (
    <div className={styles.frame_10Page0}>
      <Card />
      <Card />
      <Frame_3 />
    </div>
  );
};
