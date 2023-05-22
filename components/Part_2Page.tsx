import styles from "./Part_2Page.module.css";
import { Reviews } from "./Reviews";
import vivid_68bee3f07098 from "./68bee3f07098.svg";

export const Part_2Page = () => {
  return (
    <div className={styles.part_2Page0}>
      <div className={styles.part_2Page1}>
        <div className={styles.part_2Page2}>
          <p className={styles.part_2Page3}>Ce que disent nos clients ?</p>
        </div>
        <Reviews property_1="default" />
      </div>
      <img src={vivid_68bee3f07098.src} className={styles.part_2Page4} />
    </div>
  );
};
