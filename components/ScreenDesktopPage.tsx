import styles from "./ScreenDesktopPage.module.css";
import { CollectionCard } from "./CollectionCard";

export const ScreenDesktopPage = () => {
  return (
    <div className={styles.screenDesktopPage0}>
      <div className={styles.screenDesktopPage1}>
        <div className={styles.screenDesktopPage2}>
          <p className={styles.screenDesktopPage3}>Trending Collection</p>
        </div>
        <div className={styles.screenDesktopPage4}>
          <p className={styles.screenDesktopPage5}>
            Checkout our weekly updated trending collection.
          </p>
        </div>
      </div>
      <div className={styles.screenDesktopPage6}>
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
