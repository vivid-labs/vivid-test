import styles from "./Card.module.css";
import champagne_1 from "./champagne_1.jpg";

export const Card = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.card}>
      <img src={champagne_1.src} className={styles.champagne_1} />
      <div className={styles.frame_2}>
        <div className={styles.frame_1}>
          <p className={styles.champagnePackage}>Champagne Package</p>
          <p className={styles.text_450}>$450</p>
        </div>
        <p
          className={
            styles.thisPackageIncludesTheMostTopShelfChampagneOffOurBottomShelfSureToImpressThatSpecialSomeone
          }
        >
          This package includes the most top shelf champagne off our bottom
          shelf. Sure to impress that special someone.{" "}
        </p>
      </div>
    </div>
  );
};
