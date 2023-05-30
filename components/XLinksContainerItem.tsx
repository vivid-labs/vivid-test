import styles from "./XLinksContainerItem.module.css";
import { XLinksContainerImage } from "./XLinksContainerImage";

export const XLinksContainerItem = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.xLinksContainerItem0}>
      <XLinksContainerImage
        style={{
          height: "92px",
          width: "135px",
        }}
      />
      <p className={styles.xLinksContainerItem1}>Ссылка с материал...</p>
    </div>
  );
};
