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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "15px",
        height: "fit-content",
        borderRadius: "20px",
        position: "relative",
        backgroundColor: "rgb(43, 43, 43)",
        ...override,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "15px",
          height: "fit-content",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <img
          style={{
            ...primaryPhotoPlaceholderProperty_1,
            width: "100%",
            flexShrink: 0,
            objectFit: "cover",
            opacity: 1,
            borderRadius: "20px",
          }}
          src={primaryPhotoPlaceholder.src}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "15px",
            height: "fit-content",
            position: "relative",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <img
            style={{
              ...secondaryPhotoPlaceholderProperty_1,
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
              objectFit: "cover",
              opacity: 1,
              borderRadius: "20px",
            }}
            src={secondaryPhotoPlaceholderImage.src}
          />
          <img
            style={{
              ...secondaryPhotoPlaceholderImageProperty_1,
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
              objectFit: "cover",
              opacity: 1,
              borderRadius: "20px",
            }}
            src={secondaryPhotoPlaceholder.src}
          />
          <div
            style={{
              ...numberOfAdditionalNfTsProperty_1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              padding: "32px 15px",
              borderRadius: "20px",
              position: "relative",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
              backgroundColor: "rgb(162, 89, 255)",
            }}
          >
            <p
              style={{
                ...text1025Property_1,
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
                color: "rgb(255, 255, 255)",
                fontFamily: "Space Mono",
                fontWeight: 700,
              }}
            >
              {additionalNfTsNumber}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          height: "fit-content",
          position: "relative",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            height: "fit-content",
            width: "100%",
            flexShrink: 0,
            color: "rgb(255, 255, 255)",
            fontSize: "22px",
            fontFamily: "Work Sans",
            fontWeight: 600,
            lineHeight: "1.399999976158142em",
          }}
        >
          {collectionName}
        </p>
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
