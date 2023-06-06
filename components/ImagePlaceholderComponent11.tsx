import styles from "./ImagePlaceholderComponent11.module.css";
import imagePlaceholderImage3 from "./imagePlaceholderImage3.png";

export const ImagePlaceholderComponent11 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent11}>
      <img
        src={imagePlaceholderImage3.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
