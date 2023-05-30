import styles from "./CollectionCard.module.css";
import vivid_8baa847338fb05f3af173d2fe841ef434a65828b from "./8baa847338fb05f3af173d2fe841ef434a65828b.png";
import vivid_328fb484057512c67778021c44f11098e8d812d5 from "./328fb484057512c67778021c44f11098e8d812d5.png";
import vivid_fe80fb009d833af99068c64c9f229700bbd8eb69 from "./fe80fb009d833af99068c64c9f229700bbd8eb69.png";
import { ArtistCard } from "./ArtistCard";

export const CollectionCard = ({
  style,
  property_1,
  additionalNfTsNumber,
  collectionName,
}: {
  style: any;
  property_1: string;
  additionalNfTsNumber: string;
  collectionName: string;
}) => {
  const property_1_0 =
    property_1 === "Desktop Card"
      ? {
          height: "330px",
        }
      : {
          height: "315px",
        };
  const property_1_1 =
    property_1 === "Desktop Card"
      ? {
          height: "100px",
        }
      : {
          height: "95px",
        };
  const property_1_2 =
    property_1 === "Desktop Card"
      ? {
          height: "100px",
        }
      : {
          height: "95px",
        };
  const property_1_3 =
    property_1 === "Desktop Card"
      ? {
          fontSize: "22px",
          lineHeight: "1.600000023841858em",
        }
      : {
          fontSize: "16px",
          lineHeight: "1.399999976158142em",
        };
  const property_1_4 =
    property_1 === "Desktop Card"
      ? {
          height: "100px",
        }
      : {
          height: "95px",
        };
  const property_1_5 =
    property_1 === "Desktop Card"
      ? {
          width: "330px",
        }
      : {
          width: "315px",
        };

  return (
    <div
      style={{
        ...property_1_5,
        ...style,
      }}
      className={styles.collectionCard0}
    >
      <div className={styles.collectionCard1}>
        <img
          style={property_1_0}
          src={vivid_8baa847338fb05f3af173d2fe841ef434a65828b.src}
          className={styles.collectionCard2}
        />
        <div className={styles.collectionCard3}>
          <img
            style={property_1_1}
            src={vivid_328fb484057512c67778021c44f11098e8d812d5.src}
            className={styles.collectionCard4}
          />
          <img
            style={property_1_2}
            src={vivid_fe80fb009d833af99068c64c9f229700bbd8eb69.src}
            className={styles.collectionCard5}
          />
          <div style={property_1_4} className={styles.collectionCard6}>
            <p style={property_1_3} className={styles.collectionCard7}>
              {additionalNfTsNumber}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.collectionCard8}>
        <p className={styles.collectionCard9}>{collectionName}</p>
        <ArtistCard
          property_1="Horizontal Small"
          artistName="@Robotica "
          additionalInfo={true}
          totalSales="Total Sales:"
          salesNumber="34.53 ETH"
          rankingNumber2={true}
          rankingNumber="1"
          style={{
            height: "fit-content",
            gap: "12px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
