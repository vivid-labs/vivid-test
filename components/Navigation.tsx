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
    <div style={override} className={styles.navigation}>
    <div className={styles.logo}>
      <img src={moon.src} className={styles.moon} />
      <p className={styles.tourText}>MilanTour</p>
    </div>
    <div className={styles.links}>
      <div className={styles.menuItemContainer}>
        {linkProps.map((props, i) => (
          <Link {...props} key={i} />
        ))}
      </div>
      <img src={hamburgerMenu.src} className={styles.hamburgerMenu} />
    </div>
   </div> 
  );
};
