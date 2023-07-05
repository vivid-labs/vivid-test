import styles from "./Navigation.module.css";
import moon from "./moon.svg";
import { Link } from "./Link";
import hamburgerMenu from "./hamburgerMenu.svg";
export const Navigation = ({ override }: { override?: any }) => {
  const linkProps = [
    {
      linkText: "Day Tours",
    },
    {
      linkText: "Multi-day Tours",
    },
    {
      linkText: "Attractions",
    },
    {
      linkText: "Themes",
    },
  ];
  return (
    <div style={override} className={styles.navContainer}>
    <div className={styles.navLogo}>
      <img src={moon.src} className={styles.navLogoImage} />
      <p className={styles.navTitle}>MilanTour</p>
    </div>
    <div className={styles.navLinks}>
      <div className={styles.menuItemsContainer}>
        {linkProps.map((props, i) => (
          <Link {...props} key={i} />
        ))}
      </div>
      <img src={hamburgerMenu.src} className={styles.hamburgerMenuIcon} />
    </div>
   </div> 
  );
};
