import styles from "./TopRatedArtists.module.css";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { ArtistCard } from "./ArtistCard";

export const TopRatedArtists = ({
  style,
  screen,
}: {
  style?: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={style} className={styles.topRatedArtists}>
          <div className={styles.sectionHeadlineAndButton}>
            <div className={styles.sectionHeadline}>
              <div className={styles.heading}>
                <p className={styles.topCreators}>Top creators</p>
              </div>
              <div className={styles.subhead}>
                <p
                  className={styles.checkoutTopRatedCreatorsOnTheNftMarketplace}
                >
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch />}
              hasText={true}
              text="View Rankings"
            />
          </div>
          <div className={styles.artistCardsGrid}>
            <div className={styles.artistCardsRow}>
              <ArtistCard
                property_1="Default"
                artistName="Keepitreal"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="1"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="DigiLab"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="2"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="GravityOne"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="3"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="Juanie"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="4"
                style={{
                  height: "fit-content",
                }}
              />
            </div>
            <div className={styles.artistCardsRowDiv}>
              <ArtistCard
                property_1="Default"
                artistName="BlueWhale"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="5"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="mr fox"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="6"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="Shroomie"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="7"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="robotica"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="8"
                style={{
                  height: "fit-content",
                }}
              />
            </div>
            <div className={styles.artistCardsRowDiv1}>
              <ArtistCard
                property_1="Default"
                artistName="RustyRobot"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="9"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="animakid"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="10"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="Dotgu"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="11"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Default"
                artistName="Ghiblier"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="12"
                style={{
                  height: "fit-content",
                }}
              />
            </div>
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div style={style} className={styles.topRatedArtistsComponent}>
          <div className={styles.sectionHeadlineAndButtonDiv}>
            <div className={styles.sectionHeadlineDiv}>
              <div className={styles.headingDiv}>
                <p className={styles.topCreatorsText}>Top creators</p>
              </div>
              <div className={styles.subheadDiv}>
                <p
                  className={
                    styles.checkoutTopRatedCreatorsOnTheNftMarketplaceText
                  }
                >
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch />}
              hasText={true}
              text="View Rankings"
              style={{
                height: "60px",
                width: "fit-content",
              }}
            />
          </div>
          <div className={styles.artistCardsGridDiv}>
            <div className={styles.artistCardsRowDiv2}>
              <ArtistCard
                property_1="Horizontal Big"
                artistName="Keepitreal"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="1"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Horizontal Big"
                artistName="DigiLab"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="32.13 ETH"
                rankingNumber2={true}
                rankingNumber="2"
                style={{
                  height: "fit-content",
                }}
              />
            </div>
            <div className={styles.artistCardsRowDiv3}>
              <ArtistCard
                property_1="Horizontal Big"
                artistName="GravityOne"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="28.93 ETH"
                rankingNumber2={true}
                rankingNumber="3"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Horizontal Big"
                artistName="Juanie"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="25.30 ETH"
                rankingNumber2={true}
                rankingNumber="4"
                style={{
                  height: "fit-content",
                }}
              />
            </div>
            <div className={styles.artistCardsRowDiv4}>
              <ArtistCard
                property_1="Horizontal Big"
                artistName="BlueWhale"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="22.22 ETH"
                rankingNumber2={true}
                rankingNumber="5"
                style={{
                  height: "fit-content",
                }}
              />
              <ArtistCard
                property_1="Horizontal Big"
                artistName="Mr Fox"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="19.28 ETH"
                rankingNumber2={true}
                rankingNumber="6"
                style={{
                  height: "fit-content",
                }}
              />
            </div>
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div style={style} className={styles.topRatedArtistsComponent1}>
          <div className={styles.sectionHeadlineAndButtonDiv1}>
            <div className={styles.sectionHeadlineDiv1}>
              <div className={styles.headingDiv1}>
                <p className={styles.topCreatorsText1}>Top creators</p>
              </div>
              <div className={styles.subheadDiv1}>
                <p
                  className={
                    styles.checkoutTopRatedCreatorsOnTheNftMarketplaceText1
                  }
                >
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
            </div>
          </div>
          <div className={styles.artistCardsRowDiv5}>
            <ArtistCard
              property_1="Horizontal Big"
              artistName="Keepitreal"
              additionalInfo={true}
              totalSales="Total Sales:"
              salesNumber="34.53 ETH"
              rankingNumber2={true}
              rankingNumber="1"
            />
            <ArtistCard
              property_1="Horizontal Big"
              artistName="DigiLab"
              additionalInfo={true}
              totalSales="Total Sales:"
              salesNumber="32.13 ETH"
              rankingNumber2={true}
              rankingNumber="2"
            />
            <ArtistCard
              property_1="Horizontal Big"
              artistName="GravityOne"
              additionalInfo={true}
              totalSales="Total Sales:"
              salesNumber="28.93 ETH"
              rankingNumber2={true}
              rankingNumber="3"
            />
            <ArtistCard
              property_1="Horizontal Big"
              artistName="Juanie"
              additionalInfo={true}
              totalSales="Total Sales:"
              salesNumber="25.30 ETH"
              rankingNumber2={true}
              rankingNumber="4"
            />
            <ArtistCard
              property_1="Horizontal Big"
              artistName="BlueWhale"
              additionalInfo={true}
              totalSales="Total Sales:"
              salesNumber="22.22 ETH"
              rankingNumber2={true}
              rankingNumber="5"
            />
          </div>
          <div className={styles.sectionHeadlineAndButtonDiv2}>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch />}
              hasText={true}
              text="View Rankings"
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
