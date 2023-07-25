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
        <div
          style={override}
          className="flex flex-col items-center gap-5 p-5 rounded-[20px] relative w-60 bg-[rgb(59,_59,_59)]"
          figma-id="7:1288:12923"
        >
          <div
            className="flex flex-col items-end relative flex-shrink-0"
            figma-id="7:1288:13060"
          >
            <Avatar
              property_1="Big"
              avatarPhoto={<Avatar_14 figma-id="7:" />}
              override={{
                height: "fit-content",
                width: "120px",
              }}
              figma-id="7:1288:12907"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center gap-[5px] relative w-full flex-shrink-0"
            figma-id="7:1288:12914"
          >
            <p
              className="text-center text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]"
              figma-id="7:1288:12909"
            >
              {artistName}
            </p>
            {additionalInfo ? (
              <div
                className="flex justify-center items-start gap-[10px] relative w-full flex-shrink-0"
                figma-id="7:1288:12913"
              >
                <p
                  className="text-[rgb(133,_133,_132)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]"
                  figma-id="7:1288:12910"
                >
                  {totalSales}
                </p>
                <p
                  className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                  figma-id="7:1288:12911"
                >
                  {salesNumber}
                </p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div
              className="flex items-start gap-[10px] rounded-[20px] absolute w-[30px] left-5 top-[18px] bg-[rgb(43,_43,_43)]"
              figma-id="7:1411:5351"
            >
              <p
                className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(133,_133,_132)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                figma-id="7:1385:2277"
              >
                {rankingNumber}
              </p>
            </div>
          ) : null}
        </div>
      );
    case "Horizontal Big":
      return (
        <div
          style={override}
          className="flex justify-center items-start gap-5 p-5 rounded-[20px] relative w-[315px] bg-[rgb(59,_59,_59)]"
          figma-id="7:1666:9873"
        >
          <div
            className="flex flex-col items-end relative flex-shrink-0"
            figma-id="7:1666:9874"
          >
            <Avatar
              property_1="medium"
              avatarPhoto={<Avatar_1 figma-id="7:" />}
              override={{
                height: "fit-content",
                width: "60px",
              }}
              figma-id="7:1666:9875"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start gap-[5px] relative flex-shrink-0 flex-1 min-w-[0rem]"
            figma-id="7:1666:9876"
          >
            <p
              className="text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]"
              figma-id="7:1666:9877"
            >
              {artistName}
            </p>
            {additionalInfo ? (
              <div
                className="flex items-center gap-[5px] relative w-full flex-shrink-0"
                figma-id="7:1666:9878"
              >
                <p
                  className="text-[rgb(133,_133,_132)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]"
                  figma-id="7:1666:9879"
                >
                  {totalSales}
                </p>
                <p
                  className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                  figma-id="7:1666:9880"
                >
                  {salesNumber}
                </p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div
              className="flex items-start gap-[10px] rounded-[20px] absolute w-[30px] left-3 top-[13px] bg-[rgb(43,_43,_43)]"
              figma-id="7:1666:9881"
            >
              <p
                className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(133,_133,_132)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                figma-id="7:1666:9882"
              >
                {rankingNumber}
              </p>
            </div>
          ) : null}
        </div>
      );
    case "Horizontal Medium":
      return (
        <div
          style={override}
          className="flex items-center gap-3 p-5 rounded-[20px] relative bg-[rgb(59,_59,_59)]"
          figma-id="7:1288:12999"
        >
          <Avatar
            property_1="Small"
            avatarPhoto={<Avatar_1 figma-id="7:" />}
            figma-id="7:1288:13000"
          />
          <p
            className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]"
            figma-id="7:1288:13002"
          >
            {artistName}
          </p>
        </div>
      );
    case "Horizontal Small":
      return (
        <div
          style={override}
          className="flex items-center gap-3 p-5 rounded-[20px] relative bg-[rgb(59,_59,_59)]"
          figma-id="7:1288:13008"
        >
          <Avatar
            property_1="Small"
            avatarPhoto={<Avatar_1 figma-id="7:" />}
            figma-id="7:1288:13009"
          />
          <p
            className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]"
            figma-id="7:1288:13011"
          >
            {artistName}
          </p>
        </div>
      );
    default:
      return null;
  }
};
