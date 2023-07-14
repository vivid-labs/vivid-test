import styles from "./NewConversation.module.css";
import group_1 from "./group_1.svg";
export const NewConversation = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.newConversation} figma-id="19:87">
      <div className={styles.frame_1} figma-id="19:79">
        <p className={styles.startANewConversationimportant} figma-id="19:80">
          Start a new conversation!
        </p>
      </div>
      <div className={styles.frame_2} figma-id="19:83">
        <img src={group_1.src} className={styles.group_1} figma-id="19:86" />
      </div>
    </div>
  );
};
