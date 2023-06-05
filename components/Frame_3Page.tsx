import styles from "./Frame_3Page.module.css";
import { Button } from "./Button";

export const Frame_3Page = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.frame_3Page}>
      <Button size="Large" hover="True" />
    </div>
  );
};
