import styles from "./InfoCard.module.css";
import { StartEarningIcon } from "./StartEarningIcon";
export const InfoCard = ({
  override,
  property_1,
  icon,
  bodyText,
}: {
  override?: any;
  property_1: string;
  icon: any;
  bodyText: string;
}) => {
  switch (property_1) {
    case "Info Card":
      return (
        <div style={override} className={styles.infoCard}>
        {icon}
        <div className={styles.cardDetails}>
          <p className={styles.setupWallet}>Setup Your wallet</p>
          <p
            className={
              styles.connectWallet
            }
          >
            {bodyText}
          </p>
        </div>
       </div>)
      );
    case "Info Card/Small":
      return (
       (<div style={override} className={styles.infoCardSmall}>
        {icon}
        <div className={styles.cardDetailsDiv}>
          <p className={styles.setupWalletText}>Setup Your wallet</p>
          <p
            className={
              styles.connectWalletText
            }
          >
            {bodyText}
          </p>
        </div>
       </div>)
      );
    case "Info Card/Horizontal":
      return (
       (<div style={override} className={styles.infoCardHorizontal}>
        {icon}
        <div className={styles.cardDetailsDiv1}>
          <p className={styles.setupWalletText1}>Setup Your wallet</p>
          <p
            className={
              styles.connectWalletText1
            }
          >
            {bodyText}
          </p>
        </div>
       </div> 
      );
    default:
      return null;
  }
};
