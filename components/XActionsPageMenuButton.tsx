import styles from "./XActionsPageMenuButton.module.css";
import { MessageCircle_24 } from "./MessageCircle_24";

export const XActionsPageMenuButton = () => {
  return (
    <div className={styles.xActionsPageMenuButton0}>
      <MessageCircle_24 />
      <div className={styles.xActionsPageMenuButton1}>
        <p className={styles.xActionsPageMenuButton2}>Написать сообщение</p>
        <p className={styles.xActionsPageMenuButton3}>Время ответа — 5 минут</p>
      </div>
    </div>
  );
};
