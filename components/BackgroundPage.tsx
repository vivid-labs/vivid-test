import styles from "./BackgroundPage.module.css";
import vivid_c817d7021f6f9a53c365efac3c9f1e9ba4d16da0 from "./c817d7021f6f9a53c365efac3c9f1e9ba4d16da0.png";
import vivid_f79e28059941 from "./f79e28059941.svg";

export const BackgroundPage = () => {
  return (
    <div>
      <img
        src={vivid_c817d7021f6f9a53c365efac3c9f1e9ba4d16da0.src}
        className={styles.backgroundPage0}
      />
      <div className={styles.backgroundPage1} />
      <img src={vivid_f79e28059941.src} className={styles.backgroundPage2} />
    </div>
  );
};
