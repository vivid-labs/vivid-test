import styles from "./Card.module.css";
import vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c from "./88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.jpg";

export const Card = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.card0}>
      <img
        src={vivid_88e2cc240f55219ae887a6ef77cf6a1ee4a1bc6c.src}
        className={styles.card1}
      />
      <div className={styles.card2}>
        <div className={styles.card3}>
          <p className={styles.card4}>Champagne Package</p>
          <p className={styles.card5}>$450</p>
        </div>
        <p className={styles.card6}>
          This package includes the most top shelf champagne off our bottom
          shelf. Sure to impress that special someone.{" "}
        </p>
      </div>
    </div>
  );
};
