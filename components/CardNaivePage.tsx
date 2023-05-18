import styles from "./CardNaivePage.module.css";
import vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c from "./88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.jpg";

export const CardNaivePage = () => {
  return (
    <div className={styles.cardNaivePage0}>
      <img
        src={vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.src}
        className={styles.cardNaivePage1}
      />
      <p className={styles.cardNaivePage2}>Champagne Package</p>
      <p className={styles.cardNaivePage3}>$450</p>
      <p className={styles.cardNaivePage4}>
        This package includes the most top shelf champagne off our bottom shelf.
        Sure to impress that special someone.{" "}
      </p>
    </div>
  );
};
