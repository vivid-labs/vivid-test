import styles from "./Monkey.module.css";
import imagePlaceholder_5 from "./imagePlaceholder_5.png";

export const Monkey = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.monkey}>
      <img src={imagePlaceholder_5.src} className={styles.imagePlaceholder} />
    </div>
  );
};
