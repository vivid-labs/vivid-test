import styles from "./VideoCamera.module.css";
import videoCamera from "./videoCamera.svg";

export const VideoCamera = ({ style }: { style?: any }) => {
  return (
    <img src={videoCamera.src} style={style} className={styles.videoCamera} />
  );
};
