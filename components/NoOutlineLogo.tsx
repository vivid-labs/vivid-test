import styles from "./NoOutlineLogo.module.css";
import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container}>
    <img src={logo_2.src} className={styles.logoImage} />
   </div> 
  );
};
