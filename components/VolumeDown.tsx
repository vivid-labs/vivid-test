import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.volumeControl}>
    <div>
      <img src={volumeDown.src} className={styles.volumeControlImage} />
    </div>
   </div> 
  );
};
