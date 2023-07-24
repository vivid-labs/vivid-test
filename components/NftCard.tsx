import imagePlaceholder from "./imagePlaceholder.png";
import { Avatar } from "./Avatar";
import { Avatar_1 } from "./Avatar_1";
export const NftCard = ({
  override,
  property_1,
  nftName,
  artistAvatarName,
  artistName,
  additionalInfo,
  priceNumber,
  bidNumber,
}: {
  override?: any;
  property_1: string;
  nftName: string;
  artistAvatarName: boolean;
  artistName: string;
  additionalInfo: boolean;
  priceNumber: string;
  bidNumber: string;
}) => {
  switch (property_1) {
    case "Default":
      return (
        <div
          style={override}
          className="flex flex-col items-center rounded-[20px] relative w-[330px] h-[468px] bg-[rgb(59,_59,_59)]"
          figma-id="7:1218:12671"
        >
          <div
            className="flex flex-col items-start gap-[10px] relative rounded-tl-[20px] rounded-tr-[20px] w-full flex-shrink-0 flex-1 min-h-[0rem]"
            figma-id="7:1218:12668"
          >
            <img
              src={imagePlaceholder.src}
              className="w-full flex-shrink-0 flex-1 min-h-[0rem] object-cover opacity-100 rounded-tl-[20px] rounded-tr-[20px]"
              figma-id="7:1218:12620"
            />
          </div>
          <div
            className="flex flex-col items-start gap-[25px] pt-[20px] px-[30px] pb-[25px] relative w-full flex-shrink-0"
            figma-id="7:1218:12667"
          >
            <div
              className="flex flex-col items-start gap-[5px] relative w-full flex-shrink-0"
              figma-id="7:1218:12628"
            >
              <p
                className="text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]"
                figma-id="7:1218:12619"
              >
                {nftName}
              </p>
              {artistAvatarName ? (
                <div
                  className="flex items-start gap-3 relative w-full flex-shrink-0"
                  figma-id="7:1218:12627"
                >
                  <Avatar
                    property_1="Small"
                    avatarPhoto={<Avatar_1 figma-id="7:" />}
                    figma-id="7:1218:12624"
                  />
                  <p
                    className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                    figma-id="7:1218:12614"
                  >
                    {artistName}
                  </p>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div
                className="flex items-start relative w-full flex-shrink-0"
                figma-id="7:1218:12645"
              >
                <div
                  className="flex flex-col items-start gap-2 pl-0 pr-[21px] py-0 relative flex-shrink-0 flex-1 min-w-[0rem]"
                  figma-id="7:1218:12646"
                >
                  <p
                    className="text-[rgb(133,_133,_132)] text-[12px] font-[Space_Mono] font-normal leading-[1.1em]"
                    figma-id="7:1218:12648"
                  >
                    Price
                  </p>
                  <p
                    className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                    figma-id="7:1218:12650"
                  >
                    {priceNumber}
                  </p>
                </div>
                <div
                  className="flex flex-col justify-center items-end gap-2 relative flex-shrink-0 flex-1 min-w-[0rem]"
                  figma-id="7:1218:12651"
                >
                  <p
                    className="text-[rgb(133,_133,_132)] text-[12px] font-[Space_Mono] font-normal leading-[1.1em]"
                    figma-id="7:1218:12653"
                  >
                    Highest Bid
                  </p>
                  <p
                    className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                    figma-id="7:1218:12655"
                  >
                    {bidNumber}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    case "Small":
      return (
        <div
          style={override}
          className="flex flex-col items-center rounded-[20px] relative w-[238px] h-[402px] bg-[rgb(59,_59,_59)]"
          figma-id="7:1614:7811"
        >
          <div
            className="flex flex-col items-start gap-[10px] relative rounded-tl-[20px] rounded-tr-[20px] w-full flex-shrink-0 flex-1 min-h-[0rem]"
            figma-id="7:1614:7812"
          >
            <img
              src={imagePlaceholder.src}
              className="w-full flex-shrink-0 flex-1 min-h-[0rem] object-cover opacity-100 rounded-tl-[20px] rounded-tr-[20px]"
              figma-id="7:1614:7813"
            />
          </div>
          <div
            className="flex flex-col items-start gap-[25px] pt-[20px] px-[20px] pb-[25px] relative w-full flex-shrink-0"
            figma-id="7:1614:7814"
          >
            <div
              className="flex flex-col items-start gap-[5px] relative w-full flex-shrink-0"
              figma-id="7:1614:7815"
            >
              <p
                className="text-[rgb(255,_255,_255)] text-[22px] font-[Work_Sans] font-semibold leading-[1.4em]"
                figma-id="7:1614:7817"
              >
                {nftName}
              </p>
              {artistAvatarName ? (
                <div
                  className="flex items-start gap-3 relative w-full flex-shrink-0"
                  figma-id="7:1614:7818"
                >
                  <Avatar
                    property_1="Small"
                    avatarPhoto={<Avatar_1 figma-id="7:" />}
                    figma-id="7:1614:7819"
                  />
                  <div
                    className="flex items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
                    figma-id="7:1614:7820"
                  >
                    <p
                      className="text-[rgb(255,_255,_255)] text-[16px] font-[Space_Mono] font-normal leading-[1.4em]"
                      figma-id="7:1614:7821"
                    >
                      {artistName}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
            {additionalInfo ? (
              <div
                className="flex items-start relative w-full flex-shrink-0"
                figma-id="7:1614:7822"
              >
                <div
                  className="flex flex-col items-start gap-2 pl-0 pr-[21px] py-0 relative flex-shrink-0 flex-1 min-w-[0rem]"
                  figma-id="7:1614:7823"
                >
                  <p
                    className="text-[rgb(133,_133,_132)] text-[12px] font-[Space_Mono] font-normal leading-[1.1em]"
                    figma-id="7:1614:7825"
                  >
                    Price
                  </p>
                  <p
                    className="text-[rgb(255,_255,_255)] text-[12px] font-[Space_Mono] font-normal leading-[1.1em]"
                    figma-id="7:1614:7827"
                  >
                    {priceNumber}
                  </p>
                </div>
                <div
                  className="flex flex-col justify-center items-end gap-2 relative flex-shrink-0 flex-1 min-w-[0rem]"
                  figma-id="7:1614:7828"
                >
                  <p
                    className="text-[rgb(133,_133,_132)] text-[12px] font-[Space_Mono] font-normal leading-[1.1em]"
                    figma-id="7:1614:7830"
                  >
                    Highest Bid
                  </p>
                  <p
                    className="text-[rgb(255,_255,_255)] text-[12px] font-[Space_Mono] font-normal leading-[1.1em]"
                    figma-id="7:1614:7832"
                  >
                    {bidNumber}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    default:
      return null;
  }
};
