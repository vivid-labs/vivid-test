import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
   (<div style={override} className={styles.navigation}>
    <div className={styles.logo}>
      <img src={moon.src} className={styles.moon-image} />
      <p className={styles.milan-tour}>MilanTour</p>
    </div>
    <div className={styles.links}>
      <div className={styles.menu-items}>
        <Link linkText="Day Tours" />
        <Link linkText="Multi-day Tours" />
        <Link linkText="Attractions" />
        <Link linkText="Themes" />
      </div>
      <img src={hamburgerMenu.src} className={styles.hamburger-menu} />
    </div>
   </div>)
  );
};
