import styles from "./Planet.module.css";
import planet from "./planet.svg";
export const Planet = ({ override }: { override?: any }) => {
  return (
    <img
      src={planet.src}
      style={override}
      className={styles.planet}
      figma-id="7:1503:3603"
    />
  );
};
