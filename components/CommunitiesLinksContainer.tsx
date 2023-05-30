import styles from "./CommunitiesLinksContainer.module.css";
import { XLinksContainerItem } from "./XLinksContainerItem";
import { CommunitiesLinksArrowRight_42 } from "./CommunitiesLinksArrowRight_42";
import { CommunitiesLinksArrowLeft_42 } from "./CommunitiesLinksArrowLeft_42";

export const CommunitiesLinksContainer = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesLinksContainer0}>
      <div className={styles.communitiesLinksContainer1}>
        <div className={styles.communitiesLinksContainer2}>
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <CommunitiesLinksArrowRight_42 />
        </div>
        <div className={styles.communitiesLinksContainer3}>
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <XLinksContainerItem
            style={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <CommunitiesLinksArrowLeft_42 />
        </div>
      </div>
    </div>
  );
};
