import styles from "./ImagePlaceholder.module.css";
import imagePlaceholder_6 from "./imagePlaceholder_6.png";

export const ImagePlaceholder = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholder}>
      <img
        src={imagePlaceholder_6.src}
        className={styles.imagePlaceholderImage}
      />
    </div>
  );
};
