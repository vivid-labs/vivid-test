import styles from "./HamburgerMenu.module.css";
import hamburgerMenu from "./hamburgerMenu.svg";

export const HamburgerMenu = ({ override }: { override?: any }) => {
  return (
    <img
      src={hamburgerMenu.src}
      style={override}
      className={styles.hamburgerMenu}
    />
  );
};
