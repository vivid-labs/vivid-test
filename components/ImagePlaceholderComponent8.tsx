import styles from "./ImagePlaceholderComponent8.module.css";
import imagePlaceholderImage from "./imagePlaceholderImage.png";

export const ImagePlaceholderComponent8 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent8}>
      <img
        src={imagePlaceholderImage.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
