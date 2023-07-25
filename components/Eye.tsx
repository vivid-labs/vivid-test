import styles from "./Eye.module.css";
import eye from "./eye.svg";
export const Eye = ({ override }: { override?: any }) => {
  return (
    <img
      src={eye.src}
      style={override}
      className={styles.eye}
      figma-id="11:1423:1364"
    />
  );
};
