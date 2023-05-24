import styles from "./XLinksContainerItem.module.css";
import { XLinksContainerImage } from "./XLinksContainerImage";

export const XLinksContainerItem = () => {
  return (
    <div className={styles.xLinksContainerItem0}>
      <XLinksContainerImage />
      <p className={styles.xLinksContainerItem1}>Ссылка с материал...</p>
    </div>
  );
};
