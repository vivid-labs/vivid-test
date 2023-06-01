import styles from "./Camera.module.css";
import camera from "./camera.svg";

export const Camera = ({ style }: { style?: any }) => {
  return <img src={camera.src} style={style} className={styles.camera} />;
};
