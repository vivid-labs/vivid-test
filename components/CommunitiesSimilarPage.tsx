import styles from "./CommunitiesSimilarPage.module.css";
import { XSimilarTitleLayout } from "./XSimilarTitleLayout";
import { XSimilarCommunitiesCard } from "./XSimilarCommunitiesCard";

export const CommunitiesSimilarPage = () => {
  return (
    <div className={styles.communitiesSimilarPage0}>
      <XSimilarTitleLayout />
      <div className={styles.communitiesSimilarPage1}>
        <XSimilarCommunitiesCard />
        <XSimilarCommunitiesCard />
        <XSimilarCommunitiesCard />
        <div className={styles.communitiesSimilarPage2}>
          <XSimilarCommunitiesCard />
        </div>
      </div>
      <div className={styles.communitiesSimilarPage3} />
    </div>
  );
};
