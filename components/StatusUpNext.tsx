import { FigmaLogo } from "./FigmaLogo";
export const StatusUpNext = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-row items-center gap-5 px-[20px] py-[16px] rounded-[5px] relative w-full h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-[rgb(255,_255,_255)]"
      figma-id="233:1790"
    >
      <div className="relative w-14 h-14 flex-shrink-0" figma-id="233:1791">
        <div
          className="absolute w-14 h-14 bg-[rgb(217,_217,_217)] rounded-[50%]"
          figma-id="233:1792"
        />
        <FigmaLogo
          override={{
            height: "35px",
            width: "35px",
          }}
        />
      </div>
      <div
        className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
        figma-id="233:1794"
      >
        <div
          className="flex flex-row items-start gap-[10px] relative flex-shrink-0"
          figma-id="233:1846"
        >
          <p
            className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(148,_148,_148)] text-[16px] font-[Avenir] font-black tracking-[0.01px] leading-[23px]"
            figma-id="233:1795"
          >
            Do this task
          </p>
          <div
            className="overflow-hidden flex flex-row items-start gap-[10px] px-[8px] py-0 rounded-[4px] relative flex-shrink-0 bg-[rgb(0,_0,_0)]"
            figma-id="233:1836"
          >
            <p
              className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[16px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
              figma-id="233:1837"
            >
              Up Next!
            </p>
          </div>
        </div>
        <p
          className="flex flex-col justify-center w-full h-5 flex-shrink-0 text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
          figma-id="233:1796"
        >
          Time to do this task
        </p>
      </div>
    </div>
  );
};
