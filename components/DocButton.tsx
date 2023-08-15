import styles from "./DocButton.module.css";
import docImage from "./docImage.png";
export const DocButton = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.docButtonComponent} style={override}>
      <img className={styles.docImage} src={docImage.src} />
    </div>
  );
};
