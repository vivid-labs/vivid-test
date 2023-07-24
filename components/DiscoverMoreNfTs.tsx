import styles from "./DiscoverMoreNfTs.module.css";
import { Button } from "./Button";
import { Eye } from "./Eye";
import { NftCard } from "./NftCard";

export const DiscoverMoreNfTs = ({
  override,
  screen,
}: {
  override?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div
          style={override}
          className={styles.discoverMoreNfTsComponent}
          figma-id="7:1326:14550"
        >
          <div
            className={styles.sectionHeadlineAndButton}
            figma-id="7:1616:8570"
          >
            <div className={styles.sectionHeadline} figma-id="7:1616:8571">
              <p className={styles.discoverMoreNfTs} figma-id="7:1616:8573">
                Discover More NFTs
              </p>
              <p
                className={styles.exploreNewTrendingNfTs}
                figma-id="7:1616:8575"
              >
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye figma-id="7:" />}
              hasText={true}
              text="See All"
              figma-id="7:1616:8576"
            />
          </div>
          <div className={styles.nftCardsRow} figma-id="7:1326:14476">
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1326:14477"
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1326:14478"
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
                minWidth: "0px",
              }}
              figma-id="7:1326:14479"
            />
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div
          style={override}
          className={styles.discoverMoreNfTsComponent1}
          figma-id="7:1962:6832"
        >
          <div
            className={styles.sectionHeadlineAndButtonDiv}
            figma-id="7:1962:6786"
          >
            <div className={styles.sectionHeadlineDiv} figma-id="7:1962:6787">
              <p className={styles.discoverMoreNfTsText} figma-id="7:1962:6788">
                Discover More NFTs
              </p>
              <p
                className={styles.exploreNewTrendingNfTsText}
                figma-id="7:1962:6789"
              >
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye figma-id="7:" />}
              hasText={true}
              text="See All"
              override={{
                padding: "0px 50px",
                width: "fit-content",
                height: "60px",
              }}
              figma-id="7:1962:6790"
            />
          </div>
          <div className={styles.nftCardsRowDiv} figma-id="7:1962:6791">
            <NftCard
              property_1="Default"
              nftName="Distant Galaxy"
              artistAvatarName={true}
              artistName="MoonDancer"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:6792"
            />
            <NftCard
              property_1="Default"
              nftName="Life on Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                height: "469px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:6793"
            />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div
          style={override}
          className={styles.discoverMoreNfTsComponent2}
          figma-id="7:1962:9246"
        >
          <div className={styles.sectionHeadlineDiv1} figma-id="7:1962:9176">
            <p className={styles.discoverMoreNfTsText1} figma-id="7:1962:9177">
              Discover More NFTs
            </p>
            <p
              className={styles.exploreNewTrendingNfTsText1}
              figma-id="7:1962:9178"
            >
              Explore new trending NFTs
            </p>
          </div>
          <div className={styles.nftCardsRowDiv1} figma-id="7:1962:9179">
            <NftCard
              property_1="Small"
              nftName="Distant Galaxy"
              artistAvatarName={true}
              artistName="MoonDancer"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                width: "315px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:9181"
            />
            <NftCard
              property_1="Small"
              nftName="Life on Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                width: "315px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:9183"
            />
            <NftCard
              property_1="Small"
              nftName="AstroFiction"
              artistAvatarName={true}
              artistName="Spaceone"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              override={{
                width: "315px",
                flex: "1 1 0%",
              }}
              figma-id="7:1962:9185"
            />
          </div>
          <Button
            property_1="Secondary/Outlined"
            hasLeftIcon={true}
            leftIcon={<Eye figma-id="7:" />}
            hasText={true}
            text="See All"
            override={{
              padding: "0px 50px",
              width: "315px",
              flex: "1 1 0%",
              minHeight: "0px",
            }}
            figma-id="7:1962:9187"
          />
        </div>
      );
    default:
      return null;
  }
};
