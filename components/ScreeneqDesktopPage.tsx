import styles from "./ScreeneqDesktopPage.module.css";
import { InfoCard } from "./InfoCard";
import { SetupWalletIcon } from "./SetupWalletIcon";
import { CreateCollectionIcon } from "./CreateCollectionIcon";
import { StartEarningIcon } from "./StartEarningIcon";

export const ScreeneqDesktopPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.screeneqDesktopPage}>
      <div className={styles.sectionHeadline}>
        <p className={styles.howItWorks}>How it works</p>
        <p className={styles.findOutHowToGetStarted}>
          Find out how to get started
        </p>
      </div>
      <div className={styles.cardRow}>
        <InfoCard
          property_1="Info Card"
          icon={<SetupWalletIcon />}
          bodyText="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
          style={{
            height: "fit-content",
          }}
        />
        <InfoCard
          property_1="Info Card"
          icon={<CreateCollectionIcon />}
          bodyText="Upload your work and setup your collection. Add a description, social links and floor price."
          style={{
            flex: "1 1 0%",
          }}
        />
        <InfoCard
          property_1="Info Card"
          icon={<StartEarningIcon />}
          bodyText="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          style={{
            flex: "1 1 0%",
          }}
        />
      </div>
    </div>
  );
};
