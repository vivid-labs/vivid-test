import styles from "./ImagePlaceholderComponent7.module.css";
import imagePlaceholderImage5 from "./imagePlaceholderImage5.png";

export const ImagePlaceholderComponent7 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent7}>
      <img
        src={imagePlaceholderImage5.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
