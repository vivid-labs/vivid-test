import styles from "./ArtistInfo.module.css";
import { ArtistCard } from "./ArtistCard";
import { Globe } from "./Globe";
import { Button } from "./Button";
import { Wallet } from "./Wallet";
import { AuctionTimer } from "./AuctionTimer";

export const ArtistInfo = ({ screen }: { screen: string }) => {
  switch (screen) {
    case "Desktop":
      return (
        <div className={styles.artistInfo0}>
          <div className={styles.artistInfo1}>
            <div className={styles.artistInfo2}>
              <div className={styles.artistInfo3}>
                <div className={styles.artistInfo4}>
                  <p className={styles.artistInfo5}>The Orbitians</p>
                  <p className={styles.artistInfo6}>Minted on Sep 30, 2022</p>
                </div>
                <div className={styles.artistInfo7}>
                  <div className={styles.artistInfo8}>
                    <p className={styles.artistInfo9}>Created By</p>
                    <ArtistCard
                      property_1="Horizontal Medium"
                      artistName="Orbitian"
                      additionalInfo={true}
                      totalSales="Total Sales:"
                      salesNumber="34.53 ETH"
                      rankingNumber2={true}
                      rankingNumber="1"
                    />
                  </div>
                  <div className={styles.artistInfo10}>
                    <p className={styles.artistInfo11}>Description</p>
                    <p className={styles.artistInfo12}>
                      The Orbitians
                      <br />
                      is a collection of 10,000 unique NFTs on the Ethereum
                      blockchain,  There are all sorts of beings in the NFT
                      Universe. The most advanced and friendly of the bunch are
                      Orbitians.   They live in a metal space machines, high up
                      in the sky and only have one foot on Earth.
                      <br />
                      These Orbitians are a peaceful race, but they have been at
                      war with a group of invaders for many generations. The
                      invaders are called Upside-Downs, because of their
                      inverted bodies that live on the ground, yet do not know
                      any other way to be. Upside-Downs believe that they will
                      be able to win this war if they could only get an eye into
                      Orbitian territory, so they've taken to make human beings
                      their target.
                    </p>
                  </div>
                  <div className={styles.artistInfo13}>
                    <p className={styles.artistInfo14}>Details</p>
                    <div className={styles.artistInfo15}>
                      <Globe />
                      <p className={styles.artistInfo16}>View on Etherscan</p>
                    </div>
                    <div className={styles.artistInfo17}>
                      <Globe />
                      <p className={styles.artistInfo18}>View Original</p>
                    </div>
                  </div>
                  <div className={styles.artistInfo19}>
                    <p className={styles.artistInfo20}>Tags</p>
                    <div className={styles.artistInfo21}>
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="Animation"
                      />
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="illustration"
                      />
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="moon"
                      />
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="moon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.artistInfo22}>
                <AuctionTimer />
                <Button
                  property_1="Secondary/Filled"
                  hasLeftIcon={true}
                  leftIcon={<Wallet />}
                  hasText={true}
                  text="Place Bid"
                />
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "Tablet":
      return (
        <div className={styles.artistInfo23}>
          <div className={styles.artistInfo24}>
            <div className={styles.artistInfo25}>
              <div className={styles.artistInfo26}>
                <div className={styles.artistInfo27}>
                  <p className={styles.artistInfo28}>The Orbitians</p>
                  <p className={styles.artistInfo29}>Minted on Sep 30, 2022</p>
                </div>
                <div className={styles.artistInfo30}>
                  <div className={styles.artistInfo31}>
                    <p className={styles.artistInfo32}>Created By</p>
                    <ArtistCard
                      property_1="Horizontal Small"
                      artistName="Orbitian"
                      additionalInfo={true}
                      totalSales="Total Sales:"
                      salesNumber="34.53 ETH"
                      rankingNumber2={true}
                      rankingNumber="1"
                    />
                  </div>
                  <div className={styles.artistInfo33}>
                    <p className={styles.artistInfo34}>Description</p>
                    <p className={styles.artistInfo35}>
                      The Orbitians
                      <br />
                      is a collection of 10,000 unique NFTs on the Ethereum
                      blockchain,  There are all sorts of beings in the NFT
                      Universe. The most advanced and friendly of the bunch are
                      Orbitians.   They live in a metal space machines, high up
                      in the sky and only have one foot on Earth.
                      <br />
                      These Orbitians are a peaceful race, but they have been at
                      war with a group of invaders for many generations. The
                      invaders are called Upside-Downs, because of their
                      inverted bodies that live on the ground, yet do not know
                      any other way to be. Upside-Downs believe that they will
                      be able to win this war if they could only get an eye into
                      Orbitian territory, so they've taken to make human beings
                      their target.
                    </p>
                  </div>
                  <div className={styles.artistInfo36}>
                    <p className={styles.artistInfo37}>Details</p>
                    <div className={styles.artistInfo38}>
                      <Globe />
                      <p className={styles.artistInfo39}>View on Etherscan</p>
                    </div>
                    <div className={styles.artistInfo40}>
                      <Globe />
                      <p className={styles.artistInfo41}>View Original</p>
                    </div>
                  </div>
                  <div className={styles.artistInfo42}>
                    <p className={styles.artistInfo43}>Tags</p>
                    <div className={styles.artistInfo44}>
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="Animation"
                      />
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="illustration"
                      />
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="moon"
                      />
                      <Button
                        property_1="Tertiary/Filled"
                        hasLeftIcon={true}
                        leftIcon={<Wallet />}
                        hasText={true}
                        text="moon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.artistInfo45}>
                <AuctionTimer />
                <Button
                  property_1="Secondary/Filled"
                  hasLeftIcon={true}
                  leftIcon={<Wallet />}
                  hasText={true}
                  text="Place Bid"
                />
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "NFT Info":
      return (
        <div className={styles.artistInfo46}>
          <div className={styles.artistInfo47}>
            <div className={styles.artistInfo48}>
              <p className={styles.artistInfo49}>The Orbitians</p>
              <p className={styles.artistInfo50}>Minted on Sep 30, 2022</p>
            </div>
            <div className={styles.artistInfo51}>
              <AuctionTimer />
              <Button
                property_1="Secondary/Filled"
                hasLeftIcon={true}
                leftIcon={<Wallet />}
                hasText={true}
                text="Place Bid"
              />
            </div>
            <div className={styles.artistInfo52}>
              <p className={styles.artistInfo53}>Created By</p>
              <ArtistCard
                property_1="Horizontal Small"
                artistName="Dish Studio"
                additionalInfo={true}
                totalSales="Total Sales:"
                salesNumber="34.53 ETH"
                rankingNumber2={true}
                rankingNumber="1"
              />
            </div>
            <div className={styles.artistInfo54}>
              <p className={styles.artistInfo55}>Description</p>
              <p className={styles.artistInfo56}>
                The Orbitians
                <br />
                is a collection of 10,000 unique NFTs on the Ethereum
                blockchain,  There are all sorts of beings in the NFT Universe.
                The most advanced and friendly of the bunch are Orbitians.
                  They live in a metal space machines, high up in the sky and
                only have one foot on Earth.
                <br />
                These Orbitians are a peaceful race, but they have been at war
                with a group of invaders for many generations. The invaders are
                called Upside-Downs, because of their inverted bodies that live
                on the ground, yet do not know any other way to be. Upside-Downs
                believe that they will be able to win this war if they could
                only get an eye into Orbitian territory, so they've taken to
                make human beings their target.
              </p>
            </div>
            <div className={styles.artistInfo57}>
              <p className={styles.artistInfo58}>Details</p>
              <div className={styles.artistInfo59}>
                <Globe />
                <p className={styles.artistInfo60}>View on Etherscan</p>
              </div>
              <div className={styles.artistInfo61}>
                <Globe />
                <p className={styles.artistInfo62}>View Original</p>
              </div>
            </div>
            <div className={styles.artistInfo63}>
              <p className={styles.artistInfo64}>Tags</p>
              <div className={styles.artistInfo65}>
                <Button
                  property_1="Tertiary/Filled"
                  hasLeftIcon={true}
                  leftIcon={<Wallet />}
                  hasText={true}
                  text="Animation"
                />
                <Button
                  property_1="Tertiary/Filled"
                  hasLeftIcon={true}
                  leftIcon={<Wallet />}
                  hasText={true}
                  text="illustration"
                />
                <Button
                  property_1="Tertiary/Filled"
                  hasLeftIcon={true}
                  leftIcon={<Wallet />}
                  hasText={true}
                  text="moon"
                />
                <Button
                  property_1="Tertiary/Filled"
                  hasLeftIcon={true}
                  leftIcon={<Wallet />}
                  hasText={true}
                  text="moon"
                />
              </div>
            </div>
          </div>
        </div>
      );
      break;
  }
};
