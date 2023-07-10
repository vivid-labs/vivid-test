import styles from "./Globe.module.css";
import globe from "./globe.svg";
export const Globe = ({ override }: { override?: any }) => {
  return <img src={globe.src} style={override} className={styles.globe} />;
};
