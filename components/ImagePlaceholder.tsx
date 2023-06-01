import styles from "./ImagePlaceholder.module.css";
import imagePlaceholder_7 from "./imagePlaceholder_7.png";

export const ImagePlaceholder = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholder}>
      <img
        src={imagePlaceholder_7.src}
        className={styles.imagePlaceholderImage}
      />
    </div>
  );
};
