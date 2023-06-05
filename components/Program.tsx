import styles from "./Program.module.css";
import group_10 from "./group_10.svg";

export const Program = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.program}>
      <div>
        <img src={group_10.src} className={styles.group_10} />
      </div>
    </div>
  );
};
