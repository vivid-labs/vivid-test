import styles from "./ScreenDesktop.module.css";
import { ArtistCard } from "./ArtistCard";
import { Globe } from "./Globe";
import { Button } from "./Button";
import { Wallet } from "./Wallet";
import { AuctionTimer } from "./AuctionTimer";
export const ScreenDesktop = ({ override }: { override?: any }) => {
  const buttonProps = [
    {
      property_1: "Tertiary/Filled",
      hasLeftIcon: true,
      leftIcon: <Wallet />,
      hasText: true,
      text: "Animation",
      override: {
        padding: "0px 30px",
        backgroundColor: "rgb(59, 59, 59)",
      },
    },
    {
      property_1: "Tertiary/Filled",
      hasLeftIcon: true,
      leftIcon: <Wallet />,
      hasText: true,
      text: "illustration",
      override: {
        padding: "0px 30px",
        backgroundColor: "rgb(59, 59, 59)",
      },
    },
    {
      property_1: "Tertiary/Filled",
      hasLeftIcon: true,
      leftIcon: <Wallet />,
      hasText: true,
      text: "moon",
      override: {
        padding: "0px 30px",
        backgroundColor: "rgb(59, 59, 59)",
      },
    },
    {
      property_1: "Tertiary/Filled",
      hasLeftIcon: true,
      leftIcon: <Wallet />,
      hasText: true,
      text: "moon",
      override: {
        padding: "0px 30px",
        backgroundColor: "rgb(59, 59, 59)",
      },
    },
  ];
  return (
    <div style={override} className={styles.screenDesktop}>
    <div className={styles.artistInfoSection}>
      <div className={styles.nftInfo}>
        <div className={styles.nftInfoDiv}>
          <div className={styles.headlineSubhead}>
            <p className={styles.artistName}>The Orbitians</p>
            <p className={styles.mintedOnSep_30_2022}>
              Minted on Sep 30, 2022
            </p>
          </div>
          <div className={styles.additionalInfo}>
            <div className={styles.createdBy}>
              <p className={styles.createdByText}>Created By</p>
              <ArtistCard
                property_1="Horizontal Medium"
                artistName="Orbitian"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="1"
                override={{
                  height: "fit-content",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionText}>Description</p>
              <p
                className={
                  styles.orbitiansInfo
                }
              >
                The Orbitians
                <br />
                is a collection of 10,000 unique NFTs on the Ethereum
                blockchain, There are all sorts of beings in the NFT Universe.
                The most advanced and friendly of the bunch are Orbitians.
                They live in a metal space machines, high up in the sky and
                only have one foot on Earth.
                <br />
                These Orbitians are a peaceful race, but they have been at war
                with a group of invaders for many generations. The invaders
                are called Upside-Downs, because of their inverted bodies that
                live on the ground, yet do not know any other way to be.
                Upside-Downs believe that they will be able to win this war if
                they could only get an eye into Orbitian territory, so
                they&#39;ve taken to make human beings their target.
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsText}>Details</p>
              <div className={styles.websiteLink}>
                <Globe />
                <p className={styles.viewOnEtherscan}>View on Etherscan</p>
              </div>
              <div className={styles.websiteLinkDiv}>
                <Globe />
                <p className={styles.viewOriginal}>View Original</p>
              </div>
            </div>
            <div className={styles.tags}>
              <p className={styles.tagsText}>Tags</p>
              <div className={styles.frame243}>
                {buttonProps.map((props, i) => (
                  <Button {...props} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.auctionTimerCta}>
          <AuctionTimer
            override={{
              height: "fit-content",
              width: "100%",
            }}
          />
          <Button
            property_1="Secondary/Filled"
            hasLeftIcon={true}
            leftIcon={<Wallet />}
            hasText={true}
            text="Place Bid"
            override={{
              height: "60px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
   </div> 
  );
};
