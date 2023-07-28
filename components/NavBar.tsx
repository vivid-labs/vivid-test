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
        <div style={override} className={styles.navbarMain} figma-id="8:10:220">
        <img
          src={pictureAiMobileDesktopPng.src}
          className={styles.navbarImage}
          figma-id=""
        />
        <div className={styles.navbarLeft} figma-id="8:29:736">
          <OutlinedLogo figma-id="8:27:222" />
        </div>
        <img
          src={ellipse_1.src}
          className={styles.navbarEllipse2}
          figma-id="8:15:173"
        />
       </div> 
      );
    case "White":
      return (
        <div
         style={override}
         className={styles.navbarComponent}
         figma-id="8:10:224"
       >
        <NoOutlineLogo figma-id="8:27:232" />
        <img
          src={ellipse_1.src}
          className={styles.navbarEllipse1}
          figma-id="8:15:166"
        />
       </div> 
      );
    default:
      return null;
  }
};
