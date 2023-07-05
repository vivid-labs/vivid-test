import styles from "./ScreeneqTablet.module.css";
import { InfoCard } from "./InfoCard";
import { SetupWalletIcon } from "./SetupWalletIcon";
import { CreateCollectionIcon } from "./CreateCollectionIcon";
import { StartEarningIcon } from "./StartEarningIcon";
export const ScreeneqTablet = ({ override }: { override?: any }) => {
  const infoCardProps = [
    {
      property_1: "Info Card/Small",
      icon: <SetupWalletIcon />,
      bodyText:
        "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
      override: {
        gap: "20px",
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
    {
      property_1: "Info Card/Small",
      icon: <CreateCollectionIcon />,
      bodyText:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
      override: {
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
    {
      property_1: "Info Card/Small",
      icon: <StartEarningIcon />,
      bodyText:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      override: {
        flex: "1 1 0%",
        minWidth: "0px",
      },
    },
  ];
  return (
    <div style={override} className={styles.screeneqTablet}>
      <div className={styles.sectionHeadline}>
        <p className={styles.howItWorks}>How it works</p>
        <p className={styles.findOutHowToGetStarted}>
          Find out how to get started
        </p>
      </div>
      <div className={styles.cardRow}>
        {infoCardProps.map((props, i) => (
          <InfoCard {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
