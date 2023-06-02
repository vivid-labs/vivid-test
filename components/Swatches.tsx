import styles from "./Swatches.module.css";
import swatches from "./swatches.svg";

export const Swatches = ({ style }: { style?: any }) => {
  return <img src={swatches.src} style={style} className={styles.swatches} />;
};
