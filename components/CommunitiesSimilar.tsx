import styles from "./CommunitiesSimilar.module.css";
import { XSimilarTitleLayout } from "./XSimilarTitleLayout";
import { XSimilarCommunitiesCard } from "./XSimilarCommunitiesCard";

export const CommunitiesSimilar = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.communitiesSimilar0}>
      <XSimilarTitleLayout />
      <div className={styles.communitiesSimilar1}>
        <XSimilarCommunitiesCard />
        <XSimilarCommunitiesCard />
        <XSimilarCommunitiesCard />
        <div className={styles.communitiesSimilar2}>
          <XSimilarCommunitiesCard
            style={{
              overflow: "hidden",
            }}
          />
        </div>
      </div>
      <div className={styles.communitiesSimilar3} />
    </div>
  );
};
