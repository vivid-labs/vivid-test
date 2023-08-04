import styles from "./Logo.module.css";
import logo from "./logo.svg";
export const Logo = ({ override }: { override?: any }) => {
  return (<img className={styles.logoContainer} src={logo.src} style={override} />);
};
