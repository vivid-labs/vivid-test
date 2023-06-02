import styles from "./ImagePlaceholder.module.css";
import imagePlaceholderImage5 from "./imagePlaceholderImage5.png";

export const ImagePlaceholder = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholder}>
      <img
        src={imagePlaceholderImage5.src}
        className={styles.imagePlaceholderImage}
      />
    </div>
  );
};
