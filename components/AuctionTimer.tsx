import styles from "./AuctionTimer.module.css";

export const AuctionTimer = () => {
  return (
    <div className={styles.auctionTimer0}>
      <p className={styles.auctionTimer1}>Auction ends in:</p>
      <div className={styles.auctionTimer2}>
        <div className={styles.auctionTimer3}>
          <p className={styles.auctionTimer4}>59</p>
          <p className={styles.auctionTimer5}>Hours</p>
        </div>
        <p className={styles.auctionTimer6}>:</p>
        <div className={styles.auctionTimer7}>
          <p className={styles.auctionTimer8}>59</p>
          <p className={styles.auctionTimer9}>Minutes</p>
        </div>
        <p className={styles.auctionTimer10}>:</p>
        <div className={styles.auctionTimer11}>
          <p className={styles.auctionTimer12}>59</p>
          <p className={styles.auctionTimer13}>Seconds</p>
        </div>
      </div>
    </div>
  );
};
