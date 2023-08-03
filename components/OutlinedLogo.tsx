import styles from "./OutlinedLogo.module.css";
import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div className={styles.outlinedLogo} style={override}>
    <img className={styles.vividLogo} src={vividLogoV2_2.src} />
   </div> 
  );
};
