import styles from "./ZoomIcon.module.css";
import zoomLogo from "./zoomLogo.png";
export const ZoomIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.container} style={override}>
    <img className={styles.logo} src={zoomLogo.src} />
   </div> 
  );
};
