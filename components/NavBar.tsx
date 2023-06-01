import styles from "./NavBar.module.css";
import vividLogoBackground_1 from "./vividLogoBackground_1.png";
import { HamburgerIcon } from "./HamburgerIcon";

export const NavBar = ({
  style,
  screenSize,
}: {
  style?: any;
  screenSize: string;
}) => {
  switch (screenSize) {
    case "Desktop":
      return (
        <div style={style} className={styles.navBar}>
          <img
            src={vividLogoBackground_1.src}
            className={styles.vividLogoBackground_1}
          />
          <div className={styles.frame_5}>
            <p className={styles.home}>Home</p>
            <p className={styles.about}>About</p>
            <p className={styles.contact}>Contact</p>
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.navBarComponent}>
          <img
            src={vividLogoBackground_1.src}
            className={styles.vividLogoBackground_1Image}
          />
          <HamburgerIcon />
        </div>
      );
  }
};
