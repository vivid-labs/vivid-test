import styles from "./CommunitiesSimilar.module.css";
import { XSimilarTitleLayout } from "./XSimilarTitleLayout";
import { XSimilarCommunitiesCard } from "./XSimilarCommunitiesCard";

export const CommunitiesSimilar = () => {
  return (
    <div className={styles.communitiesSimilar0}>
      <XSimilarTitleLayout />
      <div className={styles.communitiesSimilar1}>
        <XSimilarCommunitiesCard />
        <XSimilarCommunitiesCard />
        <XSimilarCommunitiesCard />
        <div className={styles.communitiesSimilar2}>
          <XSimilarCommunitiesCard />
        </div>
      </div>
      <div className={styles.communitiesSimilar3} />
    </div>
  );
};
