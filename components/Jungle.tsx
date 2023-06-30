import styles from "./Jungle.module.css";
import jungle from "./jungle.png";

export const Jungle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.jungleContainer}>
    <img src={jungle.src} className={styles.jungleImageContainer} />
   </div> 
  );
};
