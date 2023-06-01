import styles from "./Camping.module.css";
import camping from "./camping.png";

export const Camping = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.camping}>
      <img src={camping.src} className={styles.campingImage} />
    </div>
  );
};
