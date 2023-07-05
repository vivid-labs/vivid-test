import styles from "./SideBar.module.css";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_2 from "./ellipse_2.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";
export const SideBar = ({
  override,
  style,
}: {
  override?: any;
  style: string;
}) => {
  switch (style) {
    case "Colored":
      return (
        <div style={override} className={styles.sideBar}>
        <img
          src={pictureAiMobileDesktopPng.src}
          className={
            styles.coverOpacityImage
          }
        />
        <OutlinedLogo
          override={{
            height: "51px",
            width: "52px",
          }}
        />
        <img src={ellipse_2.src} className={styles.ellipseImage} />
       </div>)
      );
    case "White":
      return (
       (<div style={override} className={styles.sideBarComponent}>
        <NoOutlineLogo
          override={{
            height: "44px",
            width: "42px",
          }}
        />
        <img src={ellipse_2.src} className={styles.ellipseImageComponent} />
       </div> 
      );
    default:
      return null;
  }
};
