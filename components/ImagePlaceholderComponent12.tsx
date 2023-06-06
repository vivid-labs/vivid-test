import styles from "./ImagePlaceholderComponent12.module.css";
import imagePlaceholderImage2 from "./imagePlaceholderImage2.png";

export const ImagePlaceholderComponent12 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent12}>
      <img
        src={imagePlaceholderImage2.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
