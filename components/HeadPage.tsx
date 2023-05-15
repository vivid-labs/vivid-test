import styles from "./HeadPage.module.css";
import vivid_f6059f19132d from "./f6059f19132d.svg";
import vivid_7f8cf32aba90 from "./7f8cf32aba90.svg";
import vivid_b2ed02fe4048 from "./b2ed02fe4048.svg";
import vivid_23b7890c8ee86823296e8a76198f181306f9f9a6 from "./23b7890c8ee86823296e8a76198f181306f9f9a6.png";
import vivid_cbfda41d73a0 from "./cbfda41d73a0.svg";

export const HeadPage = () => {
  return (
    <div className={styles.headPage0}>
      <div className={styles.headPage1}>
        <img src={vivid_f6059f19132d.src} className={styles.headPage2} />
        <div className={styles.headPage3}>
          <div className={styles.headPage4}>
            <img src={vivid_7f8cf32aba90.src} className={styles.headPage5} />
            <img src={vivid_b2ed02fe4048.src} className={styles.headPage6} />
            <div className={styles.headPage7}>
              <div className={styles.headPage8} />
              <div className={styles.headPage9} />
              <img
                src={vivid_23b7890c8ee86823296e8a76198f181306f9f9a6.src}
                className={styles.headPage10}
              />
            </div>
            <img src={vivid_cbfda41d73a0.src} className={styles.headPage11} />
          </div>
          <div className={styles.headPage12}>
            <p className={styles.headPage13}>2</p>
          </div>
        </div>
      </div>
      <div className={styles.headPage14}>
        <p className={styles.headPage15}>Hello Alfred Bryant</p>
        <p className={styles.headPage16}>adrain.nader@yahoo.com</p>
      </div>
    </div>
  );
};
