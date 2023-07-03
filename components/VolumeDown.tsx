import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";

export const VolumeDown = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.volumeDown}>
      <div>
        <img src={volumeDown.src} className={styles.volumeDownImage} />
      </div>
    </div>
  );
};
