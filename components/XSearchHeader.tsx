import styles from "./XSearchHeader.module.css";
import { Search_16 } from "./Search_16";

export const XSearchHeader = () => {
  return (
    <div className={styles.xSearchHeader0}>
      <Search_16 />
      <p className={styles.xSearchHeader1}>Поиск</p>
    </div>
  );
};
