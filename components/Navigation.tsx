import styles from "./Navigation.module.css";
import vivid_10fda851ccd4 from "./10fda851ccd4.svg";
import vivid_5e9b2704a73f from "./5e9b2704a73f.svg";

export const Navigation = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.navigation0}>
      <div className={styles.navigation1}>
        <img src={vivid_10fda851ccd4.src} className={styles.navigation2} />
        <p className={styles.navigation3}>MilanTour</p>
      </div>
      <div className={styles.navigation4}>
        <div className={styles.navigation5}>
          <p className={styles.navigation6}>Day tours</p>
          <p className={styles.navigation7}>Multi-day tours</p>
          <p className={styles.navigation8}>Attractions</p>
          <p className={styles.navigation9}>Themes</p>
        </div>
        <img src={vivid_5e9b2704a73f.src} className={styles.navigation10} />
      </div>
    </div>
  );
};
