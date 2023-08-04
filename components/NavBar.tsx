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
          <img className={styles.image} src={imageImage.src} />
          <div className={styles.left}>
            <OutlinedLogo />
          </div>
          <img className={styles.ellipse_2} src={ellipse_1.src} />
        </div>
      );
    case "White":
      return (
        <div className={styles.navBarComponent1} style={override}>
          <NoOutlineLogo />
          <img className={styles.ellipse_1} src={ellipse_1.src} />
        </div>
      );
    default:
      return null;
  }
};
