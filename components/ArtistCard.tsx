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
        <div style={override} className={styles.artistCard}>
          <div className={styles.artistAvatar}>
            <Avatar
              property_1="Big"
              avatarPhoto={<Avatar_14 />}
              override={{
                height: "fit-content",
                width: "120px",
              }}
            />
          </div>
          <div className={styles.artistInfo}>
            <p className={styles.dishStudio}>{artistName}</p>
            {additionalInfo ? (
              <div className={styles.artistInfoDiv}>
                <p className={styles.totalSales}>{totalSales}</p>
                <p className={styles.text34_53Eth}>{salesNumber}</p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div className={styles.artistCardDiv}>
              <p className={styles.text1}>{rankingNumber}</p>
            </div>
          ) : null}
        </div>
      );
    case "Horizontal Big":
      return (
        <div style={override} className={styles.artistCardComponent}>
          <div className={styles.artistAvatarDiv}>
            <Avatar
              property_1="medium"
              avatarPhoto={<Avatar_1 />}
              override={{
                height: "fit-content",
                width: "60px",
              }}
            />
          </div>
          <div className={styles.artistInfoDiv1}>
            <p className={styles.dishStudioText}>{artistName}</p>
            {additionalInfo ? (
              <div className={styles.artistInfoDiv2}>
                <p className={styles.totalSalesText}>{totalSales}</p>
                <p className={styles.text34_53EthText}>{salesNumber}</p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div className={styles.artistCardDiv1}>
              <p className={styles.text1Text}>{rankingNumber}</p>
            </div>
          ) : null}
        </div>
      );
    case "Horizontal Medium":
      return (
        <div style={override} className={styles.artistCardComponent1}>
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p className={styles.dishStudioText1}>{artistName}</p>
        </div>
      );
    case "Horizontal Small":
      return (
        <div style={override} className={styles.artistCardComponent2}>
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p className={styles.dishStudioText2}>{artistName}</p>
        </div>
      );
    default:
      return null;
  }
};
