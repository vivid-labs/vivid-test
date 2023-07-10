import styles from "./ArtistCard.module.css";
import { Avatar } from "./Avatar";
import { Avatar_14 } from "./Avatar_14";
import { Avatar_1 } from "./Avatar_1";
export const ArtistCard = ({
  override,
  property_1,
  artistName,
  additionalInfo,
  totalSales,
  salesNumber,
  rankingNumber2,
  rankingNumber,
}: {
  override?: any;
  property_1: string;
  artistName: string;
  additionalInfo: boolean;
  totalSales: string;
  salesNumber: string;
  rankingNumber2: boolean;
  rankingNumber: string;
}) => {
  switch (property_1) {
    case "Default":
      return (
        <div style={override} className={styles.card}>
        <div className={styles.avatarWrapper}>
          <Avatar
            property_1="Big"
            avatarPhoto={<Avatar_14 />}
            override={{
              height: "fit-content",
              width: "120px",
            }}
          />
        </div>
        <div className={styles.artistInfoWrapper}>
          <p className={styles.artistName}>{artistName}</p>
          <div
            style={{
              visibility: additionalInfo,
            }}
            className={styles.additionalInfoWrapper}
          >
            <p className={styles.totalSales}>{totalSales}</p>
            <p className={styles.salesNumber}>{salesNumber}</p>
          </div>
        </div>
        <div
          style={{
            visibility: rankingNumber2,
          }}
          className={styles.rankingNumberWrapper}
        >
          <p className={styles.rankingNumberText}>{rankingNumber}</p>
        </div>
       </div>)
      );
    case "Horizontal Big":
      return (
       (<div style={override} className={styles.horizontalCard}>
        <div className={styles.horizontalAvatarWrapper}>
          <Avatar
            property_1="medium"
            avatarPhoto={<Avatar_1 />}
            override={{
              height: "fit-content",
              width: "60px",
            }}
          />
        </div>
        <div className={styles.horizontalInfoWrapper}>
          <p className={styles.horizontalArtistName}>{artistName}</p>
          <div
            style={{
              visibility: additionalInfo,
            }}
            className={styles.horizontalInfoWrapper2}
          >
            <p className={styles.horizontalTotalSales}>{totalSales}</p>
            <p className={styles.horizontalSalesNumber}>{salesNumber}</p>
          </div>
        </div>
        <div
          style={{
            visibility: rankingNumber2,
          }}
          className={styles.horizontalRankingNumberWrapper}
        >
          <p className={styles.horizontalRankingNumberText}>{rankingNumber}</p>
        </div>
       </div>)
      );
    case "Horizontal Medium":
      return (
       (<div style={override} className={styles.horizontalCard1}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.horizontalArtistName1}>{artistName}</p>
       </div>)
      );
    case "Horizontal Small":
      return (
       (<div style={override} className={styles.horizontalCard2}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.horizontalArtistName2}>{artistName}</p>
       </div> 
      );
    default:
      return null;
  }
};
