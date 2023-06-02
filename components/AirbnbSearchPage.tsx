import styles from "./AirbnbSearchPage.module.css";
import divider from "./divider.svg";
import icon from "./icon.svg";

export const AirbnbSearchPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.airbnbSearchPage}>
      <div className={styles.attribute}>
        <p className={styles.value}>Bordeaux</p>
      </div>
      <img src={divider.src} className={styles.divider} />
      <div className={styles.attributeDiv}>
        <p className={styles.valueText}>Feb 19-26</p>
      </div>
      <img src={divider.src} className={styles.dividerImage} />
      <div className={styles.attributeDiv1}>
        <p className={styles.valueText1}>2 guests</p>
      </div>
      <div className={styles.iconButton}>
        <div className={styles.iconButtonBase}>
          <img src={icon.src} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
