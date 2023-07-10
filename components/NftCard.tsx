import styles from "./NftCard.module.css";
import imagePlaceholder from "./imagePlaceholder.png";
import { Avatar } from "./Avatar";
import { Avatar_1 } from "./Avatar_1";
export const NftCard = ({
  override,
  property_1,
  nftName,
  artistAvatarName,
  artistName,
  additionalInfo,
  priceNumber,
  bidNumber,
}: {
  override?: any;
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
        <div style={override} className={styles.nftCard}>
        <div className={styles.image}>
          <img
            src={imagePlaceholder.src}
            className={styles.imagePlaceholder}
          />
        </div>
        <div className={styles.nftInfo}>
          <div className={styles.artistInfo}>
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
              <p className={styles.ethPrice}>{priceNumber}</p>
            </div>
            <div className={styles.highestBid}>
              <p className={styles.highestBidText}>Highest Bid</p>
              <p className={styles.ethBid}>{bidNumber}</p>
            </div>
          </div>
        </div>
       </div>)
      );
    case "Small":
      return (
       (<div style={override} className={styles.nftCardComponent}>
        <div className={styles.imageDiv}>
          <img
            src={imagePlaceholder.src}
            className={styles.imagePlaceholderImage}
          />
        </div>
        <div className={styles.nftInfoDiv}>
          <div className={styles.artistInfoDiv}>
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
              <p className={styles.ethPriceText}>{priceNumber}</p>
            </div>
            <div className={styles.highestBidDiv}>
              <p className={styles.highestBidText1}>Highest Bid</p>
              <p className={styles.ethBidText}>{bidNumber}</p>
            </div>
          </div>
        </div>
       </div> 
      );
    default:
      return null;
  }
};
