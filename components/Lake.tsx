import styles from "./Lake.module.css";
import lake from "./lake.jpg";

export const Lake = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.lake}>
      <img src={lake.src} className={styles.lakeImage} />
    </div>
  );
};
