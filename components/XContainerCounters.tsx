import styles from "./XContainerCounters.module.css";
import { XIconCounter } from "./XIconCounter";
import { XIconCounterViews } from "./XIconCounterViews";

export const XContainerCounters = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xContainerCounters0}>
      <div className={styles.xContainerCounters1}>
        <div className={styles.xContainerCounters2}>
          <XIconCounter />
          <XIconCounter
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <XIconCounter
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
        </div>
        <XIconCounterViews
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
      </div>
    </div>
  );
};
