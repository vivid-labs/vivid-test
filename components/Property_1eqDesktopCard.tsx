import primaryPhotoPlaceholder from "./primaryPhotoPlaceholder.png";
import secondaryPhotoPlaceholderImage from "./secondaryPhotoPlaceholderImage.png";
import secondaryPhotoPlaceholder from "./secondaryPhotoPlaceholder.png";
import { ArtistCard } from "./ArtistCard";

export const Property_1eqDesktopCard = ({ override }: { override?: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "15px",
        height: "fit-content",
        borderRadius: "20px",
        position: "relative",
        width: "330px",
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
            width: "100%",
            height: "330px",
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
              height: "100px",
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
              height: "100px",
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              padding: "32px 15px",
              borderRadius: "20px",
              position: "relative",
              height: "100px",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
              backgroundColor: "rgb(162, 89, 255)",
            }}
          >
            <p
              style={{
                width: "fit-content",
                whiteSpace: "nowrap",
                height: "fit-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
                color: "rgb(255, 255, 255)",
                fontSize: "22px",
                fontFamily: "Space Mono",
                fontWeight: 700,
                lineHeight: "1.600000023841858em",
              }}
            >
              1025+
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
          Happy Robots
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
