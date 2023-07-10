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
        <div className={styles.avatar}>
          <Avatar
            property_1="Big"
            avatarPhoto={<Avatar_14 />}
            override={{
              height: "fit-content",
              width: "120px",
            }}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.studio}>{artistName}</p>
          <div
            style={{
              visibility: additionalInfo,
            }}
            className={styles.additionalInfo}
          >
            <p className={styles.totalSales}>{totalSales}</p>
            <p className={styles.ethNumber}>{salesNumber}</p>
          </div>
        </div>
        <div
          style={{
            visibility: rankingNumber2,
          }}
          className={styles.ranking}
        >
          <p className={styles.number}>{rankingNumber}</p>
        </div>
       </div>)
      );
    case "Horizontal Big":
      return (
       (<div style={override} className={styles.cardComponent}>
        <div className={styles.avatarDiv}>
          <Avatar
            property_1="medium"
            avatarPhoto={<Avatar_1 />}
            override={{
              height: "fit-content",
              width: "60px",
            }}
          />
        </div>
        <div className={styles.infoDiv}>
          <p className={styles.studioText}>{artistName}</p>
          <div
            style={{
              visibility: additionalInfo,
            }}
            className={styles.additionalInfoDiv}
          >
            <p className={styles.totalSalesText}>{totalSales}</p>
            <p className={styles.ethNumberText}>{salesNumber}</p>
          </div>
        </div>
        <div
          style={{
            visibility: rankingNumber2,
          }}
          className={styles.rankingNumberDiv}
        >
          <p className={styles.numberText}>{rankingNumber}</p>
        </div>
       </div>)
      );
    case "Horizontal Medium":
      return (
       (<div style={override} className={styles.cardComponent1}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.studioText1}>{artistName}</p>
       </div>)
      );
    case "Horizontal Small":
      return (
       (<div style={override} className={styles.cardComponent2}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.studioText2}>{artistName}</p>
       </div> 
      );
    default:
      return null;
  }
};
