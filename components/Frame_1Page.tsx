import styles from "./Frame_1Page.module.css";
import { Frame_2 } from "./Frame_2";

export const Frame_1Page = () => {
  return (
    <div className={styles.frame_1Page0}>
      <Frame_2 />
      <p className={styles.frame_1Page1}>Hi</p>
      <Frame_2 />
    </div>
  );
};
