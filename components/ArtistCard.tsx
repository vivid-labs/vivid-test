import styles from "./ArtistCard.module.css";
import { Avatar } from "./Avatar";
import { Avatar_14 } from "./Avatar_14";
import { Avatar_1 } from "./Avatar_1";

export const ArtistCard = ({
  property_1,
  artistName,
  additionalInfo,
  totalSales,
  salesNumber,
  rankingNumber2,
  rankingNumber,
}: {
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
        <div className={styles.artistCard0}>
          <div className={styles.artistCard1}>
            <Avatar property_1="Big" avatarPhoto={<Avatar_14 />} />
          </div>
          <div className={styles.artistCard2}>
            <p className={styles.artistCard3}>{artistName}</p>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.artistCard4}
            >
              <p className={styles.artistCard5}>{totalSales}</p>
              <p className={styles.artistCard6}>{salesNumber}</p>
            </div>
          </div>
          <div
            style={{
              visibility: rankingNumber2,
            }}
            className={styles.artistCard7}
          >
            <p className={styles.artistCard8}>{rankingNumber}</p>
          </div>
        </div>
      );
    case "Horizontal Big":
      return (
        <div className={styles.artistCard9}>
          <div className={styles.artistCard10}>
            <Avatar property_1="medium" avatarPhoto={<Avatar_1 />} />
          </div>
          <div className={styles.artistCard11}>
            <p className={styles.artistCard12}>{artistName}</p>
            <div
              style={{
                visibility: additionalInfo,
              }}
              className={styles.artistCard13}
            >
              <p className={styles.artistCard14}>{totalSales}</p>
              <p className={styles.artistCard15}>{salesNumber}</p>
            </div>
          </div>
          <div
            style={{
              visibility: rankingNumber2,
            }}
            className={styles.artistCard16}
          >
            <p className={styles.artistCard17}>{rankingNumber}</p>
          </div>
        </div>
      );
    case "Horizontal Medium":
      return (
        <div className={styles.artistCard18}>
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p className={styles.artistCard19}>{artistName}</p>
        </div>
      );
    case "Horizontal Small":
      return (
        <div className={styles.artistCard20}>
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p className={styles.artistCard21}>{artistName}</p>
        </div>
      );
  }
};
