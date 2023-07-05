import styles from "./Program.module.css";
import group_10 from "./group_10.svg";

export const Program = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.programContainer}>
    <div>
      <img src={group_10.src} className={styles.programImage} />
    </div>
   </div> 
  );
};
