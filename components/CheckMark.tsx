import styles from "./CheckMark.module.css";
import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.checkmarkContainer} figma-id="29:532">
    <img src={group.src} className={styles.checkmarkImg} figma-id="12:97" />
   </div> 
  );
};
