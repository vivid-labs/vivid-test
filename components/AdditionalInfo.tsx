import styles from "./AdditionalInfo.module.css";
export const AdditionalInfo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.additionalInfo}>
    <div className={styles.priceContainer}>
      <p className={styles.priceText}>Price</p>
      <p className={styles.priceValue}>1.63 ETH</p>
    </div>
    <div className={styles.highestBidContainer}>
      <p className={styles.highestBidText}>Highest Bid</p>
      <p className={styles.highestBidValue}>0.33 wETH</p>
    </div>
   </div> 
  );
};
