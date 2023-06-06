import styles from "./ImagePlaceholderComponent9.module.css";
import imagePlaceholder from "./imagePlaceholder.png";

export const ImagePlaceholderComponent9 = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.imagePlaceholderComponent9}>
      <img src={imagePlaceholder.src} className={styles.imagePlaceholder} />
    </div>
  );
};
