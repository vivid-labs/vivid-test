import styles from "./Logo.module.css";
import logo from "./logo.svg";
export const Logo = ({ override }: { override?: any }) => {
  return (
    <img className={styles.logoComponent} src={logo.src} style={override} />
  );
};
