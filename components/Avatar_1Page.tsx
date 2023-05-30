import styles from "./Avatar_1Page.module.css";
import vivid_9acf2677568b38bc98ba36dbd43c768c40de6716 from "./9acf2677568b38bc98ba36dbd43c768c40de6716.png";

export const Avatar_1Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.avatar_1Page}>
      <img
        src={vivid_9acf2677568b38bc98ba36dbd43c768c40de6716.src}
        className={styles.avatarPlaceholder}
      />
    </div>
  );
};
