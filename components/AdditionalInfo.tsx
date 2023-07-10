import styles from "./AdditionalInfo.module.css";
export const AdditionalInfo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.additionalInfo}>
    <div className={styles.price}>
      <p className={styles.priceText}>Price</p>
      <p className={styles.priceAmount1_63Eth}>1.63 ETH</p>
    </div>
    <div className={styles.highestBid}>
      <p className={styles.highestBidText}>Highest Bid</p>
      <p className={styles.bidAmount0_33WEth}>0.33 wETH</p>
    </div>
   </div> 
  );
};
