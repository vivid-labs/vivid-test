import styles from "./NavBar.module.css";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_1 from "./ellipse_1.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";
export const NavBar = ({
  override,
  type,
}: {
  override?: any;
  type: string;
}) => {
  switch (type) {
    case "Colored":
      return (
        <div style={override} className={styles.navBar}>
          <img
            src={pictureAiMobileDesktopPng.src}
            className={
              styles.objectFitCoverOpacity_1d2e2e0e68f0404c71db06348976ba084f36ad43a
            }
          />
          <div className={styles.left}>
            <OutlinedLogo />
          </div>
          <img src={ellipse_1.src} className={styles.ellipse_2} />
        </div>
      );
    case "White":
      return (
        <div style={override} className={styles.navBarComponent}>
          <NoOutlineLogo />
          <img src={ellipse_1.src} className={styles.ellipse_1} />
        </div>
      );
    default:
      return null;
  }
};
