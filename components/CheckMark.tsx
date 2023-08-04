import styles from "./CheckMark.module.css";
import group from "./group.svg";
export const CheckMark = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.checkMarkContainer} style={override}>
    <img className={styles.checkMarkGroup} src={group.src} />
   </div> 
  );
};
