import styles from "./Lake.module.css";
import lake from "./lake.png";
export const Lake = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.lakeComponent} style={override}>
      <img className={styles.lakeImage} src={lake.src} />
    </div>
  );
};
