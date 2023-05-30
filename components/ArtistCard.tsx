import styles from "./ArtistCard.module.css";
import { Avatar } from "./Avatar";
import { Avatar_14 } from "./Avatar_14";
import { Avatar_1 } from "./Avatar_1";

export const ArtistCard = ({
  style,
  property_1,
  artistName,
  additionalInfo,
  totalSales,
  salesNumber,
  rankingNumber2,
  rankingNumber,
}: {
  style: any;
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
        <div style={style} className={styles.artistCard}>
          <div className={styles.artistAvatar}>
            <Avatar
              property_1="Big"
              avatarPhoto={<Avatar_14 />}
              style={{
                height: "fit-content",
                width: "120px",
              }}
            />
          </div>
          <div className={styles.artistInfo}>
            <p className={styles.dishStudio}>{artistName}</p>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.additionalInfo}
            >
              <p className={styles.totalSales}>{totalSales}</p>
              <p className={styles.class_34_53Eth}>{salesNumber}</p>
            </div>
          </div>
          <div
            style={{
              visibility: rankingNumber2,
            }}
            className={styles.rankingNumber}
          >
            <p className={styles.class_1}>{rankingNumber}</p>
          </div>
        </div>
      );
    case "Horizontal Big":
      return (
        <div style={style} className={styles.artistCardComponent}>
          <div className={styles.artistAvatarDiv}>
            <Avatar
              property_1="medium"
              avatarPhoto={<Avatar_1 />}
              style={{
                height: "fit-content",
                width: "60px",
              }}
            />
          </div>
          <div className={styles.artistInfoDiv}>
            <p className={styles.dishStudioDiv}>{artistName}</p>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.additionalInfoDiv}
            >
              <p className={styles.totalSalesDiv}>{totalSales}</p>
              <p className={styles.class_34_53EthDiv}>{salesNumber}</p>
            </div>
          </div>
          <div
            style={{
              visibility: rankingNumber2,
            }}
            className={styles.rankingNumberDiv}
          >
            <p className={styles.class_1Div}>{rankingNumber}</p>
          </div>
        </div>
      );
    case "Horizontal Medium":
      return (
        <div style={style} className={styles.artistCardComponent1}>
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} style={{}} />
          <p className={styles.dishStudioDiv1}>{artistName}</p>
        </div>
      );
    case "Horizontal Small":
      return (
        <div style={style} className={styles.artistCardComponent2}>
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} style={{}} />
          <p className={styles.dishStudioDiv2}>{artistName}</p>
        </div>
      );
  }
};
