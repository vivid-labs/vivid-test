import styles from "./YoutubeLogo.module.css";
import youtubeLogo from "./youtubeLogo.svg";
export const YoutubeLogo = ({ override }: { override?: any }) => {
  return (
    <img
     src={youtubeLogo.src}
     style={override}
     className={styles.logoContainer}
   /> 
  );
};
