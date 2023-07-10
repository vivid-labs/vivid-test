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
      <div className={styles.text}>
        <p className={styles.hoursText}>59</p>
        <p className={styles.minutesText}>Minutes</p>
      </div>
      <p className={styles.secondsText}>:</p>
      <div className={styles.text59Text}>
        <p className={styles.textText}>59</p>
        <p className={styles.text59Text1}>Seconds</p>
      </div>
    </div>
   </div> 
  );
};
