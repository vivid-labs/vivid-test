import styles from "./CommunitiesGoods.module.css";
import { XTitleLayout_13 } from "./XTitleLayout_13";
import { XCellItemGoods } from "./XCellItemGoods";
import { SearchArrow_16 } from "./SearchArrow_16";

export const CommunitiesGoods = () => {
  return (
    <div className={styles.communitiesGoods0}>
      <div className={styles.communitiesGoods1}>
        <div className={styles.communitiesGoods2}>
          <XTitleLayout_13 />
        </div>
      </div>
      <div className={styles.communitiesGoods3}>
        <XCellItemGoods />
        <XCellItemGoods />
        <XCellItemGoods />
      </div>
      <div className={styles.communitiesGoods4} />
      <div className={styles.communitiesGoods5} />
      <div className={styles.communitiesGoods6}>
        <div className={styles.communitiesGoods7} />
        <div className={styles.communitiesGoods8}>
          <p className={styles.communitiesGoods9}>Показать все товары</p>
          <SearchArrow_16 />
        </div>
        <div className={styles.communitiesGoods10} />
      </div>
    </div>
  );
};
