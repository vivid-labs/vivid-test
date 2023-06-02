import styles from "./Planet.module.css";
import planet from "./planet.svg";

export const Planet = ({ style }: { style?: any }) => {
  return <img src={planet.src} style={style} className={styles.planet} />;
};
