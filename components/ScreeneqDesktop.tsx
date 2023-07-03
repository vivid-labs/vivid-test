import styles from "./ScreeneqDesktop.module.css";
import { CollectionCard } from "./CollectionCard";

export const ScreeneqDesktop = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.screeneqDesktop}>
      <div className={styles.sectionHeadline}>
        <div className={styles.heading}>
          <p className={styles.trendingCollection}>Trending Collection</p>
        </div>
        <div className={styles.subhead}>
          <p className={styles.checkoutOurWeeklyUpdatedTrendingCollection}>
            Checkout our weekly updated trending collection.
          </p>
        </div>
      </div>
      <div className={styles.collectionCardRow}>
        <CollectionCard
          property_1="Desktop Card"
          additionalNfTsNumber="1025+"
          collectionName="DSGN Animals"
        />
        <CollectionCard
          property_1="Desktop Card"
          additionalNfTsNumber="1025+"
          collectionName="Magic Mushrooms"
        />
        <CollectionCard
          property_1="Desktop Card"
          additionalNfTsNumber="1025+"
          collectionName="Disco Machines"
        />
      </div>
    </div>
  );
};
