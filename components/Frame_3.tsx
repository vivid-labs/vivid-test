import styles from "./Frame_3.module.css";
import { Button } from "./Button";

export const Frame_3 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.frame_3}>
      <Button
        size="Small"
        hover="False"
        style={{
          height: "29px",
          width: "fit-content",
        }}
      />
      <Button
        size="Small"
        hover="True"
        style={{
          height: "29px",
          width: "fit-content",
        }}
      />
    </div>
  );
};
