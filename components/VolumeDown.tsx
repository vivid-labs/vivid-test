import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";

export const VolumeDown = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.volumeDown}>
      <div>
        <img src={volumeDown.src} className={styles.volumeDownImage} />
      </div>
    </div>
  );
};
