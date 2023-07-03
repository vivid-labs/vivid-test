import styles from "./CollectionCard.module.css";
import primaryPhotoPlaceholder from "./primaryPhotoPlaceholder.png";
import secondaryPhotoPlaceholderImage from "./secondaryPhotoPlaceholderImage.png";
import secondaryPhotoPlaceholder from "./secondaryPhotoPlaceholder.png";
import { ArtistCard } from "./ArtistCard";

export const CollectionCard = ({
  override,
  property_1,
  additionalNfTsNumber,
  collectionName,
}: {
  override?: any;
  property_1: string;
  additionalNfTsNumber: string;
  collectionName: string;
}) => {
  const primaryPhotoPlaceholderProperty_1 =
    property_1 === "Desktop Card"
      ? {
          height: "330px",
        }
      : {
          height: "315px",
        };
  const secondaryPhotoPlaceholderProperty_1 =
    property_1 === "Desktop Card"
      ? {
          height: "100px",
        }
      : {
          height: "95px",
        };
  const secondaryPhotoPlaceholderImageProperty_1 =
    property_1 === "Desktop Card"
      ? {
          height: "100px",
        }
      : {
          height: "95px",
        };
  const text1025Property_1 =
    property_1 === "Desktop Card"
      ? {
          fontSize: "22px",
          lineHeight: "1.600000023841858em",
        }
      : {
          fontSize: "16px",
          lineHeight: "1.399999976158142em",
        };
  const numberOfAdditionalNfTsProperty_1 =
    property_1 === "Desktop Card"
      ? {
          height: "100px",
        }
      : {
          height: "95px",
        };
  const collectionCardProperty_1 =
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
        ...collectionCardProperty_1,
        ...override,
      }}
      className={styles.collectionCard}
    >
      <div className={styles.photosAndNumberOfAdditionalNfTs}>
        <img
          style={primaryPhotoPlaceholderProperty_1}
          src={primaryPhotoPlaceholder.src}
          className={styles.primaryPhotoPlaceholder}
        />
        <div className={styles.frame_228}>
          <img
            style={secondaryPhotoPlaceholderProperty_1}
            src={secondaryPhotoPlaceholderImage.src}
            className={styles.secondaryPhotoPlaceholder}
          />
          <img
            style={secondaryPhotoPlaceholderImageProperty_1}
            src={secondaryPhotoPlaceholder.src}
            className={styles.secondaryPhotoPlaceholderImage}
          />
          <div
            style={numberOfAdditionalNfTsProperty_1}
            className={styles.numberOfAdditionalNfTs}
          >
            <p style={text1025Property_1} className={styles.text1025}>
              {additionalNfTsNumber}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.collectionInfo}>
        <p className={styles.collectionName}>{collectionName}</p>
        <ArtistCard
          property_1="Horizontal Small"
          artistName="@Robotica "
          additionalInfo={true}
          totalSales="Total Sales:"
          salesNumber="34.53 ETH"
          rankingNumber2={true}
          rankingNumber="1"
          override={{
            height: "fit-content",
            gap: "12px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
