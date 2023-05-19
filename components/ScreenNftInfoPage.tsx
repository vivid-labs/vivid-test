import styles from "./ScreenNftInfoPage.module.css";
import { AuctionTimer } from "./AuctionTimer";
import { Button } from "./Button";
import { Wallet } from "./Wallet";
import { ArtistCard } from "./ArtistCard";
import { Globe } from "./Globe";

export const ScreenNftInfoPage = () => {
  return (
    <div className={styles.screenNftInfoPage0}>
      <div className={styles.screenNftInfoPage1}>
        <div className={styles.screenNftInfoPage2}>
          <p className={styles.screenNftInfoPage3}>The Orbitians</p>
          <p className={styles.screenNftInfoPage4}>Minted on Sep 30, 2022</p>
        </div>
        <div className={styles.screenNftInfoPage5}>
          <AuctionTimer />
          <Button
            property_1="Secondary/Filled"
            hasLeftIcon={true}
            leftIcon={<Wallet />}
            hasText={true}
            text="Place Bid"
          />
        </div>
        <div className={styles.screenNftInfoPage6}>
          <p className={styles.screenNftInfoPage7}>Created By</p>
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
        <div className={styles.screenNftInfoPage8}>
          <p className={styles.screenNftInfoPage9}>Description</p>
          <p className={styles.screenNftInfoPage10}>
            The Orbitians
            <br />
            is a collection of 10,000 unique NFTs on the Ethereum
            blockchain,  There are all sorts of beings in the NFT Universe. The
            most advanced and friendly of the bunch are Orbitians.   They live
            in a metal space machines, high up in the sky and only have one foot
            on Earth.
            <br />
            These Orbitians are a peaceful race, but they have been at war with
            a group of invaders for many generations. The invaders are called
            Upside-Downs, because of their inverted bodies that live on the
            ground, yet do not know any other way to be. Upside-Downs believe
            that they will be able to win this war if they could only get an eye
            into Orbitian territory, so they've taken to make human beings their
            target.
          </p>
        </div>
        <div className={styles.screenNftInfoPage11}>
          <p className={styles.screenNftInfoPage12}>Details</p>
          <div className={styles.screenNftInfoPage13}>
            <Globe />
            <p className={styles.screenNftInfoPage14}>View on Etherscan</p>
          </div>
          <div className={styles.screenNftInfoPage15}>
            <Globe />
            <p className={styles.screenNftInfoPage16}>View Original</p>
          </div>
        </div>
        <div className={styles.screenNftInfoPage17}>
          <p className={styles.screenNftInfoPage18}>Tags</p>
          <div className={styles.screenNftInfoPage19}>
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
};
