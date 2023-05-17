import styles from "./HeroSectionPage.module.css";
import vivid_c29056e1fa6303a7ab7a81c293cba932538a9aea from "./c29056e1fa6303a7ab7a81c293cba932538a9aea.jpg";
import vivid_c82a3cf50915 from "./c82a3cf50915.svg";
import vivid_9fe519a440a7 from "./9fe519a440a7.svg";

export const HeroSectionPage = () => {
  return (
    <div className={styles.heroSectionPage0}>
      <img
        src={vivid_c29056e1fa6303a7ab7a81c293cba932538a9aea.src}
        className={styles.heroSectionPage1}
      />
      <p className={styles.heroSectionPage2}>
        Switzerland Has Never Been So Affordable
      </p>
      <p className={styles.heroSectionPage3}>
        Discover Switzerland. Choose the best programs, guides, hotels and
        restaurants.
      </p>
      <div className={styles.heroSectionPage4}>
        <p className={styles.heroSectionPage5}>Start to explore</p>
      </div>
      <div className={styles.heroSectionPage6}>
        <div className={styles.heroSectionPage7}>
          <img
            src={vivid_c82a3cf50915.src}
            className={styles.heroSectionPage8}
          />
          <p className={styles.heroSectionPage9}>MilanTour</p>
        </div>
        <div className={styles.heroSectionPage10}>
          <div className={styles.heroSectionPage11}>
            <p className={styles.heroSectionPage12}>Day tours</p>
            <p className={styles.heroSectionPage13}>Multi-day tours</p>
            <p className={styles.heroSectionPage14}>Attractions</p>
            <p className={styles.heroSectionPage15}>Themes</p>
          </div>
          <img
            src={vivid_9fe519a440a7.src}
            className={styles.heroSectionPage16}
          />
        </div>
      </div>
    </div>
  );
};
