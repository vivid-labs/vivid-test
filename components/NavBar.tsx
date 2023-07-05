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
            styles.imageContainer
          }
        />
        <div className={styles.leftContainer}>
          <OutlinedLogo />
        </div>
        <img src={ellipse_1.src} className={styles.ellipseImage} />
       </div>)
      );
    case "White":
      return (
       (<div style={override} className={styles.navBarComponent}>
        <NoOutlineLogo />
        <img src={ellipse_1.src} className={styles.ellipseImageWhite} />
       </div> 
      );
    default:
      return null;
  }
};
