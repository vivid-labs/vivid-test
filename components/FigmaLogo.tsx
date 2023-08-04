import styles from "./FigmaLogo.module.css";
import imageImage3 from "./imageImage3.png";
export const FigmaLogo = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.figmaLogoComponent} style={override}>
      <img className={styles.image} src={imageImage3.src} />
    </div>
  );
};
