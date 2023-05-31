import styles from "./Dropdown.module.css";
import vivid_762894ccc421 from "./762894ccc421.svg";

export const Dropdown = ({ style, show }: { style: any; show: boolean }) => {
  return (
    <div style={style} className={styles.dropdown}>
      <img src={vivid_762894ccc421.src} className={styles.arrow} />
      <p
        style={{
          visibility: show,
        }}
        className={styles.dropdownText}
      >
        Dropdown
      </p>
    </div>
  );
};
