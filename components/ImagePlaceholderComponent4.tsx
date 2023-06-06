import styles from "./ImagePlaceholderComponent4.module.css";
import imagePlaceholderImage3 from "./imagePlaceholderImage3.png";

export const ImagePlaceholderComponent4 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent4}>
      <img
        src={imagePlaceholderImage3.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
