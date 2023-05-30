import styles from "./XActionsPageMenuButton.module.css";
import { MessageCircle_24 } from "./MessageCircle_24";

export const XActionsPageMenuButton = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xActionsPageMenuButton0}>
      <MessageCircle_24
        style={{
          height: "24px",
          width: "24px",
        }}
      />
      <div className={styles.xActionsPageMenuButton1}>
        <p className={styles.xActionsPageMenuButton2}>Написать сообщение</p>
        <p className={styles.xActionsPageMenuButton3}>Время ответа — 5 минут</p>
      </div>
    </div>
  );
};
