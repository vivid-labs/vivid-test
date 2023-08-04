import styles from "./OutlinedLogo.module.css";
import imageImage2 from "./imageImage2.png";
export const OutlinedLogo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.outlinedLogoContainer} style={override}>
    <img className={styles.logoImage} src={imageImage2.src} />
   </div> 
  );
};
