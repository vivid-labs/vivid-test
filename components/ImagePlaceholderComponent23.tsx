import styles from "./ImagePlaceholderComponent23.module.css";
import imagePlaceholder from "./imagePlaceholder.png";

export const ImagePlaceholderComponent23 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent23}>
      <img src={imagePlaceholder.src} className={styles.imagePlaceholder} />
    </div>
  );
};
