import styles from "./NavBar.module.css";
import vivid_75bdb990dd7fb4717eced2212582b3e53bd44a93 from "./75bdb990dd7fb4717eced2212582b3e53bd44a93.png";
import { HamburgerIcon } from "./HamburgerIcon";

export const NavBar = ({ screenSize }: { screenSize: string }) => {
  switch (screenSize) {
    case "Desktop":
      return (
        <div className={styles.navBar0}>
          <img
            src={vivid_75bdb990dd7fb4717eced2212582b3e53bd44a93.src}
            className={styles.navBar1}
          />
          <div className={styles.navBar2}>
            <p className={styles.navBar3}>Home</p>
            <p className={styles.navBar4}>About</p>
            <p className={styles.navBar5}>Contact</p>
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div className={styles.navBar6}>
          <img
            src={vivid_75bdb990dd7fb4717eced2212582b3e53bd44a93.src}
            className={styles.navBar7}
          />
          <div className={styles.navBar8}>
            <p className={styles.navBar9}>Home</p>
            <p className={styles.navBar10}>About</p>
            <p className={styles.navBar11}>Contact</p>
          </div>
          <HamburgerIcon />
        </div>
      );
  }
};
