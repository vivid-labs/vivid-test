import styles from "./Delete.module.css";
import delete from "./delete.png";


export const Delete = ({
  override
}: {
  override?: any;
}) => {
  

  return <div style={override} className={styles.delete}><img src={delete.src} className={styles.deleteImage} /></div>;
};