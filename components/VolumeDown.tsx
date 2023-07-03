import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";

export const VolumeDown = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.volumeContainer}>
    <div>
      <img src={volumeDown.src} className={styles.volumeImage} />
    </div>
   </div> 
  );
};
