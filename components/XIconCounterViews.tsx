import styles from "./XIconCounterViews.module.css";
import { Views_16 } from "./Views_16";

export const XIconCounterViews = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xIconCounterViews0}>
      <Views_16
        style={{
          height: "10px",
          width: "14px",
          opacity: "0.5",
        }}
      />
      <p className={styles.xIconCounterViews1}>985</p>
    </div>
  );
};
