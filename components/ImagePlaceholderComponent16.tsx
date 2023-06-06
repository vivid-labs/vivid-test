import styles from "./ImagePlaceholderComponent16.module.css";
import imagePlaceholder from "./imagePlaceholder.png";

export const ImagePlaceholderComponent16 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent16}>
      <img src={imagePlaceholder.src} className={styles.imagePlaceholder} />
    </div>
  );
};
