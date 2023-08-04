import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.volumeDownContainer} style={override}>
    <div>
      <img className={styles.volumeDownImage} src={volumeDown.src} />
    </div>
   </div> 
  );
};
