import styles from "./Berlin.module.css";
import berlin from "./berlin.png";
export const Berlin = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.berlin}>
      <img src={berlin.src} className={styles.berlinImage} />
    </div>
  );
};
