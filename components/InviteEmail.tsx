import styles from "./InviteEmail.module.css";
import group_1 from "./group_1.svg";

export const InviteEmail = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.inviteEmail}>
      <p className={styles.jorgeatVividLol}>jorge@vivid.lol</p>
      <div className={styles.frame_11}>
        <img src={group_1.src} className={styles.group_1} />
      </div>
    </div>
  );
};
