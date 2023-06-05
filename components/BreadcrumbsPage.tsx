import styles from "./BreadcrumbsPage.module.css";
import seperatorImage from "./seperatorImage.svg";
import seperator from "./seperator.svg";
import appleImage2 from "./appleImage2.svg";
import appleImage1 from "./appleImage1.svg";
import appleImage from "./appleImage.svg";
import apple from "./apple.svg";

export const BreadcrumbsPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.breadcrumbsPage}>
      <div className={styles.li}>
        <div className={styles.pseudo}>
          <div className={styles.iconLargeSvg}>
            <img src={seperatorImage.src} className={styles.seperator} />
            <img src={seperator.src} className={styles.seperatorImage} />
          </div>
        </div>
        <p className={styles.iPhone}>iPhone</p>
      </div>
      <div className={styles.span}>
        <div className={styles.iconLargeSvgDiv}>
          <img src={appleImage2.src} className={styles.apple} />
          <img src={appleImage1.src} className={styles.appleImage} />
          <img src={appleImage.src} className={styles.appleImage1} />
          <img src={apple.src} className={styles.appleImage2} />
        </div>
        <p className={styles.text}></p>
      </div>
    </div>
  );
};
