import styles from "./XContainerCounters.module.css";
import { XIconCounter } from "./XIconCounter";
import { XIconCounterViews } from "./XIconCounterViews";

export const XContainerCounters = () => {
  return (
    <div className={styles.xContainerCounters0}>
      <div className={styles.xContainerCounters1}>
        <div className={styles.xContainerCounters2}>
          <XIconCounter />
          <XIconCounter />
          <XIconCounter />
        </div>
        <XIconCounterViews />
      </div>
    </div>
  );
};
