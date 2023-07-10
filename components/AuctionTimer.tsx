import styles from "./AuctionTimer.module.css";
export const AuctionTimer = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.auctionTimer}>
    <p className={styles.auctionEndsIn}>Auction ends in:</p>
    <div className={styles.timer}>
      <div className={styles.hours}>
        <p className={styles.minutes}>59</p>
        <p className={styles.seconds}>Hours</p>
      </div>
      <p className={styles.text59}>:</p>
      <div className={styles.hoursText}>
        <p className={styles.text}>59</p>
        <p className={styles.text59Text}>Minutes</p>
      </div>
      <p className={styles.minutesText}>:</p>
      <div className={styles.textText}>
        <p className={styles.secondsText}>59</p>
        <p className={styles.text59Text1}>Seconds</p>
      </div>
    </div>
   </div> 
  );
};
