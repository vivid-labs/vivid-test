import styles from "./CommunitiesGoods.module.css";
import { XTitleLayout_13 } from "./XTitleLayout_13";
import { XCellItemGoods } from "./XCellItemGoods";
import { SearchArrow_16 } from "./SearchArrow_16";

export const CommunitiesGoods = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesGoods0}>
      <div className={styles.communitiesGoods1}>
        <div className={styles.communitiesGoods2}>
          <XTitleLayout_13
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
        </div>
      </div>
      <div className={styles.communitiesGoods3}>
        <XCellItemGoods
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <XCellItemGoods
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <XCellItemGoods
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
      </div>
      <div className={styles.communitiesGoods4} />
      <div className={styles.communitiesGoods5} />
      <div className={styles.communitiesGoods6}>
        <div className={styles.communitiesGoods7} />
        <div className={styles.communitiesGoods8}>
          <p className={styles.communitiesGoods9}>Показать все товары</p>
          <SearchArrow_16
            style={{
              height: "10px",
              width: "6px",
            }}
          />
        </div>
        <div className={styles.communitiesGoods10} />
      </div>
    </div>
  );
};
