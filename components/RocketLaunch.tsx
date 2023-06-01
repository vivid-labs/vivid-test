import styles from "./RocketLaunch.module.css";
import rocketLaunch from "./rocketLaunch.svg";

export const RocketLaunch = ({ style }: { style?: any }) => {
  return (
    <img src={rocketLaunch.src} style={style} className={styles.rocketLaunch} />
  );
};
