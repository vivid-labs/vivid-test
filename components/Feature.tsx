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
      className="flex flex-col justify-start items-start pb-px relative"
    >
      <div className="flex flex-col justify-start items-start gap-[7px] pr-[103.53px] pb-[2px] relative flex-shrink-0">
        <div className="overflow-hidden relative w-4 h-4 flex-shrink-0">
          <img src={frame.src} className="absolute w-4 h-4 top-[0rem]" />
        </div>
        <p className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(18,_18,_18)] text-[15px] font-[Avenir] font-extrabold tracking-[0.060750000178813934px] leading-[19px]">
          {heading}
        </p>
      </div>
      <div className="flex flex-row justify-start items-start pr-[35.53px] relative w-full flex-shrink-0">
        <p className="flex flex-col justify-center flex-shrink-0 flex-1 [0rem] text-[rgb(18,_18,_18)] text-[15px] font-[Avenir] font-normal tracking-[0.10125000029802322px] leading-[19px]">
          {description}
        </p>
      </div>
    </div>
  );
};
