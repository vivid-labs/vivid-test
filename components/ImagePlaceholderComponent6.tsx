import styles from "./ImagePlaceholderComponent6.module.css";
import imagePlaceholderImage1 from "./imagePlaceholderImage1.png";

export const ImagePlaceholderComponent6 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent6}>
      <img
        src={imagePlaceholderImage1.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
