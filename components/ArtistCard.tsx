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
        >
          <div className="flex flex-col items-end relative flex-shrink-0">
            <Avatar
              property_1="Big"
              avatarPhoto={<Avatar_14 />}
              override={{
                height: "fit-content",
                width: "120px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px] relative w-full flex-shrink-0">
            <p className="text-center text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]">
              {artistName}
            </p>
            {additionalInfo ? (
              <div className="flex justify-center items-start gap-[10px] relative w-full flex-shrink-0">
                <p className="text-[rgb(133,_133,_132)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]">
                  {totalSales}
                </p>
                <p className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]">
                  {salesNumber}
                </p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div className="flex items-start gap-[10px] rounded-[20px] absolute w-[30px] left-5 top-[18px] bg-[rgb(43,_43,_43)]">
              <p className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(133,_133,_132)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]">
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
        >
          <div className="flex flex-col items-end relative flex-shrink-0">
            <Avatar
              property_1="medium"
              avatarPhoto={<Avatar_1 />}
              override={{
                height: "fit-content",
                width: "60px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-[5px] relative flex-shrink-0 flex-1 min-w-[0rem]">
            <p className="text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]">
              {artistName}
            </p>
            {additionalInfo ? (
              <div className="flex items-center gap-[5px] relative w-full flex-shrink-0">
                <p className="text-[rgb(133,_133,_132)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]">
                  {totalSales}
                </p>
                <p className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]">
                  {salesNumber}
                </p>
              </div>
            ) : null}
          </div>
          {rankingNumber2 ? (
            <div className="flex items-start gap-[10px] rounded-[20px] absolute w-[30px] left-3 top-[13px] bg-[rgb(43,_43,_43)]">
              <p className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(133,_133,_132)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]">
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
        >
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]">
            {artistName}
          </p>
        </div>
      );
    case "Horizontal Small":
      return (
        <div
          style={override}
          className="flex items-center gap-3 p-5 rounded-[20px] relative bg-[rgb(59,_59,_59)]"
        >
          <Avatar property_1="Small" avatarPhoto={<Avatar_1 />} />
          <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[16px] font-[Work_Sans] font-normal leading-[1.4em]">
            {artistName}
          </p>
        </div>
      );
    default:
      return null;
  }
};
