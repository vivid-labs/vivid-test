import styles from "./ImagePlaceholderComponent.module.css";
import imagePlaceholderImage5 from "./imagePlaceholderImage5.png";

export const ImagePlaceholderComponent = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent}>
      <img
        src={imagePlaceholderImage5.src}
        className={styles.imagePlaceholder}
      />
    </div>
  );
};
