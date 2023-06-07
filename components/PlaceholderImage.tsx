import styles from "./PlaceholderImage.module.css";
import image from "./image.png";

export const PlaceholderImage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.placeholderImage}>
      <img src={image.src} className={styles.image} />
    </div>
  );
};
