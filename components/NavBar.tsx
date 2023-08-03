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
        <div className={styles.navBar} style={override}>
        <img className={styles.navBarImage} src={pictureAiMobileDesktopPng.src} />
        <div className={styles.navBarLeft}>
          <OutlinedLogo />
        </div>
        <img className={styles.navBarEllipse} src={ellipse_1.src} />
       </div> 
      );
    case "White":
      return (
        <div className={styles.navBarComponent} style={override}>
        <NoOutlineLogo />
        <img className={styles.navBarEllipse} src={ellipse_1.src} />
       </div> 
      );
    default:
      return null;
  }
};
