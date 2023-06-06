import styles from "./ImagePlaceholderComponent5.module.css";
import imagePlaceholderImage2 from "./imagePlaceholderImage2.png";

export const ImagePlaceholderComponent5 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent5}>
      <img
        src={imagePlaceholderImage2.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
