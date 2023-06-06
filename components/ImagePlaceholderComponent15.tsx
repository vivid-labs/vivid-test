import styles from "./ImagePlaceholderComponent15.module.css";
import imagePlaceholderImage from "./imagePlaceholderImage.png";

export const ImagePlaceholderComponent15 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent15}>
      <img
        src={imagePlaceholderImage.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
