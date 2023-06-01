import styles from "./HeadingsPage.module.css";

export const HeadingsPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.headingsPage}>
      <p className={styles.switzerlandHasNeverBeenSoAffordable}>
        Switzerland Has Never Been So Affordable
      </p>
      <p
        className={
          styles.discoverSwitzerlandChooseTheBestProgramsGuidesHotelsAndRestaurants
        }
      >
        Discover Switzerland. Choose the best programs, guides, hotels and
        restaurants.
      </p>
    </div>
  );
};
