import frame from "./frame.jpg";
export const BuggyRelativeAbsoluteImage = ({
  override,
}: {
  override?: any;
}) => {
  return (
    <div
      style={override}
      className="flex items-start w-full p-4 rounded-[6.33px] relative flex-shrink-0 bg-[rgb(24,_24,_24)]"
      figma-id="15:132:19"
    >
      <div
        className="flex flex-col items-start gap-[15px] relative flex-shrink-0"
        figma-id="15:132:20"
      >
        <div
          className="rounded-[4.33px] relative [box-shadow:0px_8px_24px_rgb(0,_0,_0,_0.5)] w-[173px] h-[173px] flex-shrink-0 bg-[rgb(51,_51,_51)]"
          figma-id="15:132:21"
        >
          <div
            className="overflow-hidden rounded-[4.33px] absolute left-[0rem] right-[0rem] w-auto top-[0rem] bottom-[0rem] h-auto"
            figma-id="15:132:22"
          >
            <img
              src={frame.src}
              className="transform rotate-0 scale-[100%] translate-x-[0%] translate-y-[0%] origin-top-left absolute h-full w-full"
              figma-id=""
            />
          </div>
        </div>
        <div
          className="flex flex-col items-start relative flex-shrink-0"
          figma-id="15:132:23"
        >
          <div
            className="overflow-hidden flex items-start pr-[0.72px] pb-[4.59px] relative flex-shrink-0"
            figma-id="15:132:24"
          >
            <p
              className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[15px] font-[Inter] font-bold leading-[25.6px]"
              figma-id="15:132:25"
            >
              Bollywood Jazz
            </p>
          </div>
          <div
            className="overflow-hidden relative w-[173px] h-[44.78px] flex-shrink-0"
            figma-id="15:132:26"
          >
            <p
              className="flex flex-col justify-center text-[rgb(167,_167,_167)] text-[14px] font-[Inter] font-normal leading-[22.4px]"
              figma-id="15:132:27"
            >
              The best of Jazz music from Bollywood. Cover- A R Rahman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
