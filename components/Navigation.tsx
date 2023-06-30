import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
   (<div style={override} className={styles.navigation}>
    <div className={styles.headerLogo}>
      <img src={moon.src} className={styles.headerLogoIcon} />
      <p className={styles.headerLogoText}>MilanTour</p>
    </div>
    <div className={styles.headerLinks}>
      <div className={styles.headerMenuItems}>
        <Link linkText="Day Tours" />
        <Link linkText="Multi-day Tours" />
        <Link linkText="Attractions" />
        <Link linkText="Themes" />
      </div>
      <img src={hamburgerMenu.src} className={styles.headerMenuIcon} />
    </div>
   </div>)
  );
};
