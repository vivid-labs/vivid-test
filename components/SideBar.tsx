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
              styles.objectFitCoverOpacity_1d2e2e0e68f0404c71db06348976ba084f36ad43a
            }
          />
          <OutlinedLogo
            override={{
              height: "51px",
              width: "52px",
            }}
          />
          <img src={ellipse_2.src} className={styles.ellipse_2} />
        </div>
      );
    case "White":
      return (
        <div style={override} className={styles.sideBarComponent}>
          <NoOutlineLogo
            override={{
              height: "44px",
              width: "42px",
            }}
          />
          <img src={ellipse_2.src} className={styles.ellipse_2Image} />
        </div>
      );
    default:
      return null;
  }
};
