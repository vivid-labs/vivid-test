import styles from "./NavBar.module.css";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";

export const NavBar = ({ style, type }: { style?: any; type: string }) => {
  switch (type) {
    case "Colored":
      return (
        <div style={style} className={styles.navBar}>
          <img
            src={pictureAiMobileDesktopPng.src}
            className={
              styles.objectFitCoverOpacity_1d2e2e0e68f0404c71db06348976ba084f36ad43a
            }
          />
          <p className={styles.insertNavBarHere}>INSERT NAV BAR HERE</p>
        </div>
      );
    case "White":
      return (
        <div style={style} className={styles.navBarComponent}>
          <p className={styles.insertNavBarHereText}>INSERT NAV BAR HERE</p>
        </div>
      );
    default:
      return null;
  }
};
