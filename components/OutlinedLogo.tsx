import styles from "./OutlinedLogo.module.css";
import vividLogoV2_2 from "./vividLogoV2_2.png";
export const OutlinedLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.logoImage} figma-id="8:27:195">
    <img
      src={vividLogoV2_2.src}
      className={styles.logoWrapper}
      figma-id="8:27:178"
    />
   </div> 
  );
};
