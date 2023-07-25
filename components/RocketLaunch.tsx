import styles from "./RocketLaunch.module.css";
import rocketLaunch from "./rocketLaunch.svg";
export const RocketLaunch = ({ override }: { override?: any }) => {
  return (
    <img
      src={rocketLaunch.src}
      style={override}
      className={styles.rocketLaunch}
      figma-id="11:1423:1464"
    />
  );
};
