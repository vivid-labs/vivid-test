import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.navigation}>
      <div className={styles.logo}>
        <img src={moon.src} className={styles.moon} />
        <p className={styles.milanTour}>MilanTour</p>
      </div>
      <div className={styles.links}>
        <div className={styles.menuItems}>
          <Link linkText="Day Tours" />
          <Link linkText="Multi-day Tours" />
          <Link linkText="Attractions" />
          <Link linkText="Themes" />
        </div>
        <img src={hamburgerMenu.src} className={styles.hamburgerMenu} />
      </div>
    </div>
  );
};
