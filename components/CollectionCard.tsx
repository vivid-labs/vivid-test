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
          lineHeight: "1.60em",
        }
      : {
          fontSize: "16px",
          lineHeight: "1.40em",
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
      className="flex flex-col items-start gap-[15px] rounded-[20px] relative bg-[rgb(43,_43,_43)]"
      figma-id="7:1342:12751"
    >
      <div
        className="flex flex-col items-start gap-[15px] relative w-full flex-shrink-0"
        figma-id="7:1338:12843"
      >
        <img
          style={primaryPhotoPlaceholderProperty_1}
          src={primaryPhotoPlaceholder.src}
          className="w-full flex-shrink-0 object-cover opacity-100 rounded-[20px]"
          figma-id="7:1338:12820"
        />
        <div
          className="flex items-start gap-[15px] relative w-full flex-shrink-0"
          figma-id="7:1338:12842"
        >
          <img
            style={secondaryPhotoPlaceholderProperty_1}
            src={secondaryPhotoPlaceholderImage.src}
            className="flex-shrink-0 flex-1 min-w-[0rem] object-cover opacity-100 rounded-[20px]"
            figma-id="7:1338:12832"
          />
          <img
            style={secondaryPhotoPlaceholderImageProperty_1}
            src={secondaryPhotoPlaceholder.src}
            className="flex-shrink-0 flex-1 min-w-[0rem] object-cover opacity-100 rounded-[20px]"
            figma-id="7:1338:12833"
          />
          <div
            style={numberOfAdditionalNfTsProperty_1}
            className="flex flex-col justify-center items-center gap-[10px] px-[15px] py-[32px] rounded-[20px] relative flex-shrink-0 flex-1 min-w-[0rem] bg-[rgb(162,_89,_255)]"
            figma-id="7:1338:12840"
          >
            <p
              style={text1025Property_1}
              className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_255,_255)] font-[Space_Mono] font-bold"
              figma-id="7:1338:12837"
            >
              {additionalNfTsNumber}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-start gap-[10px] relative w-full flex-shrink-0"
        figma-id="7:1338:12857"
      >
        <p
          className="text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]"
          figma-id="7:1338:12835"
        >
          {collectionName}
        </p>
        <ArtistCard
          property_1="Horizontal Small"
          rankingNumber2={true}
          additionalInfo={true}
          artistName="@Robotica "
          totalSales="Total Sales:"
          rankingNumber="1"
          salesNumber="34.53 ETH"
          override={{
            height: "fit-content",
            gap: "12px",
            width: "100%",
          }}
          figma-id="7:1338:12844"
        />
      </div>
    </div>
  );
};
