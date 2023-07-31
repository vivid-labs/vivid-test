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
    <div style={override} className={styles.actionItemsText}>
    <div className={styles.frameImage}>
      <div className={styles.termContainer}>
        <img src={frame.src} className={styles.featureContainer} />
      </div>
      <p className={styles.svgContainer}>{heading}</p>
    </div>
    <div className={styles.detailsContainer}>
      <p className={styles.workFasterText}>
        {description}
      </p>
    </div>
   </div> 
  );
};
