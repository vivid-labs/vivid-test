import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";
export const Navigation = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className={styles.navigationComponent} style={override}>
      <div className={styles.logo}>
        <img className={styles.moon} src={moon.src} />
        <p className={styles.milanTour}>MilanTour</p>
      </div>
      <div className={styles.links}>
        <div className={styles.menuItems}>
          <Link linkText="Day Tours" />
          <Link linkText="Multi-day Tours" />
          <Link linkText="Attractions" />
          <Link linkText="Themes" />
        </div>
        <img className={styles.hamburgerMenu} src={hamburgerMenu.src} />
      </div>
    </div>
  );
};
