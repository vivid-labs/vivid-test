import styles from "./AirbnbSearch.module.css";
import dividerImage2 from "./dividerImage2.svg";
import iconImage from "./iconImage.svg";
import dividerImage1 from "./dividerImage1.svg";
import dividerImage from "./dividerImage.svg";
import divider from "./divider.svg";
import icon from "./icon.svg";

export const AirbnbSearch = ({
  style,
  type,
}: {
  style?: any;
  type: string;
}) => {
  switch (type) {
    case "Trio":
      return (
        <div style={style} className={styles.airbnbSearch}>
          <div className={styles.attribute}>
            <p className={styles.value}>Bordeaux</p>
          </div>
          <img src={dividerImage2.src} className={styles.divider} />
          <div className={styles.attributeDiv}>
            <p className={styles.valueText}>Add dates</p>
          </div>
          <img src={dividerImage2.src} className={styles.dividerImage} />
          <div className={styles.attributeDiv1}>
            <p className={styles.valueText1}>Add guests</p>
          </div>
          <div className={styles.iconButton}>
            <div className={styles.iconButtonBase}>
              <img src={iconImage.src} className={styles.icon} />
            </div>
          </div>
        </div>
      );
    case "Search":
      return (
        <div style={style} className={styles.airbnbSearchComponent}>
          <div className={styles.attributeDiv2}>
            <p className={styles.valueText2}>Start your search</p>
          </div>
          <div className={styles.iconButtonDiv}>
            <div className={styles.iconButtonBaseDiv}>
              <img src={iconImage.src} className={styles.iconImage} />
            </div>
          </div>
        </div>
      );
    case "Full":
      return (
        <div style={style} className={styles.airbnbSearchComponent1}>
          <div className={styles.attributeDiv3}>
            <p className={styles.attributeText}>Location</p>
            <p className={styles.valueText3}>Where are you going?</p>
          </div>
          <img src={dividerImage1.src} className={styles.dividerImage1} />
          <div className={styles.attributeDiv4}>
            <p className={styles.attributeText1}>Check in</p>
            <p className={styles.valueText4}>Add dates</p>
          </div>
          <img src={dividerImage.src} className={styles.dividerImage2} />
          <div className={styles.attributeDiv5}>
            <p className={styles.attributeText2}>Check out</p>
            <p className={styles.valueText5}>Add dates</p>
          </div>
          <img src={divider.src} className={styles.dividerImage3} />
          <div className={styles.attributeDiv6}>
            <p className={styles.attributeText3}>Guests</p>
            <p className={styles.valueText6}>Add guests</p>
          </div>
          <div className={styles.iconButtonDiv1}>
            <div className={styles.iconButtonBaseDiv1}>
              <img src={icon.src} className={styles.iconImage1} />
            </div>
          </div>
        </div>
      );
  }
};
