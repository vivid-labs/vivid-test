import styles from "./ImagePlaceholderComponent2.module.css";
import imagePlaceholderImage from "./imagePlaceholderImage.png";
export const ImagePlaceholderComponent2 = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div
      style={override}
      className={styles.imagePlaceholderComponent2}
      figma-id="7:1515:3480"
    >
      <img
        src={imagePlaceholderImage.src}
        className={styles.imagePlaceholder}
        figma-id="7:1503:4780"
      />
    </div>
  );
};
