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
        <div className={styles.avatarContainer}>
          <Avatar
            property_1="Big"
            avatarPhoto={<Avatar_14 />}
            override={{
              height: "fit-content",
              width: "120px",
            }}
          />
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.artistName}>{artistName}</p>
          {additionalInfo ? (
            <div className={styles.additionalInfoContainer}>
              <p className={styles.totalSales}>{totalSales}</p>
              <p className={styles.salesNumber}>{salesNumber}</p>
            </div>
          ) : null}
        </div>
        {rankingNumber2 ? (
          <div className={styles.rankingNumberContainer}>
            <p className={styles.cardHorizontalBig}>{rankingNumber}</p>
          </div>
        ) : null}
       </div>)
      );
    case "Horizontal Big":
      return (
       (<div style={override} className={styles.avatarContainerHorizontalBig}>
        <div className={styles.infoContainerHorizontalBig}>
          <Avatar
            property_1="medium"
            avatarPhoto={<Avatar_1 />}
            override={{
              height: "fit-content",
              width: "60px",
            }}
          />
        </div>
        <div className={styles.artistNameText}>
          <p className={styles.additionalInfoContainerHorizontalBig}>{artistName}</p>
          {additionalInfo ? (
            <div className={styles.totalSalesText}>
              <p className={styles.salesNumberText}>{totalSales}</p>
              <p className={styles.rankingNumberContainerHorizontalBig}>{salesNumber}</p>
            </div>
          ) : null}
        </div>
        {rankingNumber2 ? (
          <div className={styles.cardHorizontalMedium}>
            <p className={styles.avatarContainerHorizontalMedium}>{rankingNumber}</p>
          </div>
        ) : null}
       </div>)
      );
    case "Horizontal Medium":
      return (
       (<div style={override} className={styles.artistNameText1}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.cardHorizontalSmall}>{artistName}</p>
       </div>)
      );
    case "Horizontal Small":
      return (
       (<div style={override} className={styles.avatarContainerHorizontalSmall}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.artistNameText2}>{artistName}</p>
       </div> 
      );
    default:
      return null;
  }
};
