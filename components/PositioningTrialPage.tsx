import styles from "./PositioningTrialPage.module.css";
import dividerImage1 from "./dividerImage1.svg";
import dividerImage from "./dividerImage.svg";
import divider from "./divider.svg";
import icon from "./icon.svg";

export const PositioningTrialPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.positioningTrialPage}>
      <div className={styles.airbnbSearch}>
        <div className={styles.attribute}>
          <p className={styles.location}>Location</p>
          <p className={styles.whereAreYouGoingq}>Where are you going?</p>
        </div>
        <img src={dividerImage1.src} className={styles.divider} />
        <div className={styles.attributeDiv}>
          <p className={styles.checkIn}>Check in</p>
          <p className={styles.addDates}>Add dates</p>
        </div>
        <img src={dividerImage.src} className={styles.dividerImage} />
        <div className={styles.attributeDiv1}>
          <p className={styles.checkOut}>Check out</p>
          <p className={styles.addDatesText}>Add dates</p>
        </div>
        <img src={divider.src} className={styles.dividerImage1} />
        <div className={styles.attributeDiv2}>
          <p className={styles.guests}>Guests</p>
          <p className={styles.addGuests}>Add guests</p>
        </div>
        <div className={styles.iconButton}>
          <div className={styles.iconButtonBase}>
            <img src={icon.src} className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.simplified}>
        <div className={styles.attributeDiv3}>
          <p className={styles.locationText}>Location</p>
        </div>
        <div className={styles.attributeDiv4}>
          <p className={styles.checkInText}>Check in</p>
        </div>
        <div className={styles.attributeDiv5}>
          <p className={styles.checkOutText}>Check out</p>
        </div>
        <div className={styles.attributeDiv6}>
          <p className={styles.guestsText}>Guests</p>
        </div>
        <div className={styles.iconButtonDiv}>
          <div className={styles.iconButtonBaseDiv} />
        </div>
      </div>
      <div className={styles.simplifyIcon}>
        <div className={styles.attributeDiv7}>
          <p className={styles.locationText1}>Location</p>
        </div>
        <div className={styles.attributeDiv8}>
          <p className={styles.checkInText1}>Check in</p>
        </div>
        <div className={styles.attributeDiv9}>
          <p className={styles.checkOutText1}>Check out</p>
        </div>
        <div className={styles.attributeDiv10}>
          <p className={styles.guestsText1}>Guests</p>
        </div>
        <div className={styles.iconButtonBaseDiv1} />
      </div>
      <div className={styles.minimal}>
        <div className={styles.attributeDiv11}>
          <p className={styles.guestsText2}>Guests</p>
        </div>
        <div className={styles.iconButtonBaseDiv2} />
      </div>
    </div>
  );
};
