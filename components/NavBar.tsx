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
        <div className={styles.navbar} style={override}>
        <img className={styles.navbarImage} src={pictureAiMobileDesktopPng.src} />
        <div className={styles.navbarLeft}>
          <OutlinedLogo />
        </div>
        <img className={styles.navbarEllipse} src={ellipse_1.src} />
       </div> 
      );
    case "White":
      return (
        <div className={styles.navbarEllipseComponent} style={override}>
        <NoOutlineLogo />
        <img className={styles.navbarComponent} src={ellipse_1.src} />
       </div> 
      );
    default:
      return null;
  }
};
