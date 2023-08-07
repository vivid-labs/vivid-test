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
  override?: React.CSSProperties;
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
        <div className={styles.nftCardComponent} style={override}>
          <div className={styles.image}>
            <img
              className={styles.imagePlaceholder}
              src={imagePlaceholder.src}
            />
          </div>
          <div className={styles.nftInfo}>
            <div className={styles.artstInfo}>
              <p className={styles.nftName}>{nftName}</p>
              {artistAvatarName ? (
                <div className={styles.artstInfoDiv}>
                  <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
                  <p className={styles.nftArtist}>{artistName}</p>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div className={styles.nftInfoDiv}>
                <div className={styles.price}>
                  <p className={styles.priceText}>Price</p>
                  <p className={styles.text1_63Eth}>{priceNumber}</p>
                </div>
                <div className={styles.highestBid}>
                  <p className={styles.highestBidText}>Highest Bid</p>
                  <p className={styles.text0_33WEth}>{bidNumber}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    case "Small":
      return (
        <div className={styles.nftCardComponent1} style={override}>
          <div className={styles.imageDiv}>
            <img
              className={styles.imagePlaceholderImage}
              src={imagePlaceholder.src}
            />
          </div>
          <div className={styles.nftInfoDiv1}>
            <div className={styles.artistInfo}>
              <p className={styles.nftNameText}>{nftName}</p>
              {artistAvatarName ? (
                <div className={styles.artistInfoDiv}>
                  <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
                  <div className={styles.artistName}>
                    <p className={styles.nftArtistText}>{artistName}</p>
                  </div>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div className={styles.nftInfoDiv2}>
                <div className={styles.priceDiv}>
                  <p className={styles.priceText1}>Price</p>
                  <p className={styles.text1_63EthText}>{priceNumber}</p>
                </div>
                <div className={styles.highestBidDiv}>
                  <p className={styles.highestBidText1}>Highest Bid</p>
                  <p className={styles.text0_33WEthText}>{bidNumber}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    default:
      return null;
  }
};
