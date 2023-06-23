import styles from "./Right.module.css";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import figmaScreen_1 from "./figmaScreen_1.png";
import vsCodeScreen_1 from "./vsCodeScreen_1.png";

export const Right = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.right}>
      <div className={styles.pictureAiMobileDesktopPng}>
        <img
          src={pictureAiMobileDesktopPng.src}
          className={styles.pictureAiMobileDesktopPngImage}
        />
      </div>
      <img src={figmaScreen_1.src} className={styles.figmaScreen_1} />
      <img src={vsCodeScreen_1.src} className={styles.vsCodeScreen_1} />
    </div>
  );
};
