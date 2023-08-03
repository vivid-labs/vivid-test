import styles from "./FigmaLogo.module.css";
import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div className={styles.figmaLogo} style={override}>
      <img className={styles.figmaLogoWhite_1} src={figmaLogoWhite_1.src} />
    </div>
  );
};
