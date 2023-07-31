import styles from "./IconMail.module.css";
import iconMail from "./iconMail.svg";
export const IconMail = ({ override }: { override?: any }) => {
  return (
    <img src={iconMail.src} style={override} className={styles.iconMail} />
  );
};
