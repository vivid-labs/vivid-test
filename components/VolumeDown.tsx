import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.volumeDownContainer}>
    <div>
      <img src={volumeDown.src} className={styles.volumeDownImageContainer} />
    </div>
   </div> 
  );
};
