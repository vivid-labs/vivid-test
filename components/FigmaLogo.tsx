import styles from "./FigmaLogo.module.css";
import imageImage3 from "./imageImage3.png";
export const FigmaLogo = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.figmaLogoContainer} style={override}>
    <img className={styles.logoImage} src={imageImage3.src} />
   </div> 
  );
};
