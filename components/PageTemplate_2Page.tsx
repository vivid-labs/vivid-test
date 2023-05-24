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

export const PageTemplate_2Page = () => {
  return (
    <div className={styles.pageTemplate_2Page0}>
      <HeadUserPlayerActived />
      <MenuLeft />
      <div className={styles.pageTemplate_2Page1}>
        <CommunitiesActionCollapsedButton />
        <CommunitiesSubscriptionsFriendsSmallAlone />
        <CommunitiesSubscriptionsAll />
        <CommunitiesGroupContainers />
      </div>
      <Footer />
      <Footer />
      <div className={styles.pageTemplate_2Page2}>
        <CommunitiesContainerInfo />
        <CommunitiesSimilar />
        <CommunitiesLinksContainer />
        <CommunitiesGoods />
        <CommunitiesOfferNers />
        <CommunitiesPostContainer />
      </div>
      <CommunitiesHeader />
    </div>
  );
};
