import styles from "./Berlin.module.css";
import berlin from "./berlin.png";
export const Berlin = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.berlinComponent} style={override}>
      <img className={styles.berlinImage} src={berlin.src} />
    </div>
  );
};
