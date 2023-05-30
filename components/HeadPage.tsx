import styles from "./HeadPage.module.css";
import vivid_c817d7021f6f9a53c365efac3c9f1e9ba4d16da0 from "./c817d7021f6f9a53c365efac3c9f1e9ba4d16da0.png";
import vivid_34221f26982e from "./34221f26982e.svg";
import vivid_dd000c4e7ef4 from "./dd000c4e7ef4.svg";
import vivid_697db9c3f17f from "./697db9c3f17f.svg";
import vivid_92372707ffd7 from "./92372707ffd7.svg";
import vivid_a95504f7cd89 from "./a95504f7cd89.svg";
import vivid_846649cc0b29 from "./846649cc0b29.svg";

export const HeadPage = () => {
  return (
    <div className={styles.headPage0}>
      <div>
        <img
          src={vivid_c817d7021f6f9a53c365efac3c9f1e9ba4d16da0.src}
          className={styles.headPage1}
        />
        <div className={styles.headPage2} />
        <img src={vivid_34221f26982e.src} className={styles.headPage3} />
      </div>
      <div>
        <p className={styles.headPage4}>Follow us</p>
        <img src={vivid_dd000c4e7ef4.src} className={styles.headPage5} />
        <img src={vivid_697db9c3f17f.src} className={styles.headPage6} />
        <img src={vivid_92372707ffd7.src} className={styles.headPage7} />
      </div>
      <div>
        <p className={styles.headPage8}>Scroll down</p>
        <img src={vivid_a95504f7cd89.src} className={styles.headPage9} />
      </div>
      <div className={styles.headPage10}>
        <div>
          <p className={styles.headPage11}>explore the Nature Beauty</p>
          <div className={styles.headPage12} />
        </div>
        <p className={styles.headPage13}>
          Discover
          <br />
          Wonderful Indonesia
        </p>
      </div>
      <div className={styles.headPage14}>
        <div>
          <p className={styles.headPage15}>Culture</p>
          <p className={styles.headPage16}>About us</p>
          <p className={styles.headPage17}>Information</p>
        </div>
        <div>
          <p className={styles.headPage18}>Search</p>
          <img src={vivid_846649cc0b29.src} className={styles.headPage19} />
        </div>
        <div className={styles.headPage20}>
          <p className={styles.headPage21}>QWERy</p>
        </div>
      </div>
    </div>
  );
};
