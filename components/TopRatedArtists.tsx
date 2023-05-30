import styles from "./TopRatedArtists.module.css";
import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";
import { ArtistCard } from "./ArtistCard";

export const TopRatedArtists = ({
  style,
  screen,
}: {
  style: any;
  screen: string;
}) => {
  switch (screen) {
    case "Desktop":
      return (
        <div style={style} className={styles.topRatedArtists0}>
          <div className={styles.topRatedArtists1}>
            <div className={styles.topRatedArtists2}>
              <div className={styles.topRatedArtists3}>
                <p className={styles.topRatedArtists4}>Top creators</p>
              </div>
              <div className={styles.topRatedArtists5}>
                <p className={styles.topRatedArtists6}>
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
          <div className={styles.topRatedArtists7}>
            <div className={styles.topRatedArtists8}>
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
            <div className={styles.topRatedArtists9}>
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
            <div className={styles.topRatedArtists10}>
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
        <div style={style} className={styles.topRatedArtists11}>
          <div className={styles.topRatedArtists12}>
            <div className={styles.topRatedArtists13}>
              <div className={styles.topRatedArtists14}>
                <p className={styles.topRatedArtists15}>Top creators</p>
              </div>
              <div className={styles.topRatedArtists16}>
                <p className={styles.topRatedArtists17}>
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
          <div className={styles.topRatedArtists18}>
            <div className={styles.topRatedArtists19}>
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
            <div className={styles.topRatedArtists20}>
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
            <div className={styles.topRatedArtists21}>
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
        <div style={style} className={styles.topRatedArtists22}>
          <div className={styles.topRatedArtists23}>
            <div className={styles.topRatedArtists24}>
              <div className={styles.topRatedArtists25}>
                <p className={styles.topRatedArtists26}>Top creators</p>
              </div>
              <div className={styles.topRatedArtists27}>
                <p className={styles.topRatedArtists28}>
                  Checkout Top Rated Creators on the NFT Marketplace
                </p>
              </div>
            </div>
          </div>
          <div className={styles.topRatedArtists29}>
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
          <div className={styles.topRatedArtists30}>
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
