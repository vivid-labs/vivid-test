import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
   (<div style={override} className={styles.navWrapper}>
    <div className={styles.navLogo}>
      <img src={moon.src} className={styles.navMoon} />
      <p className={styles.navTitle}>MilanTour</p>
    </div>
    <div className={styles.navLinks}>
      <div className={styles.navMenuItems}>
        <Link linkText="Day Tours" />
        <Link linkText="Multi-day Tours" />
        <Link linkText="Attractions" />
        <Link linkText="Themes" />
      </div>
      <img src={hamburgerMenu.src} className={styles.navHamburgerMenu} />
    </div>
   </div>)
  );
};
