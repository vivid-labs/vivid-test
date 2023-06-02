import styles from "./PositioningTrialPage.module.css";

export const PositioningTrialPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.positioningTrialPage}>
      <div className={styles.simplifyIcon}>
        <p className={styles.location}>Location</p>
        <p className={styles.checkIn}>Check in</p>
        <p className={styles.checkOut}>Check out</p>
        <p className={styles.guests}>Guests</p>
        <div className={styles.iconButtonBase} />
      </div>
      <div className={styles.minimal}>
        <p className={styles.guestsText}>Guests</p>
        <div className={styles.iconButtonBaseDiv} />
      </div>
    </div>
  );
};
