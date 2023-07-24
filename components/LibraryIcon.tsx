import styles from "./LibraryIcon.module.css";
import libraryIcon from "./libraryIcon.svg";
export const LibraryIcon = ({ override }: { override?: any }) => {
  return (
    <img
      src={libraryIcon.src}
      style={override}
      className={styles.libraryIcon}
      figma-id="7:37:2352"
    />
  );
};
