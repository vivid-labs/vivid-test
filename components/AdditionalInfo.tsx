import styles from "./AdditionalInfo.module.css";
export const AdditionalInfo = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.infoContainer}>
    <div className={styles.priceContainer}>
      <p className={styles.priceText}>Price</p>
      <p className={styles.ethPrice}>1.63 ETH</p>
    </div>
    <div className={styles.bidContainer}>
      <p className={styles.bidText}>Highest Bid</p>
      <p className={styles.wethPrice}>0.33 wETH</p>
    </div>
   </div> 
  );
};
