import styles from "./ImagePlaceholderComponent3.module.css";
import imagePlaceholderImage4 from "./imagePlaceholderImage4.png";

export const ImagePlaceholderComponent3 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent3}>
      <img
        src={imagePlaceholderImage4.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
