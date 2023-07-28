import styles from "./FigmaLogo.module.css";
import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.figmaLogoWhite} figma-id="8:29:482">
    <img
      src={figmaLogoWhite_1.src}
      className={styles.figmaLogo}
      figma-id="8:29:481"
    />
   </div> 
  );
};
