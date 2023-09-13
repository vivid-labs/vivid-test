import styles from "./ZoomIcon.module.css";
import zoomLogo from "./zoomLogo.png";
export const ZoomIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.zoomIconComponent} style={override}>
      <img className={styles.zoomLogo} src={zoomLogo.src} />
    </div>
  );
};
