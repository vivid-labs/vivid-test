import styles from "./DiscoverMoreNfTs.module.css";
import { Button } from "./Button";
import { Eye } from "./Eye";
import { NftCard } from "./NftCard";

export const DiscoverMoreNfTs = ({
  style,
  screen,
}: {
  style?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={style} className={styles.discoverMoreNfTs}>
          <div className={styles.sectionHeadlineAndButton}>
            <div className={styles.sectionHeadline}>
              <p className={styles.discoverMoreNfTsText}>Discover More NFTs</p>
              <p className={styles.exploreNewTrendingNfTs}>
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye />}
              hasText={true}
              text="See All"
            />
          </div>
          <div className={styles.nftCardsRow}>
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              style={{
                height: "469px",
              }}
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              style={{
                height: "469px",
              }}
            />
            <NftCard
              property_1="Default"
              nftName="NFT Name"
              artistAvatarName={true}
              artistName="NFT Artist"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              style={{
                height: "469px",
                flex: "1 1 0%",
              }}
            />
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div style={style} className={styles.discoverMoreNfTsComponent}>
          <div className={styles.sectionHeadlineAndButtonDiv}>
            <div className={styles.sectionHeadlineDiv}>
              <p className={styles.discoverMoreNfTsText1}>Discover More NFTs</p>
              <p className={styles.exploreNewTrendingNfTsText}>
                Explore new trending NFTs
              </p>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye />}
              hasText={true}
              text="See All"
              style={{
                width: "fit-content",
                height: "60px",
              }}
            />
          </div>
          <div className={styles.nftCardsRowDiv}>
            <NftCard
              property_1="Default"
              nftName="Distant Galaxy"
              artistAvatarName={true}
              artistName="MoonDancer"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              style={{
                height: "469px",
              }}
            />
            <NftCard
              property_1="Default"
              nftName="Life on Edena"
              artistAvatarName={true}
              artistName="NebulaKid"
              additionalInfo={true}
              priceNumber="1.63 ETH"
              bidNumber="0.33 wETH"
              style={{
                height: "469px",
              }}
            />
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.discoverMoreNfTsComponent1}>
          <div className={styles.sectionHeadlineAndButtonDiv1}>
            <div className={styles.sectionHeadlineDiv1}>
              <p className={styles.discoverMoreNfTsText2}>Discover More NFTs</p>
              <p className={styles.exploreNewTrendingNfTsText1}>
                Explore new trending NFTs
              </p>
            </div>
          </div>
          <div className={styles.frame_241}>
            <div className={styles.nftCardsRowDiv1}>
              <NftCard
                property_1="Small"
                nftName="Distant Galaxy"
                artistAvatarName={true}
                artistName="MoonDancer"
                additionalInfo={true}
                priceNumber="1.63 ETH"
                bidNumber="0.33 wETH"
                style={{
                  height: "402px",
                }}
              />
            </div>
            <div className={styles.nftCardsRowDiv2}>
              <NftCard
                property_1="Small"
                nftName="Life on Edena"
                artistAvatarName={true}
                artistName="NebulaKid"
                additionalInfo={true}
                priceNumber="1.63 ETH"
                bidNumber="0.33 wETH"
                style={{
                  height: "402px",
                }}
              />
            </div>
            <div className={styles.nftCardsRowDiv3}>
              <NftCard
                property_1="Small"
                nftName="AstroFiction"
                artistAvatarName={true}
                artistName="Spaceone"
                additionalInfo={true}
                priceNumber="1.63 ETH"
                bidNumber="0.33 wETH"
                style={{
                  height: "402px",
                }}
              />
            </div>
          </div>
          <div className={styles.sectionHeadlineAndButtonDiv2}>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<Eye />}
              hasText={true}
              text="See All"
              style={{
                height: "60px",
                flex: "1 1 0%",
              }}
            />
          </div>
        </div>
      );
  }
};
