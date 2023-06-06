import styles from "./ImagePlaceholderComponent20.module.css";
import imagePlaceholderImage1 from "./imagePlaceholderImage1.png";

export const ImagePlaceholderComponent20 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent20}>
      <img
        src={imagePlaceholderImage1.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
