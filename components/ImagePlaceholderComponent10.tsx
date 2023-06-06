import styles from "./ImagePlaceholderComponent10.module.css";
import imagePlaceholderImage4 from "./imagePlaceholderImage4.png";

export const ImagePlaceholderComponent10 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent10}>
      <img
        src={imagePlaceholderImage4.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
