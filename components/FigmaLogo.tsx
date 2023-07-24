import styles from "./FigmaLogo.module.css";
import figmaImage from "./figmaImage.png";
export const FigmaLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.figmaLogo} figma-id="7:38:2252">
      <img
        src={figmaImage.src}
        className={styles.figmaImage}
        figma-id="7:38:2248"
      />
    </div>
  );
};
