import styles from "./Feature.module.css";
import frame from "./frame.svg";

export const Feature = ({
  style,
  heading,
  description,
}: {
  style?: any;
  heading: string;
  description: string;
}) => {
  return (
    <div style={style} className={styles.feature}>
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
