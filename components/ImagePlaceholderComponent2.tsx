import styles from "./ImagePlaceholderComponent2.module.css";
import imagePlaceholderImage5 from "./imagePlaceholderImage5.png";

export const ImagePlaceholderComponent2 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent2}>
      <img
        src={imagePlaceholderImage5.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
