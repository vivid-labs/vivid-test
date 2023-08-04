import styles from "./NavBar.module.css";
import imageImage from "./imageImage.jpg";
import { OutlinedLogo } from "./OutlinedLogo";
import ellipse_1 from "./ellipse_1.jpg";
import { NoOutlineLogo } from "./NoOutlineLogo";
export const NavBar = ({
  override,
  type,
}: {
  override?: React.CSSProperties;
  type: string;
}) => {
  switch (type) {
    case "Colored":
      return (
        <div className={styles.navBarComponent} style={override}>
        <img className={styles.navBarImage} src={imageImage.src} />
        <div className={styles.navBarLeft}>
          <OutlinedLogo />
        </div>
        <img className={styles.navBarEllipse2} src={ellipse_1.src} />
       </div> 
      );
    case "White":
      return (
        <div className={styles.navBarComponent1} style={override}>
        <NoOutlineLogo />
        <img className={styles.navBarEllipse1} src={ellipse_1.src} />
       </div> 
      );
    default:
      return null;
  }
};
