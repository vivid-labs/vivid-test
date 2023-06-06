import styles from "./ImagePlaceholderComponent1.module.css";
import imagePlaceholderImage4 from "./imagePlaceholderImage4.png";

export const ImagePlaceholderComponent1 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent1}>
      <img
        src={imagePlaceholderImage4.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
