import styles from "./GitHubIcon.module.css";
import imageImage1 from "./imageImage1.png";
export const GitHubIcon = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.gitHubIconComponent} style={override}>
      <img className={styles.image} src={imageImage1.src} />
    </div>
  );
};
