import styles from "./XCellConversations.module.css";
import { Chat_16 } from "./Chat_16";

export const XCellConversations = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xCellConversations0}>
      <div className={styles.xCellConversations1}>
        <Chat_16 />
      </div>
      <div className={styles.xCellConversations2}>
        <p className={styles.xCellConversations3}>FAQ</p>
        <div className={styles.xCellConversations4}>
          <p className={styles.xCellConversations5}>14 июн в 19</p>
          <p className={styles.xCellConversations6}>1 комментарий</p>
        </div>
      </div>
    </div>
  );
};
