import styles from "./Swatches.module.css";
import swatches from "./swatches.svg";
export const Swatches = ({ override }: { override?: any }) => {
  return (
    <img
      src={swatches.src}
      style={override}
      className={styles.swatches}
      figma-id="7:1503:3607"
    />
  );
};
