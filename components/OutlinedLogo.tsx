import styles from "./OutlinedLogo.module.css";
import imageImage2 from "./imageImage2.png";
export const OutlinedLogo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.outlinedLogoComponent} style={override}>
      <img className={styles.image} src={imageImage2.src} />
    </div>
  );
};
