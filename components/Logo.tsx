import styles from "./Logo.module.css";
import logo from "./logo.png";
export const Logo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.logoComponent} figma-id="7:16:310">
      <img src={logo.src} className={styles.logo} figma-id="7:16:302" />
    </div>
  );
};
