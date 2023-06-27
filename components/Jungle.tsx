import styles from "./Jungle.module.css";
import jungle from "./jungle.jpg";

export const Jungle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.jungle}>
      <img src={jungle.src} className={styles.jungleImage} />
    </div>
  );
};
