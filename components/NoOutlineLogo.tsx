import styles from "./NoOutlineLogo.module.css";
import logo_2 from "./logo_2.png";

export const NoOutlineLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.noOutlineLogo}>
      <img src={logo_2.src} className={styles.logo_2} />
    </div>
  );
};
