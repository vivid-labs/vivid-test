import styles from "./XIconCounter.module.css";
import { Likes_24 } from "./Likes_24";

export const XIconCounter = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xIconCounter0}>
      <Likes_24
        style={{
          height: "24px",
          width: "24px",
          opacity: "0.7",
        }}
      />
      <p className={styles.xIconCounter1}>21</p>
    </div>
  );
};
