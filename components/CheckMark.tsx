import styles from "./CheckMark.module.css";
import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.checkMarkContainer}>
    <img src={group.src} className={styles.groupImage} />
   </div> 
  );
};
