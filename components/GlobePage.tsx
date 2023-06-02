import styles from "./GlobePage.module.css";
import globe from "./globe.svg";

export const GlobePage = ({ style }: { style?: any }) => {
  return <img src={globe.src} style={style} className={styles.globePage} />;
};
