import styles from "./OutlinedLogo.module.css";
import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.outlinedLogo}>
    <img src={vividLogoV2_2.src} className={styles.vividLogoContainer} />
   </div> 
  );
};
