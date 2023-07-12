import styles from "./FigmaLogo.module.css";
import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.logoContainer} figma-id="29:482">
    <img
      src={figmaLogoWhite_1.src}
      className={styles.logoImage}
      figma-id="29:481"
    />
   </div> 
  );
};
