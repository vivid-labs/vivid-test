import styles from "./CommunitiesLinksContainer.module.css";
import { XLinksContainerItem } from "./XLinksContainerItem";
import { CommunitiesLinksArrowRight_42 } from "./CommunitiesLinksArrowRight_42";
import { CommunitiesLinksArrowLeft_42 } from "./CommunitiesLinksArrowLeft_42";

export const CommunitiesLinksContainer = () => {
  return (
    <div className={styles.communitiesLinksContainer0}>
      <div className={styles.communitiesLinksContainer1}>
        <div className={styles.communitiesLinksContainer2}>
          <XLinksContainerItem />
          <XLinksContainerItem />
          <XLinksContainerItem />
          <XLinksContainerItem />
          <CommunitiesLinksArrowRight_42 />
        </div>
        <div className={styles.communitiesLinksContainer3}>
          <XLinksContainerItem />
          <XLinksContainerItem />
          <XLinksContainerItem />
          <XLinksContainerItem />
          <CommunitiesLinksArrowLeft_42 />
        </div>
      </div>
    </div>
  );
};
