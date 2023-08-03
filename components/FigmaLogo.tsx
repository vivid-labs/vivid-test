import styles from "./FigmaLogo.module.css";
import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div className={styles.figmaLogoContainer} style={override}>
    <img className={styles.figmaLogoImage} src={figmaLogoWhite_1.src} />
   </div> 
  );
};
