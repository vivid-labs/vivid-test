import styles from "./Ski.module.css";
import ski from "./ski.png";
export const Ski = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container}>
    <img src={ski.src} className={styles.imageContainer} />
   </div> 
  );
};
