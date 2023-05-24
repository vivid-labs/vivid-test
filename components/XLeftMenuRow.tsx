import styles from "./XLeftMenuRow.module.css";
import { Home_24Solid } from "./Home_24Solid";

export const XLeftMenuRow = () => {
  return (
    <div className={styles.xLeftMenuRow0}>
      <div className={styles.xLeftMenuRow1}>
        <div className={styles.xLeftMenuRow2}>
          <Home_24Solid />
        </div>
        <p className={styles.xLeftMenuRow3}>Моя страница</p>
      </div>
      <div className={styles.xLeftMenuRow4}>
        <p className={styles.xLeftMenuRow5}>9</p>
      </div>
    </div>
  );
};
