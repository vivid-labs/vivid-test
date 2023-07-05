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
            <p className={styles.setupYourWallet}>Setup Your wallet</p>
            <p
              className={
                styles.setUpYourWalletOfChoiceConnectItToTheNftMarketByClickingTheWalletIconInTheTopRightCorner
              }
            >
              {bodyText}
            </p>
          </div>
        </div>
      );
    case "Info Card/Small":
      return (
        <div style={override} className={styles.infoCardComponent}>
          {icon}
          <div className={styles.cardDetailsDiv}>
            <p className={styles.setupYourWalletText}>Setup Your wallet</p>
            <p
              className={
                styles.setUpYourWalletOfChoiceConnectItToTheNftMarketByClickingTheWalletIconInTheTopRightCornerText
              }
            >
              {bodyText}
            </p>
          </div>
        </div>
      );
    case "Info Card/Horizontal":
      return (
        <div style={override} className={styles.infoCardComponent1}>
          {icon}
          <div className={styles.cardDetailsDiv1}>
            <p className={styles.setupYourWalletText1}>Setup Your wallet</p>
            <p
              className={
                styles.setUpYourWalletOfChoiceConnectItToTheNftMarketByClickingTheWalletIconInTheTopRightCornerText1
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
