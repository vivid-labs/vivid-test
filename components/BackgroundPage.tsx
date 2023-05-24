import styles from "./BackgroundPage.module.css";
import vivid_c817d7021f6f9a53c365efac3c9f1e9ba4d16da0 from "./c817d7021f6f9a53c365efac3c9f1e9ba4d16da0.png";
import vivid_34221f26982e from "./34221f26982e.svg";

export const BackgroundPage = () => {
  return (
    <div className={styles.backgroundPage0}>
      <img
        src={vivid_c817d7021f6f9a53c365efac3c9f1e9ba4d16da0.src}
        className={styles.backgroundPage1}
      />
      <div className={styles.backgroundPage2} />
      <img src={vivid_34221f26982e.src} className={styles.backgroundPage3} />
    </div>
  );
};
