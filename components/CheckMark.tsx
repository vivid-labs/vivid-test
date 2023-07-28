import styles from "./CheckMark.module.css";
import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.checkmark} figma-id="8:29:532">
    <img src={group.src} className={styles.group} figma-id="8:12:97" />
   </div> 
  );
};
