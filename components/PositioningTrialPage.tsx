import styles from "./PositioningTrialPage.module.css";

export const PositioningTrialPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.positioningTrialPage}>
      <div className={styles.pullTextOut}>
        <p className={styles.guests}>Guests</p>
        <p className={styles.checkOut}>Check out</p>
        <p className={styles.checkIn}>Check in</p>
        <p className={styles.location}>Location</p>
        <div className={styles.iconButtonBase} />
      </div>
      <div className={styles.simplifyIcon}>
        <div className={styles.attribute}>
          <p className={styles.locationText}>Location</p>
        </div>
        <div className={styles.attributeDiv}>
          <p className={styles.checkInText}>Check in</p>
        </div>
        <div className={styles.attributeDiv1}>
          <p className={styles.checkOutText}>Check out</p>
        </div>
        <div className={styles.attributeDiv2}>
          <p className={styles.guestsText}>Guests</p>
        </div>
        <div className={styles.iconButtonBaseDiv} />
      </div>
      <div className={styles.minimal}>
        <div className={styles.attributeDiv3}>
          <p className={styles.guestsText1}>Guests</p>
        </div>
        <div className={styles.iconButtonBaseDiv1} />
      </div>
    </div>
  );
};
