import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.volumeDownComponent} style={override}>
    <div>
      <img className={styles.volumeUpImage} src={volumeDown.src} />
    </div>
   </div> 
  );
};
