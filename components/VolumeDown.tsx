import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.volumeDownWrapper}>
    <div>
      <img src={volumeDown.src} className={styles.volumeDownImageWrapper} />
    </div>
   </div> 
  );
};
