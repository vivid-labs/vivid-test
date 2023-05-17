import styles from "./HeadPage.module.css";
import vivid_ae29d2b3fdfe from "./ae29d2b3fdfe.svg";
import vivid_dd000c4e7ef4 from "./dd000c4e7ef4.svg";
import vivid_697db9c3f17f from "./697db9c3f17f.svg";
import vivid_972fd64ca1ce from "./972fd64ca1ce.svg";
import vivid_a95504f7cd89 from "./a95504f7cd89.svg";
import vivid_866908e119ab from "./866908e119ab.svg";

export const HeadPage = () => {
  return (
    <div className={styles.headPage0}>
      <img src={vivid_ae29d2b3fdfe.src} className={styles.headPage1} />
      <div className={styles.headPage2}>
        <p className={styles.headPage3}>Follow us</p>
        <img src={vivid_dd000c4e7ef4.src} className={styles.headPage4} />
        <img src={vivid_697db9c3f17f.src} className={styles.headPage5} />
        <img src={vivid_972fd64ca1ce.src} className={styles.headPage6} />
      </div>
      <div className={styles.headPage7}>
        <p className={styles.headPage8}>Scroll down</p>
        <img src={vivid_a95504f7cd89.src} className={styles.headPage9} />
      </div>
      <div className={styles.headPage10}>
        <div className={styles.headPage11}>
          <p className={styles.headPage12}>explore the Nature Beauty</p>
          <div className={styles.headPage13} />
        </div>
        <p className={styles.headPage14}>
          Discover
          <br />
          Wonderful Indonesia
        </p>
      </div>
      <div className={styles.headPage15}>
        <div className={styles.headPage16}>
          <p className={styles.headPage17}>Culture</p>
          <p className={styles.headPage18}>About us</p>
          <p className={styles.headPage19}>Information</p>
        </div>
        <div className={styles.headPage20}>
          <div className={styles.headPage21}>
            <p className={styles.headPage22}>Search</p>
            <img src={vivid_866908e119ab.src} className={styles.headPage23} />
          </div>
        </div>
        <div className={styles.headPage24}>
          <p className={styles.headPage25}>QWERy</p>
        </div>
      </div>
    </div>
  );
};
