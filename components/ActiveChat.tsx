import styles from "./ActiveChat.module.css";
import { ProfilePicture } from "./ProfilePicture";
export const ActiveChat = ({
  override,
  name,
  lastChat,
}: {
  override?: any;
  name: string;
  lastChat: string;
}) => {
  return (
    <div style={override} className={styles.activeChat} figma-id="1:9">
      <ProfilePicture />
      <div className={styles.frame_1} figma-id="1:23">
        <p className={styles.name} figma-id="1:16">
          {name}
        </p>
        <p className={styles.lastChat} figma-id="1:13">
          {lastChat}
        </p>
      </div>
    </div>
  );
};
