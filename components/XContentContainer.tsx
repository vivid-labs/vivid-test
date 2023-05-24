import styles from "./XContentContainer.module.css";
import { TextContent } from "./TextContent";
import { XContentPostImageOneAnysize } from "./XContentPostImageOneAnysize";

export const XContentContainer = () => {
  return (
    <div className={styles.xContentContainer0}>
      <TextContent />
      <XContentPostImageOneAnysize />
      <div className={styles.xContentContainer1}>
        <div className={styles.xContentContainer2}>
          <p className={styles.xContentContainer3}>Источник: Алеся Корнеевец</p>
          <div className={styles.xContentContainer4} />
        </div>
      </div>
      <div className={styles.xContentContainer5} />
    </div>
  );
};
