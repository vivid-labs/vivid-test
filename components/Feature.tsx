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
    <div className={styles.feature} style={override}>
    <div className={styles.term}>
      <div className={styles.svg}>
        <img className={styles.frame} src={frame.src} />
      </div>
      <p className={styles.heading}>{heading}</p>
    </div>
    <div className={styles.details}>
      <p className={styles.description}>
        {description}
      </p>
    </div>
   </div> 
  );
};
