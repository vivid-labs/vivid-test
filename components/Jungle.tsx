import styles from "./Jungle.module.css";
import jungle from "./jungle.jpg";

export const Jungle = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.jungle}>
      <img src={jungle.src} className={styles.jungleImage} />
    </div>
  );
};
