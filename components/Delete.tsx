import styles from "./Delete.module.css";
import image from "./image.png";
export const Delete = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.delete} figma-id="3:31:2967">
      <img src={image.src} className={styles.image} figma-id="3:31:2966" />
    </div>
  );
};
