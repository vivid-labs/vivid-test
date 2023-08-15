import styles from "./Doc.module.css";
import linkIcon from "./linkIcon.png";
export const Doc = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div className={styles.docComponent} style={override}>
    <p className={styles.salesReport}>{text}</p>
    <div className={styles.linkSection}>
      <img className={styles.iconLink} src={linkIcon.src} />
    </div>
   </div> 
  );
};
