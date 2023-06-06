import styles from "./MagicWand.module.css";
import magicWand from "./magicWand.svg";

export const MagicWand = ({ style }: { style?: any }) => {
  return <img src={magicWand.src} style={style} className={styles.magicWand} />;
};
