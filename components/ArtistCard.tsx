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
          <p className={styles.name}>{artistName}</p>
          {additionalInfo ? (
            <div className={styles.infoDiv}>
              <p className={styles.sales}>{totalSales}</p>
              <p className={styles.salesNumber}>{salesNumber}</p>
            </div>
          ) : null}
        </div>
        {rankingNumber2 ? (
          <div className={styles.cardDiv}>
            <p className={styles.number}>{rankingNumber}</p>
          </div>
        ) : null}
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
        <div className={styles.infoDiv1}>
          <p className={styles.nameText}>{artistName}</p>
          {additionalInfo ? (
            <div className={styles.infoDiv2}>
              <p className={styles.salesText}>{totalSales}</p>
              <p className={styles.salesNumberText}>{salesNumber}</p>
            </div>
          ) : null}
        </div>
        {rankingNumber2 ? (
          <div className={styles.cardDiv1}>
            <p className={styles.numberText}>{rankingNumber}</p>
          </div>
        ) : null}
       </div>)
      );
    case "Horizontal Medium":
      return (
       (<div style={override} className={styles.cardComponent1}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.nameText1}>{artistName}</p>
       </div>)
      );
    case "Horizontal Small":
      return (
       (<div style={override} className={styles.cardComponent2}>
        <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
        <p className={styles.nameText2}>{artistName}</p>
       </div> 
      );
    default:
      return null;
  }
};
