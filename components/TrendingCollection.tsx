import styles from "./TrendingCollection.module.css";
import { CollectionCard } from "./CollectionCard";

export const TrendingCollection = ({
  style,
  screen,
}: {
  style?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={style} className={styles.trendingCollection}>
          <div className={styles.sectionHeadline}>
            <div className={styles.heading}>
              <p className={styles.trendingCollectionText}>
                Trending Collection
              </p>
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
    case "Tablet":
      return (
        <div style={style} className={styles.trendingCollectionComponent}>
          <div className={styles.sectionHeadlineDiv}>
            <div className={styles.headingDiv}>
              <p className={styles.trendingCollectionText1}>
                Trending Collection
              </p>
            </div>
            <div className={styles.subheadDiv}>
              <p
                className={
                  styles.checkoutOurWeeklyUpdatedTrendingCollectionText
                }
              >
                Checkout our weekly updated trending collection.
              </p>
            </div>
          </div>
          <div className={styles.collectionSlider}>
            <CollectionCard
              property_1="Desktop Card"
              additionalNfTsNumber="1025+"
              collectionName="DSGN Animals"
              style={{
                height: "fit-content",
                width: "330px",
              }}
            />
            <CollectionCard
              property_1="Desktop Card"
              additionalNfTsNumber="6+"
              collectionName="Magic Mushrooms"
              style={{
                height: "fit-content",
                width: "330px",
              }}
            />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.trendingCollectionComponent1}>
          <div className={styles.sectionHeadlineDiv1}>
            <div className={styles.headingDiv1}>
              <p className={styles.trendingCollectionText2}>
                Trending Collection
              </p>
            </div>
            <div className={styles.subheadDiv1}>
              <p
                className={
                  styles.checkoutOurWeeklyUpdatedTrendingCollectionText1
                }
              >
                Checkout our weekly updated trending collection.
              </p>
            </div>
          </div>
          <div className={styles.collectionSliderDiv}>
            <CollectionCard
              property_1="Mobile Card"
              additionalNfTsNumber="1025+"
              collectionName="DSGN Animals"
              style={{
                height: "fit-content",
              }}
            />
          </div>
        </div>
      );
  }
};
