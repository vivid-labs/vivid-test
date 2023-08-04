import styles from "./GitHubIcon.module.css";
import imageImage1 from "./imageImage1.png";
export const GitHubIcon = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.githubIconContainer} style={override}>
    <img className={styles.iconImage} src={imageImage1.src} />
   </div> 
  );
};
