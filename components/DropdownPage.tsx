import styles from "./DropdownPage.module.css";
import arrow from "./arrow.svg";

export const DropdownPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.dropdownPage}>
      <img src={arrow.src} className={styles.arrow} />
      <p className={styles.dropdown}>Dropdown</p>
    </div>
  );
};
