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
        <div style={override} className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={imagePlaceholder.src}
            className={styles.placeholderImage}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.artistInfoContainer}>
            <p className={styles.nftTitle}>{nftName}</p>
            <div
              style={{
                visibility: artistAvatarName,
              }}
              className={styles.avatarAndNameContainer}
            >
              <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
              <p className={styles.artist}>{artistName}</p>
            </div>
          </div>
          <div
            style={{
              visibility: additionalInfo,
            }}
            className={styles.extraInfoContainer}
          >
            <div className={styles.priceContainer}>
              <p className={styles.priceText}>Price</p>
              <p className={styles.ethNumber1}>{priceNumber}</p>
            </div>
            <div className={styles.highestBidContainer}>
              <p className={styles.highestBidText}>Highest Bid</p>
              <p className={styles.ethNumber2}>{bidNumber}</p>
            </div>
          </div>
        </div>
       </div>)
      );
    case "Small":
      return (
       (<div style={override} className={styles.cardComponent}>
        <div className={styles.imageWrapper}>
          <img
            src={imagePlaceholder.src}
            className={styles.placeholder}
          />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.artistWrapper}>
            <p className={styles.nftTitleText}>{nftName}</p>
            <div
              style={{
                visibility: artistAvatarName,
              }}
              className={styles.avatarAndNameWrapper}
            >
              <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
              <div className={styles.artistNameWrapper}>
                <p className={styles.artistText}>{artistName}</p>
              </div>
            </div>
          </div>
          <div
            style={{
              visibility: additionalInfo,
            }}
            className={styles.extraInfoWrapper}
          >
            <div className={styles.priceWrapper}>
              <p className={styles.priceText1}>Price</p>
              <p className={styles.ethNumber1Text}>{priceNumber}</p>
            </div>
            <div className={styles.highestBidWrapper}>
              <p className={styles.highestBidText1}>Highest Bid</p>
              <p className={styles.ethNumber2Text}>{bidNumber}</p>
            </div>
          </div>
        </div>
       </div> 
      );
    default:
      return null;
  }
};
