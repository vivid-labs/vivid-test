import styles from "./PositioningTestsPage.module.css";
import { PaddingComponent } from "./PaddingComponent";
import { Definition } from "./Definition";
import { XButtonMediumFixed } from "./XButtonMediumFixed";

export const PositioningTestsPage = () => {
  return (
    <div className={styles.positioningTestsPage0}>
      <div className={styles.positioningTestsPage1}>
        <div className={styles.positioningTestsPage2}>
          <div className={styles.positioningTestsPage3}>
            <div className={styles.positioningTestsPage4} />
            <p className={styles.positioningTestsPage5}>Button fixed</p>
            <div className={styles.positioningTestsPage6} />
          </div>
        </div>
      </div>
      <PaddingComponent />
      <div className={styles.positioningTestsPage7}>
        <div className={styles.positioningTestsPage8}>
          <div className={styles.positioningTestsPage9}>
            <p className={styles.positioningTestsPage10}>Button fixed</p>
          </div>
        </div>
      </div>
      <Definition />
      <XButtonMediumFixed />
    </div>
  );
};
