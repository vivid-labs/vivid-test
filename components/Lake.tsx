import styles from "./Lake.module.css";
import lake from "./lake.png";
export const Lake = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.lake}>
      <img src={lake.src} className={styles.lakeImage} />
    </div>
  );
};
