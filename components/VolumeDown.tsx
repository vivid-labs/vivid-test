import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.volumeDownComponent} style={override}>
    <div className={styles.volumeDownIcon}>
      <img className={styles.volumeDownImage} src={volumeDown.src} />
    </div>
   </div> 
  );
};
