import styles from "./Delete.module.css";
import image from "./image.png";
export const Delete = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.delete}>
    <img src={image.src} className={styles.deleteImage} />
   </div> 
  );
};
