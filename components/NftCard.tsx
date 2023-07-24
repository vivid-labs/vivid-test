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
        <div
          style={override}
          className={styles.nftCard}
          figma-id="7:1218:12671"
        >
          <div className={styles.image} figma-id="7:1218:12668">
            <img
              src={imagePlaceholder.src}
              className={styles.imagePlaceholder}
              figma-id="7:1218:12620"
            />
          </div>
          <div className={styles.nftInfoDiv} figma-id="7:1218:12667">
            <div className={styles.artstInfoDiv} figma-id="7:1218:12628">
              <p className={styles.nftName} figma-id="7:1218:12619">
                {nftName}
              </p>
              {artistAvatarName ? (
                <div className={styles.artstInfo} figma-id="7:1218:12627">
                  <Avatar
                    property_1="Small"
                    avatarPhoto={<Avatar_1 figma-id="7:" />}
                    figma-id="7:1218:12624"
                  />
                  <p className={styles.nftArtist} figma-id="7:1218:12614">
                    {artistName}
                  </p>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div className={styles.nftInfo} figma-id="7:1218:12645">
                <div className={styles.priceDiv} figma-id="7:1218:12646">
                  <p className={styles.price} figma-id="7:1218:12648">
                    Price
                  </p>
                  <p className={styles.text1_63Eth} figma-id="7:1218:12650">
                    {priceNumber}
                  </p>
                </div>
                <div className={styles.highestBidDiv} figma-id="7:1218:12651">
                  <p className={styles.highestBid} figma-id="7:1218:12653">
                    Highest Bid
                  </p>
                  <p className={styles.text0_33WEth} figma-id="7:1218:12655">
                    {bidNumber}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    case "Small":
      return (
        <div
          style={override}
          className={styles.nftCardComponent}
          figma-id="7:1614:7811"
        >
          <div className={styles.imageDiv} figma-id="7:1614:7812">
            <img
              src={imagePlaceholder.src}
              className={styles.imagePlaceholderImage}
              figma-id="7:1614:7813"
            />
          </div>
          <div className={styles.nftInfoDiv2} figma-id="7:1614:7814">
            <div className={styles.artistInfoDiv} figma-id="7:1614:7815">
              <p className={styles.nftNameText} figma-id="7:1614:7817">
                {nftName}
              </p>
              {artistAvatarName ? (
                <div className={styles.artistInfo} figma-id="7:1614:7818">
                  <Avatar
                    property_1="Small"
                    avatarPhoto={<Avatar_1 figma-id="7:" />}
                    figma-id="7:1614:7819"
                  />
                  <div className={styles.artistName} figma-id="7:1614:7820">
                    <p className={styles.nftArtistText} figma-id="7:1614:7821">
                      {artistName}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div className={styles.nftInfoDiv1} figma-id="7:1614:7822">
                <div className={styles.priceDiv1} figma-id="7:1614:7823">
                  <p className={styles.priceText} figma-id="7:1614:7825">
                    Price
                  </p>
                  <p className={styles.text1_63EthText} figma-id="7:1614:7827">
                    {priceNumber}
                  </p>
                </div>
                <div className={styles.highestBidDiv1} figma-id="7:1614:7828">
                  <p className={styles.highestBidText} figma-id="7:1614:7830">
                    Highest Bid
                  </p>
                  <p className={styles.text0_33WEthText} figma-id="7:1614:7832">
                    {bidNumber}
                  </p>
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
