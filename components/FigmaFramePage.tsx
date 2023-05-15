import styles from "./FigmaFramePage.module.css";
import vivid_25ebc41f2aac7379447a749db3775c6008dd33a8 from "./25ebc41f2aac7379447a749db3775c6008dd33a8.png";
import vivid_5585eef603d6 from "./5585eef603d6.svg";
import { EmptyFrame } from "./EmptyFrame";

export const FigmaFramePage = () => {
  return (
    <div className={styles.figmaFramePage0}>
      <div className={styles.figmaFramePage1}>
        <div className={styles.figmaFramePage2}>
          <img
            src={vivid_25ebc41f2aac7379447a749db3775c6008dd33a8.src}
            className={styles.figmaFramePage3}
          />
          <p className={styles.figmaFramePage4}>Vivid Sync</p>
        </div>
        <img src={vivid_5585eef603d6.src} className={styles.figmaFramePage5} />
      </div>
      <EmptyFrame />
    </div>
  );
};
