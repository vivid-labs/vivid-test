import styles from "./PageTemplate_2Page.module.css";
import { HeadUserPlayerActived } from "./HeadUserPlayerActived";
import { MenuLeft } from "./MenuLeft";
import { CommunitiesActionCollapsedButton } from "./CommunitiesActionCollapsedButton";
import { CommunitiesSubscriptionsFriendsSmallAlone } from "./CommunitiesSubscriptionsFriendsSmallAlone";
import { CommunitiesSubscriptionsAll } from "./CommunitiesSubscriptionsAll";
import { CommunitiesGroupContainers } from "./CommunitiesGroupContainers";
import { Footer } from "./Footer";
import { CommunitiesContainerInfo } from "./CommunitiesContainerInfo";
import { CommunitiesSimilar } from "./CommunitiesSimilar";
import { CommunitiesLinksContainer } from "./CommunitiesLinksContainer";
import { CommunitiesGoods } from "./CommunitiesGoods";
import { CommunitiesOfferNers } from "./CommunitiesOfferNers";
import { CommunitiesPostContainer } from "./CommunitiesPostContainer";
import { CommunitiesHeader } from "./CommunitiesHeader";

export const PageTemplate_2Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.pageTemplate_2Page0}>
      <HeadUserPlayerActived
        style={{
          height: "42px",
          width: "1600px",
        }}
      />
      <MenuLeft />
      <div className={styles.pageTemplate_2Page1}>
        <CommunitiesActionCollapsedButton />
        <CommunitiesSubscriptionsFriendsSmallAlone
          style={{
            height: "44px",
            width: "232px",
          }}
        />
        <CommunitiesSubscriptionsAll
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <CommunitiesGroupContainers
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
      </div>
      <Footer />
      <Footer />
      <div className={styles.pageTemplate_2Page2}>
        <CommunitiesContainerInfo />
        <CommunitiesSimilar
          style={{
            height: "273px",
            width: "552px",
          }}
        />
        <CommunitiesLinksContainer
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <CommunitiesGoods
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
        <CommunitiesOfferNers
          style={{
            height: "54px",
            width: "552px",
          }}
        />
        <CommunitiesPostContainer
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
        />
      </div>
      <CommunitiesHeader />
    </div>
  );
};
