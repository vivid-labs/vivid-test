import styles from "./XSearchHeader.module.css";
import { Search_16 } from "./Search_16";

export const XSearchHeader = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xSearchHeader0}>
      <Search_16
        style={{
          height: "16px",
          width: "16px",
        }}
      />
      <p className={styles.xSearchHeader1}>Поиск</p>
    </div>
  );
};
