import styles from "./NftHighlight.module.css";
import nftHighlight from "./nftHighlight.png";
import { ArtistCard } from "./ArtistCard";
import { Button } from "./Button";
import { Eye } from "./Eye";

export const NftHighlight = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.nftHighlight}>
      <img
        src={nftHighlight.src}
        className={
          styles.objectFitCoverOpacity_1a6f43f9350c73503d13e1fe1a0e3277804ef1192
        }
      />
      <div className={styles.nftInfo}>
        <div className={styles.frame_240}>
          <div className={styles.nftArtstAndNameAndButton}>
            <ArtistCard
              property_1="Horizontal Small"
              artistName="Shroomie"
              additionalInfo={true}
              totalSales="Total Sales:"
              salesNumber="34.53 ETH"
              rankingNumber2={true}
              rankingNumber="1"
            />
            <p className={styles.magicMashrooms}>Magic Mashrooms</p>
            <Button
              property_1="Secondary/Filled"
              hasLeftIcon={true}
              leftIcon={<Eye />}
              hasText={true}
              text="See NFT"
              style={{
                paddingTop: "22px",
                paddingBottom: "22px",
                height: "60px",
                width: "fit-content",
              }}
            />
          </div>
          <div className={styles.auctionTimer}>
            <p className={styles.auctionEndsIn}>Auction ends in:</p>
            <div className={styles.timer}>
              <div className={styles.hours}>
                <p className={styles.text59}>59</p>
                <p className={styles.hoursText}>Hours</p>
              </div>
              <p className={styles.text}>:</p>
              <div className={styles.minutes}>
                <p className={styles.text59Text}>59</p>
                <p className={styles.minutesText}>Minutes</p>
              </div>
              <p className={styles.textText}>:</p>
              <div className={styles.seconds}>
                <p className={styles.text59Text1}>59</p>
                <p className={styles.secondsText}>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
