import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";

export const Navigation = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.mainContainer}>
    <div className={styles.logoContainer}>
      <img src={moon.src} className={styles.moonImage} />
      <p className={styles.tourText}>MilanTour</p>
    </div>
    <div className={styles.linksContainer}>
      <div className={styles.menuContainer}>
        <Link linkText="Day Tours" />
        <Link linkText="Multi-day Tours" />
        <Link linkText="Attractions" />
        <Link linkText="Themes" />
      </div>
      <img src={hamburgerMenu.src} className={styles.hamburgerImage} />
    </div>
   </div> 
  );
};
