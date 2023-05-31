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
        <div style={style} className={styles.trendingCollection0}>
          <div className={styles.trendingCollection1}>
            <div className={styles.trendingCollection2}>
              <p className={styles.trendingCollection3}>Trending Collection</p>
            </div>
            <div className={styles.trendingCollection4}>
              <p className={styles.trendingCollection5}>
                Checkout our weekly updated trending collection.
              </p>
            </div>
          </div>
          <div className={styles.trendingCollection6}>
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
        <div style={style} className={styles.trendingCollection7}>
          <div className={styles.trendingCollection8}>
            <div className={styles.trendingCollection9}>
              <p className={styles.trendingCollection10}>Trending Collection</p>
            </div>
            <div className={styles.trendingCollection11}>
              <p className={styles.trendingCollection12}>
                Checkout our weekly updated trending collection.
              </p>
            </div>
          </div>
          <div className={styles.trendingCollection13}>
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
        <div style={style} className={styles.trendingCollection14}>
          <div className={styles.trendingCollection15}>
            <div className={styles.trendingCollection16}>
              <p className={styles.trendingCollection17}>Trending Collection</p>
            </div>
            <div className={styles.trendingCollection18}>
              <p className={styles.trendingCollection19}>
                Checkout our weekly updated trending collection.
              </p>
            </div>
          </div>
          <div className={styles.trendingCollection20}>
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
