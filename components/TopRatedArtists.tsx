import styles from "./TopRatedArtists.module.css";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { ArtistCard } from "./ArtistCard";

export const TopRatedArtists = ({
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
          className={styles.topRatedArtists}
          figma-id="7:1326:14402"
        >
          <div
            className={styles.sectionHeadlineAndButton}
            figma-id="7:1326:14278"
          >
            <div className={styles.sectionHeadline} figma-id="7:1326:14279">
              <div className={styles.heading} figma-id="7:1326:14280">
                <p className={styles.topCreators} figma-id="7:1326:14281">
                  Top creators
                </p>
              </div>
              <div className={styles.subhead} figma-id="7:1326:14282">
                <p
                  className={styles.checkoutTopRatedCreatorsOnTheNftMarketplace}
                  figma-id="7:1326:14283"
                >
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch figma-id="7:" />}
              hasText={true}
              text="View Rankings"
              figma-id="7:1326:14284"
            />
          </div>
          <div className={styles.artistCardsGrid} figma-id="7:1326:14286">
            <div className={styles.artistCardsRow} figma-id="7:1326:14287">
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Keepitreal"
                totalSales="Total Sales:"
                rankingNumber="1"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14288"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="DigiLab"
                totalSales="Total Sales:"
                rankingNumber="2"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14289"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="GravityOne"
                totalSales="Total Sales:"
                rankingNumber="3"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14290"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Juanie"
                totalSales="Total Sales:"
                rankingNumber="4"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14291"
              />
            </div>
            <div className={styles.artistCardsRowDiv} figma-id="7:1326:14292">
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="BlueWhale"
                totalSales="Total Sales:"
                rankingNumber="5"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14293"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="mr fox"
                totalSales="Total Sales:"
                rankingNumber="6"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14294"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Shroomie"
                totalSales="Total Sales:"
                rankingNumber="7"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14295"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="robotica"
                totalSales="Total Sales:"
                rankingNumber="8"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14296"
              />
            </div>
            <div className={styles.artistCardsRowDiv1} figma-id="7:1326:14297">
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="RustyRobot"
                totalSales="Total Sales:"
                rankingNumber="9"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14298"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="animakid"
                totalSales="Total Sales:"
                rankingNumber="10"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14299"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Dotgu"
                totalSales="Total Sales:"
                rankingNumber="11"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14300"
              />
              <ArtistCard
                property_1="Default"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Ghiblier"
                totalSales="Total Sales:"
                rankingNumber="12"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1326:14301"
              />
            </div>
          </div>
        </div>
      );
    case "Tablet":
      return (
        <div
          style={override}
          className={styles.topRatedArtistsComponent}
          figma-id="7:1962:6491"
        >
          <div
            className={styles.sectionHeadlineAndButtonDiv}
            figma-id="7:1962:6402"
          >
            <div className={styles.sectionHeadlineDiv} figma-id="7:1962:6403">
              <div className={styles.headingDiv} figma-id="7:1962:6404">
                <p className={styles.topCreatorsText} figma-id="7:1962:6405">
                  Top creators
                </p>
              </div>
              <div className={styles.subheadDiv} figma-id="7:1962:6406">
                <p
                  className={
                    styles.checkoutTopRatedCreatorsOnTheNftMarketplaceText
                  }
                  figma-id="7:1962:6407"
                >
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
            </div>
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch figma-id="7:" />}
              hasText={true}
              text="View Rankings"
              override={{
                height: "60px",
                width: "fit-content",
              }}
              figma-id="7:1962:6408"
            />
          </div>
          <div className={styles.artistCardsGridDiv} figma-id="7:1962:6409">
            <div className={styles.artistCardsRowDiv2} figma-id="7:1962:6410">
              <ArtistCard
                property_1="Horizontal Big"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Keepitreal"
                totalSales="Total Sales:"
                rankingNumber="1"
                salesNumber="34.53 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1962:6411"
              />
              <ArtistCard
                property_1="Horizontal Big"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="DigiLab"
                totalSales="Total Sales:"
                rankingNumber="2"
                salesNumber="32.13 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1962:6412"
              />
            </div>
            <div className={styles.artistCardsRowDiv3} figma-id="7:1962:6413">
              <ArtistCard
                property_1="Horizontal Big"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="GravityOne"
                totalSales="Total Sales:"
                rankingNumber="3"
                salesNumber="28.93 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1962:6414"
              />
              <ArtistCard
                property_1="Horizontal Big"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Juanie"
                totalSales="Total Sales:"
                rankingNumber="4"
                salesNumber="25.30 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1962:6415"
              />
            </div>
            <div className={styles.artistCardsRowDiv4} figma-id="7:1962:6416">
              <ArtistCard
                property_1="Horizontal Big"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="BlueWhale"
                totalSales="Total Sales:"
                rankingNumber="5"
                salesNumber="22.22 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1962:6417"
              />
              <ArtistCard
                property_1="Horizontal Big"
                rankingNumber2={true}
                additionalInfo={true}
                artistName="Mr Fox"
                totalSales="Total Sales:"
                rankingNumber="6"
                salesNumber="19.28 ETH"
                override={{
                  height: "fit-content",
                  flex: "1 1 0%",
                }}
                figma-id="7:1962:6418"
              />
            </div>
          </div>
        </div>
      );
    case "Mobile":
      return (
        <div
          style={override}
          className={styles.topRatedArtistsComponent1}
          figma-id="7:1962:6568"
        >
          <div
            className={styles.sectionHeadlineAndButtonDiv1}
            figma-id="7:1962:6493"
          >
            <div className={styles.sectionHeadlineDiv1} figma-id="7:1962:6494">
              <div className={styles.headingDiv1} figma-id="7:1962:6495">
                <p className={styles.topCreatorsText1} figma-id="7:1962:6496">
                  Top creators
                </p>
              </div>
              <div className={styles.subheadDiv1} figma-id="7:1962:6497">
                <p
                  className={
                    styles.checkoutTopRatedCreatorsOnTheNftMarketplaceText1
                  }
                  figma-id="7:1962:6498"
                >
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
            </div>
          </div>
          <div className={styles.artistCardsRowDiv5} figma-id="7:1962:6499">
            <ArtistCard
              property_1="Horizontal Big"
              rankingNumber2={true}
              additionalInfo={true}
              artistName="Keepitreal"
              totalSales="Total Sales:"
              rankingNumber="1"
              salesNumber="34.53 ETH"
              figma-id="7:1962:6500"
            />
            <ArtistCard
              property_1="Horizontal Big"
              rankingNumber2={true}
              additionalInfo={true}
              artistName="DigiLab"
              totalSales="Total Sales:"
              rankingNumber="2"
              salesNumber="32.13 ETH"
              figma-id="7:1962:6501"
            />
            <ArtistCard
              property_1="Horizontal Big"
              rankingNumber2={true}
              additionalInfo={true}
              artistName="GravityOne"
              totalSales="Total Sales:"
              rankingNumber="3"
              salesNumber="28.93 ETH"
              figma-id="7:1962:6502"
            />
            <ArtistCard
              property_1="Horizontal Big"
              rankingNumber2={true}
              additionalInfo={true}
              artistName="Juanie"
              totalSales="Total Sales:"
              rankingNumber="4"
              salesNumber="25.30 ETH"
              figma-id="7:1962:6503"
            />
            <ArtistCard
              property_1="Horizontal Big"
              rankingNumber2={true}
              additionalInfo={true}
              artistName="BlueWhale"
              totalSales="Total Sales:"
              rankingNumber="5"
              salesNumber="22.22 ETH"
              figma-id="7:1962:6504"
            />
          </div>
          <div
            className={styles.sectionHeadlineAndButtonDiv2}
            figma-id="7:1962:6505"
          >
            <Button
              property_1="Secondary/Outlined"
              hasLeftIcon={true}
              leftIcon={<RocketLaunch figma-id="7:" />}
              hasText={true}
              text="View Rankings"
              override={{
                height: "60px",
                flex: "1 1 0%",
                minWidth: "0px",
              }}
              figma-id="7:1962:6506"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};
