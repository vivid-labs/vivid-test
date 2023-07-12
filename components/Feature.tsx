import frame from "./frame.svg";
export const Feature = ({
  override,
  heading,
  description,
}: {
  override?: any;
  heading: string;
  description: string;
}) => {
  return (
    <div
      style={override}
      className="flex flex-col items-start pt-0 px-0 pb-px relative"
      figma-id="1:1178"
    >
      <div
        className="flex flex-col items-start gap-[7px] pt-0 pr-[103.53px] pb-[2px] pl-0 relative flex-shrink-0"
        figma-id="1:232"
      >
        <div
          className="overflow-hidden relative w-4 h-4 flex-shrink-0"
          figma-id="1:233"
        >
          <img src={frame.src} className="absolute w-4 h-4" figma-id="1:234" />
        </div>
        <p
          className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(18,_18,_18)] text-[15px] font-[Avenir] font-black tracking-[0.06px] leading-[19px]"
          figma-id="1:236"
        >
          {heading}
        </p>
      </div>
      <div
        className="flex flex-row items-start pl-0 pr-[35.53px] py-0 relative w-full flex-shrink-0"
        figma-id="1:237"
      >
        <p
          className="flex flex-col justify-center flex-shrink-0 flex-1 min-w-[0rem] text-[rgb(18,_18,_18)] text-[15px] font-[Avenir] font-normal tracking-[0.1px] leading-[19px]"
          figma-id="1:238"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
