import styles from "./HeroSection.module.css";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { HighlightedNft } from "./HighlightedNft";

export const HeroSection = ({
  style,
  screen,
}: {
  style?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Dekstop":
      return (
        <div style={style} className={styles.heroSection}>
          <div className={styles.heroSectionFrame}>
            <div className={styles.heroTextAndButtons}>
              <div className={styles.headlineAndSubhead}>
                <p className={styles.discoverDigitalArtAndCollectNfTs}>
                  Discover digital art &amp; Collect NFTs
                </p>
                <p
                  className={
                    styles.nftMarketplaceUiCreatedWithAnimaForFigmaCollectBuyAndSellArtFromMoreThan_20kNftArtists
                  }
                >
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <Button
                property_1="Secondary/Filled"
                hasLeftIcon={true}
                leftIcon={<RocketLaunch />}
                hasText={true}
                text="Get Started"
              />
              <div className={styles.additionalInfo}>
                <div className={styles.totalSale}>
                  <p className={styles.text240k}>240k+ </p>
                  <p className={styles.totalSaleText}>Total Sale</p>
                </div>
                <div className={styles.auctions}>
                  <p className={styles.text100k}>100k+</p>
                  <p className={styles.auctionsText}>Auctions</p>
                </div>
                <div className={styles.artists}>
                  <p className={styles.text240kText}>240k+</p>
                  <p className={styles.artistsText}>Artists</p>
                </div>
              </div>
            </div>
            <HighlightedNft />
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div style={style} className={styles.heroSectionComponent}>
          <div className={styles.heroSectionFrameDiv}>
            <div className={styles.heroTextAndButtonsDiv}>
              <div className={styles.headlineAndSubheadDiv}>
                <p className={styles.discoverDigitalArtAndCollectNfTsText}>
                  Discover digital art &amp; Collect NFTs
                </p>
                <p
                  className={
                    styles.nftMarketplaceUiCreatedWithAnimaForFigmaCollectBuyAndSellArtFromMoreThan_20kNftArtistsText
                  }
                >
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <Button
                property_1="Secondary/Filled"
                hasLeftIcon={true}
                leftIcon={<RocketLaunch />}
                hasText={true}
                text="Get Started"
                style={{}}
              />
              <div className={styles.additionalInfoDiv}>
                <div className={styles.totalSaleDiv}>
                  <p className={styles.text240kText1}>240k+ </p>
                  <p className={styles.totalSaleText1}>Total Sale</p>
                </div>
                <div className={styles.auctionsDiv}>
                  <p className={styles.text100kText}>100k+</p>
                  <p className={styles.auctionsText1}>Auctions</p>
                </div>
                <div className={styles.artistsDiv}>
                  <p className={styles.text240kText2}>240k+</p>
                  <p className={styles.artistsText1}>Artists</p>
                </div>
              </div>
            </div>
            <HighlightedNft style={{}} />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.heroSectionComponent1}>
          <div className={styles.heroSectionFrameDiv1}>
            <div className={styles.heroTextAndButtonsDiv1}>
              <div className={styles.headlineAndSubheadDiv1}>
                <p className={styles.discoverDigitalArtAndCollectNfTsText1}>
                  Discover digital art &amp; Collect NFTs
                </p>
                <p
                  className={
                    styles.nftMarketplaceUiCreatedWithAnimaForFigmaCollectBuyAndSellArtFromMoreThan_20kNftArtistsText1
                  }
                >
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <HighlightedNft
                style={{
                  height: "348px",
                  width: "100%",
                }}
              />
              <Button
                property_1="Secondary/Filled"
                hasLeftIcon={true}
                leftIcon={<RocketLaunch />}
                hasText={true}
                text="Get Started"
                style={{
                  height: "60px",
                  width: "100%",
                }}
              />
              <div className={styles.additionalInfoDiv1}>
                <div className={styles.totalSaleDiv1}>
                  <p className={styles.text240kText3}>240k+ </p>
                  <p className={styles.totalSaleText2}>Total Sale</p>
                </div>
                <div className={styles.auctionsDiv1}>
                  <p className={styles.text100kText1}>100k+</p>
                  <p className={styles.auctionsText2}>Auctions</p>
                </div>
                <div className={styles.artistsDiv1}>
                  <p className={styles.text240kText4}>240k+</p>
                  <p className={styles.artistsText2}>Artists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
