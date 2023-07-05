import styles from "./Storefront.module.css";
import storefront from "./storefront.svg";
export const Storefront = ({ override }: { override?: any }) => {
  return (
    <img src={storefront.src} style={override} className={styles.storefront} />
  );
};
