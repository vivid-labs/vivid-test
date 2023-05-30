import styles from "./XCellPhotoCover.module.css";
import vivid_6d0c310b92a19cb953d9070d91175284cabd8400 from "./6d0c310b92a19cb953d9070d91175284cabd8400.png";

export const XCellPhotoCover = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xCellPhotoCover0}>
      <div className={styles.xCellPhotoCover1} />
      <img
        src={vivid_6d0c310b92a19cb953d9070d91175284cabd8400.src}
        className={styles.xCellPhotoCover2}
      />
      <div className={styles.xCellPhotoCover3}>
        <p className={styles.xCellPhotoCover4}>Photos</p>
        <p className={styles.xCellPhotoCover5}>1</p>
      </div>
    </div>
  );
};
