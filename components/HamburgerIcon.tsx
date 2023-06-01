import styles from "./HamburgerIcon.module.css";
import hamburgerIcon from "./hamburgerIcon.svg";

export const HamburgerIcon = ({ style }: { style?: any }) => {
  return (
    <img
      src={hamburgerIcon.src}
      style={style}
      className={styles.hamburgerIcon}
    />
  );
};
