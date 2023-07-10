import styles from "./AuctionTimer.module.css";
export const AuctionTimer = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container}>
    <p className={styles.endsIn}>Auction ends in:</p>
    <div className={styles.timerContainer}>
      <div className={styles.hoursContainer}>
        <p className={styles.hours}>59</p>
        <p className={styles.hoursText}>Hours</p>
      </div>
      <p className={styles.separator}>:</p>
      <div className={styles.minutesContainer}>
        <p className={styles.minutes}>59</p>
        <p className={styles.minutesText}>Minutes</p>
      </div>
      <p className={styles.separator}>:</p>
      <div className={styles.secondsContainer}>
        <p className={styles.seconds}>59</p>
        <p className={styles.secondsText}>Seconds</p>
      </div>
    </div>
   </div> 
  );
};
