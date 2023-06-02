import styles from "./LogoPage.module.css";
import logo from "./logo.svg";

export const LogoPage = ({ style }: { style?: any }) => {
  return <img src={logo.src} style={style} className={styles.logoPage} />;
};
