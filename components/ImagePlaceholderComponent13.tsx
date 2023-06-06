import styles from "./ImagePlaceholderComponent13.module.css";
import imagePlaceholderImage1 from "./imagePlaceholderImage1.png";

export const ImagePlaceholderComponent13 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent13}>
      <img
        src={imagePlaceholderImage1.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
