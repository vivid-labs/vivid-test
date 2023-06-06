import styles from "./ImagePlaceholderComponent22.module.css";
import imagePlaceholderImage from "./imagePlaceholderImage.png";

export const ImagePlaceholderComponent22 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent22}>
      <img
        src={imagePlaceholderImage.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
