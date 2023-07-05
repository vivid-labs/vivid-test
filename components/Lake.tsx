import styles from "./Lake.module.css";
import lake from "./lake.png";
export const Lake = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container}>
    <img src={lake.src} className={styles.lakeImg} />
   </div> 
  );
};
