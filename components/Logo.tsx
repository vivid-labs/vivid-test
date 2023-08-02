import styles from "./Logo.module.css";
import logo from "./logo.svg";
export const Logo = ({ override }: { override?: any }) => {
  return <img src={logo.src} style={override} className={styles.logo} />;
};
