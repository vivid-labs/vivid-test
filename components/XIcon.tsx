import styles from "./XIcon.module.css";
import x from "./x.svg";
export const XIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.iconComponent} style={override}>
    <img className={styles.icon} src={x.src} />
   </div> 
  );
};
