import styles from "./SystemHandPointing.module.css";
import systemHandPointing from "./systemHandPointing.svg";
export const SystemHandPointing = ({ override }: { override?: any }) => {
  return (
    <img
      src={systemHandPointing.src}
      style={override}
      className={styles.systemHandPointing}
    />
  );
};
