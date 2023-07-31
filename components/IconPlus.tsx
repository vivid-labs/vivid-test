import styles from "./IconPlus.module.css";
import iconPlus from "./iconPlus.svg";
export const IconPlus = ({ override }: { override?: any }) => {
  return (
    <img src={iconPlus.src} style={override} className={styles.iconPlus} />
  );
};
