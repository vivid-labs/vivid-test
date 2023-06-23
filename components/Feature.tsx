import styles from "./Feature.module.css";
import frame from "./frame.svg";

export const Feature = ({
  override,
  heading,
  description,
}: {
  override?: any;
  heading: string;
  description: string;
}) => {
  return (
    <div style={override} className={styles.feature}>
      <div className={styles.term}>
        <div className={styles.svg}>
          <img src={frame.src} className={styles.frame} />
        </div>
        <p className={styles.workFaster}>{heading}</p>
      </div>
      <div className={styles.details}>
        <p className={styles.generateSummariesActionItemsAndInsights}>
          {description}
        </p>
      </div>
    </div>
  );
};
