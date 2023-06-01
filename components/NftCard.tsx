import styles from "./NftCard.module.css";
import imagePlaceholder from "./imagePlaceholder.png";
import { Avatar } from "./Avatar";
import { Avatar_1 } from "./Avatar_1";

export const NftCard = ({
  style,
  property_1,
  nftName,
  artistAvatarName,
  artistName,
  additionalInfo,
  priceNumber,
  bidNumber,
}: {
  style?: any;
  property_1: string;
  nftName: string;
  artistAvatarName: boolean;
  artistName: string;
  additionalInfo: boolean;
  priceNumber: string;
  bidNumber: string;
}) => {
  switch (property_1) {
    case "Default":
      return (
        <div style={style} className={styles.nftCard}>
          <div className={styles.image}>
            <img
              src={imagePlaceholder.src}
              className={styles.imagePlaceholder}
            />
          </div>
          <div className={styles.nftInfo}>
            <div className={styles.artstInfo}>
              <p className={styles.nftName}>{nftName}</p>
              <div
                style={{
                  visibility: artistAvatarName,
                }}
                className={styles.artistAvatarAndName}
              >
                <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
                <p className={styles.nftArtist}>{artistName}</p>
              </div>
            </div>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.additionalInfo}
            >
              <div className={styles.price}>
                <p className={styles.priceText}>Price</p>
                <p className={styles.text1_63Eth}>{priceNumber}</p>
              </div>
              <div className={styles.highestBid}>
                <p className={styles.highestBidText}>Highest Bid</p>
                <p className={styles.text0_33WEth}>{bidNumber}</p>
              </div>
            </div>
          </div>
        </div>
      );
    case "Small":
      return (
        <div style={style} className={styles.nftCardComponent}>
          <div className={styles.imageDiv}>
            <img
              src={imagePlaceholder.src}
              className={styles.imagePlaceholderImage}
            />
          </div>
          <div className={styles.nftInfoDiv}>
            <div className={styles.artistInfo}>
              <p className={styles.nftNameText}>{nftName}</p>
              <div
                style={{
                  visibility: artistAvatarName,
                }}
                className={styles.artistAvatarAndNameDiv}
              >
                <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
                <div className={styles.artistName}>
                  <p className={styles.nftArtistText}>{artistName}</p>
                </div>
              </div>
            </div>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.additionalInfoDiv}
            >
              <div className={styles.priceDiv}>
                <p className={styles.priceText1}>Price</p>
                <p className={styles.text1_63EthText}>{priceNumber}</p>
              </div>
              <div className={styles.highestBidDiv}>
                <p className={styles.highestBidText1}>Highest Bid</p>
                <p className={styles.text0_33WEthText}>{bidNumber}</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
