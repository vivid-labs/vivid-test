import styles from "./Headings.module.css";

export const Headings = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.headings}>
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
