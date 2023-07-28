import styles from "./NoOutlineLogo.module.css";
import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container} figma-id="8:27:221">
    <img src={logo_2.src} className={styles.logo2} figma-id="8:27:196" />
   </div> 
  );
};
