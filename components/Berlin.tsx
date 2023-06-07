import styles from "./Berlin.module.css";
import berlin from "./berlin.jpg";

export const Berlin = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.berlin}>
      <img src={berlin.src} className={styles.berlinImage} />
    </div>
  );
};
