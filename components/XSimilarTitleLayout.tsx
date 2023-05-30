import styles from "./XSimilarTitleLayout.module.css";
import { XTitleLayout_13 } from "./XTitleLayout_13";

export const XSimilarTitleLayout = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xSimilarTitleLayout0}>
      <p className={styles.xSimilarTitleLayout1}>Скрыть</p>
      <XTitleLayout_13
        style={{
          height: "fit-content",
          width: "fit-content",
        }}
      />
    </div>
  );
};
