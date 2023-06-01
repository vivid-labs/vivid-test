import styles from "./HowItWorks.module.css";
import { InfoCard } from "./InfoCard";
import { SetupWalletIcon } from "./SetupWalletIcon";
import { CreateCollectionIcon } from "./CreateCollectionIcon";
import { StartEarningIcon } from "./StartEarningIcon";

export const HowItWorks = ({
  style,
  screen,
}: {
  style?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={style} className={styles.howItWorks}>
          <div className={styles.sectionHeadline}>
            <p className={styles.howItWorksText}>How it works</p>
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
    case "Tablet":
      return (
        <div style={style} className={styles.howItWorksComponent}>
          <div className={styles.sectionHeadlineDiv}>
            <p className={styles.howItWorksText1}>How it works</p>
            <p className={styles.findOutHowToGetStartedText}>
              Find out how to get started
            </p>
          </div>
          <div className={styles.cardRowDiv}>
            <InfoCard
              property_1="Info Card/Small"
              icon={<SetupWalletIcon />}
              bodyText="Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner."
              style={{
                gap: "20px",
                flex: "1 1 0%",
              }}
            />
            <InfoCard
              property_1="Info Card/Small"
              icon={<CreateCollectionIcon />}
              bodyText="Upload your work and setup your collection. Add a description, social links and floor price."
              style={{
                flex: "1 1 0%",
              }}
            />
            <InfoCard
              property_1="Info Card/Small"
              icon={<StartEarningIcon />}
              bodyText="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
              style={{
                flex: "1 1 0%",
              }}
            />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.howItWorksComponent1}>
          <div className={styles.sectionHeadlineDiv1}>
            <p className={styles.howItWorksText2}>How it works</p>
            <p className={styles.findOutHowToGetStartedText1}>
              Find out how to get started
            </p>
          </div>
          <div className={styles.cardRowDiv1}>
            <InfoCard
              property_1="Info Card/Horizontal"
              icon={<SetupWalletIcon />}
              bodyText="Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner."
              style={{
                height: "fit-content",
                width: "100%",
              }}
            />
            <InfoCard
              property_1="Info Card/Horizontal"
              icon={<CreateCollectionIcon />}
              bodyText="Upload your work and setup your collection. Add a description, social links and floor price."
              style={{
                height: "fit-content",
                width: "100%",
              }}
            />
            <InfoCard
              property_1="Info Card/Horizontal"
              icon={<StartEarningIcon />}
              bodyText="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
              style={{
                height: "fit-content",
                width: "100%",
              }}
            />
          </div>
        </div>
      );
  }
};
