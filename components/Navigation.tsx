import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.nav}>
    <div className={styles.logoContainer}>
      <img src={moon.src} className={styles.moonIcon} />
      <p className={styles.tourTitle}>MilanTour</p>
    </div>
    <div className={styles.linkContainer}>
      <div className={styles.menuItems}>
        <Link linkText="Day Tours" />
        <Link linkText="Multi-day Tours" />
        <Link linkText="Attractions" />
        <Link linkText="Themes" />
      </div>
      <img src={hamburgerMenu.src} className={styles.hamburgerIcon} />
    </div>
   </div> 
  );
};
