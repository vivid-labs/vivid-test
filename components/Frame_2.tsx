import groupImage1 from "./groupImage1.svg";
import ltGroupgt from "./ltGroupgt.svg";
import groupImage from "./groupImage.svg";
import group from "./group.svg";
import artwork from "./artwork.svg";
export const Frame_2 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-center items-center gap-[13px] px-[76px] py-[44px] relative bg-[rgb(108,_108,_108)]"
      figma-id="545:144"
    >
      <p
        className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[12px] font-[Roboto] font-normal"
        figma-id="545:89"
      >
        Bam
      </p>
      <div
        className="overflow-hidden relative w-[135px] h-10 flex-shrink-0"
        figma-id="545:90"
      >
        <div figma-id="545:91">
          <img
            src={groupImage1.src}
            className="absolute right-[0rem] w-auto bottom-[0rem] h-auto"
            figma-id="545:92"
          />
          <div figma-id="545:95">
            <div figma-id="545:96">
              <img
                src={ltGroupgt.src}
                className="absolute left-[18px] -right-[18px] w-auto top-[8.72px] -bottom-[8.72px] h-auto"
                figma-id="545:97"
              />
            </div>
            <img
              src={groupImage.src}
              className="absolute left-[42.46px] -right-[18px] w-auto top-[17.87px] -bottom-[8.44px] h-auto"
              figma-id="545:100"
            />
            <img
              src={group.src}
              className="absolute left-[43.7px] -right-[13.33px] w-auto top-[8.44px] bottom-[10.26px] h-auto"
              figma-id="545:109"
            />
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden relative w-[135px] h-10 flex-shrink-0"
        figma-id="545:123"
      >
        <div figma-id="545:124">
          <img
            src={artwork.src}
            className="absolute right-[0rem] w-auto bottom-[0rem] h-auto"
            figma-id="545:125"
          />
        </div>
      </div>
    </div>
  );
};
