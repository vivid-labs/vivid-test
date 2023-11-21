import styles from "./Jungle.module.css";
import jungle from "./jungle.png";
export const Jungle = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.jungleComponent} style={override}>
      <img className={styles.jungleImage} src={jungle.src} />
    </div>
  );
};
