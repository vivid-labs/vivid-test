import styles from "./AuctionTimer.module.css";
export const AuctionTimer = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.auctionTimer}>
    <p className={styles.auctionEndsIn}>Auction ends in:</p>
    <div className={styles.timer}>
      <div className={styles.hours}>
        <p className={styles.text_59}>59</p>
        <p className={styles.hoursText}>Hours</p>
      </div>
      <p className={styles.text}>:</p>
      <div className={styles.minutes}>
        <p className={styles.text_59Text}>59</p>
        <p className={styles.minutesText}>Minutes</p>
      </div>
      <p className={styles.textText}>:</p>
      <div className={styles.seconds}>
        <p className={styles.text_59Text_1}>59</p>
        <p className={styles.secondsText}>Seconds</p>
      </div>
    </div>
   </div> 
  );
};
