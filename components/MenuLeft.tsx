import styles from "./MenuLeft.module.css";
import { XLeftMenuRow } from "./XLeftMenuRow";
import { XMenuSeparator } from "./XMenuSeparator";
import { Arrow_16 } from "./Arrow_16";

export const MenuLeft = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.menuLeft0}>
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XMenuSeparator />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XMenuSeparator />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XLeftMenuRow />
      <XMenuSeparator />
      <XLeftMenuRow />
      <XMenuSeparator
        style={{
          height: "fit-content",
          width: "149px",
        }}
      />
      <div className={styles.menuLeft1}>
        <div className={styles.menuLeft2}>
          <p className={styles.menuLeft3}>Блог</p>
          <p className={styles.menuLeft4}>Реклама</p>
          <p className={styles.menuLeft5}>Еще</p>
          <Arrow_16 />
          <p className={styles.menuLeft6}>Разработчикам</p>
        </div>
      </div>
    </div>
  );
};
