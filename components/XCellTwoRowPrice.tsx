import styles from "./XCellTwoRowPrice.module.css";

export const XCellTwoRowPrice = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xCellTwoRowPrice0}>
      <div className={styles.xCellTwoRowPrice1}>
        <p className={styles.xCellTwoRowPrice2}>Item (для нач...</p>
        <div className={styles.xCellTwoRowPrice3}>
          <p className={styles.xCellTwoRowPrice4}>2 500 ₽</p>
          <p className={styles.xCellTwoRowPrice5}>3 000 ₽</p>
        </div>
      </div>
      <div className={styles.xCellTwoRowPrice6} />
    </div>
  );
};
