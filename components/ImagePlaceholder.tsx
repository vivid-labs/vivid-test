import styles from "./ImagePlaceholder.module.css";
import imagePlaceholderImage4 from "./imagePlaceholderImage4.png";

export const ImagePlaceholder = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholder}>
      <img
        src={imagePlaceholderImage4.src}
        className={styles.imagePlaceholderImage}
      />
    </div>
  );
};
