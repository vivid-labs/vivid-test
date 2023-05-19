import styles from "./NftCard.module.css";
import vivid_dee8901813fae364bd1e086f33ff1374b070809e from "./dee8901813fae364bd1e086f33ff1374b070809e.png";
import { Avatar } from "./Avatar";
import { Avatar_1 } from "./Avatar_1";

export const NftCard = ({
  property_1,
  nftName,
  artistAvatarName,
  artistName,
  additionalInfo,
  priceNumber,
  bidNumber,
}: {
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
        <div className={styles.nftCard0}>
          <div className={styles.nftCard1}>
            <img
              src={vivid_dee8901813fae364bd1e086f33ff1374b070809e.src}
              className={styles.nftCard2}
            />
          </div>
          <div className={styles.nftCard3}>
            <div className={styles.nftCard4}>
              <p className={styles.nftCard5}>{nftName}</p>
              <div
                style={{
                  visibility: artistAvatarName,
                }}
                className={styles.nftCard6}
              >
                <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
                <p className={styles.nftCard7}>{artistName}</p>
              </div>
            </div>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.nftCard8}
            >
              <div className={styles.nftCard9}>
                <p className={styles.nftCard10}>Price</p>
                <p className={styles.nftCard11}>{priceNumber}</p>
              </div>
              <div className={styles.nftCard12}>
                <p className={styles.nftCard13}>Highest Bid</p>
                <p className={styles.nftCard14}>{bidNumber}</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "Small":
      return (
        <div className={styles.nftCard15}>
          <div className={styles.nftCard16}>
            <img
              src={vivid_dee8901813fae364bd1e086f33ff1374b070809e.src}
              className={styles.nftCard17}
            />
          </div>
          <div className={styles.nftCard18}>
            <div className={styles.nftCard19}>
              <p className={styles.nftCard20}>{nftName}</p>
              <div
                style={{
                  visibility: artistAvatarName,
                }}
                className={styles.nftCard21}
              >
                <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
                <div className={styles.nftCard22}>
                  <p className={styles.nftCard23}>{artistName}</p>
                </div>
              </div>
            </div>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.nftCard24}
            >
              <div className={styles.nftCard25}>
                <p className={styles.nftCard26}>Price</p>
                <p className={styles.nftCard27}>{priceNumber}</p>
              </div>
              <div className={styles.nftCard28}>
                <p className={styles.nftCard29}>Highest Bid</p>
                <p className={styles.nftCard30}>{bidNumber}</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;
  }
};
