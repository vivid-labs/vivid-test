import styles from "./ImagePlaceholderComponent1.module.css";
import imagePlaceholder from "./imagePlaceholder.png";
export const ImagePlaceholderComponent1 = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div
      style={override}
      className={styles.imagePlaceholderComponent1}
      figma-id="7:1515:3474"
    >
      <img
        src={imagePlaceholder.src}
        className={styles.imagePlaceholder}
        figma-id="7:1503:4776"
      />
    </div>
  );
};
