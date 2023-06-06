import styles from "./ImagePlaceholderComponent21.module.css";
import imagePlaceholderImage5 from "./imagePlaceholderImage5.png";

export const ImagePlaceholderComponent21 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent21}>
      <img
        src={imagePlaceholderImage5.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
