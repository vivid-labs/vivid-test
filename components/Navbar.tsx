import group from "./group.svg";
import { DepannageDropdown } from "./DepannageDropdown";
import { MarketDropdown } from "./MarketDropdown";
import { AProposDropdown } from "./AProposDropdown";
import { BtnSupport } from "./BtnSupport";
export const Navbar = ({
  override,
  property_1,
}: {
  override?: any;
  property_1: string;
}) => {
  switch (property_1) {
    case "depannage navbar":
      return (
        <div
          style={override}
          className="relative w-[1438.66px] h-[74px] bg-[rgb(255,_255,_255)]"
          figma-id="1201:7088"
        >
          <img
            src={group.src}
            className="absolute left-[63.98px] right-[1322.82px] w-auto top-[12.78px] bottom-[23.07px] h-auto"
            figma-id="1201:7089"
          />
          <div
            className="absolute w-[516px] left-[759.66px] h-[34px] top-5"
            figma-id="1201:7096"
          >
            <DepannageDropdown property_1="deppanage dropdown" />
            <MarketDropdown property_1="dropdown" />
            <AProposDropdown property_1="dropdown" />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
    case "default":
      return (
        <div
          style={override}
          className="relative w-[1438.66px] h-[74px] bg-[rgb(255,_255,_255)]"
          figma-id="1201:7101"
        >
          <img
            src={group.src}
            className="absolute left-[63.98px] right-[1322.82px] w-auto top-[12.78px] bottom-[23.07px] h-auto"
            figma-id="1201:7102"
          />
          <div
            className="absolute w-[516px] left-[759.66px] h-[34px] top-5"
            figma-id="1201:7109"
          >
            <DepannageDropdown property_1="dropdown" />
            <MarketDropdown property_1="dropdown" />
            <AProposDropdown property_1="dropdown" />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
    case "market navbar":
      return (
        <div
          style={override}
          className="relative w-[1438.66px] h-[74px] bg-[rgb(255,_255,_255)]"
          figma-id="1201:7114"
        >
          <img
            src={group.src}
            className="absolute left-[63.98px] right-[1322.82px] w-auto top-[12.78px] bottom-[23.07px] h-auto"
            figma-id="1201:7115"
          />
          <div
            className="absolute w-[516px] left-[759.66px] h-[34px] top-5"
            figma-id="1201:7122"
          >
            <DepannageDropdown property_1="dropdown" />
            <MarketDropdown property_1="deppanage dropdown" />
            <AProposDropdown property_1="dropdown" />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
    case "a propos navbar":
      return (
        <div
          style={override}
          className="relative w-[1438.66px] h-[74px] bg-[rgb(255,_255,_255)]"
          figma-id="1201:7127"
        >
          <img
            src={group.src}
            className="absolute left-[63.98px] right-[1322.82px] w-auto top-[12.78px] bottom-[23.07px] h-auto"
            figma-id="1201:7128"
          />
          <div
            className="absolute w-[516px] left-[759.66px] h-[34px] top-5"
            figma-id="1201:7135"
          >
            <DepannageDropdown property_1="dropdown" />
            <MarketDropdown property_1="dropdown" />
            <AProposDropdown property_1="deppanage dropdown" />
            <BtnSupport property_1="btn default" />
          </div>
        </div>
      );
    default:
      return null;
  }
};
