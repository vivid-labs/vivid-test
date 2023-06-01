import styles from "./Storefront.module.css";
import storefront from "./storefront.svg";

export const Storefront = ({ style }: { style?: any }) => {
  return (
    <img src={storefront.src} style={style} className={styles.storefront} />
  );
};
