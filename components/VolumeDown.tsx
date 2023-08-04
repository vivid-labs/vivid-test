import styles from "./VolumeDown.module.css";
import volumeDown from "./volumeDown.svg";
export const VolumeDown = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.volumeDownComponentClass} style={override}>
    <div>
      <img className={styles.volumeDownImageClass} src={volumeDown.src} />
    </div>
   </div> 
  );
};
