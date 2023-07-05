import styles from "./InstagramLogo.module.css";
import instagramLogo from "./instagramLogo.svg";
export const InstagramLogo = ({ override }: { override?: any }) => {
  return (
    <img
     src={instagramLogo.src}
     style={override}
     className={styles.logoImage}
   /> 
  );
};
