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
      className="flex flex-col items-start pt-[0rem] px-[0rem] pb-px relative"
      style={override}
    >
      <div className="flex flex-col items-start gap-[7px] pt-[0rem] pr-[103.53px] pb-0.5 pl-[0rem] relative flex-shrink-0">
        <div className="overflow-hidden relative w-4 h-4 flex-shrink-0">
          <img className="absolute w-4 h-4 top-[0rem]" src={frame.src} />
        </div>
        <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-[15px] font-black tracking-[0.06px] leading-[19px]">
          {heading}
        </p>
      </div>
      <div className="flex items-start pl-[0rem] pr-[35.53px] py-[0rem] relative w-full flex-shrink-0">
        <p className="flex flex-col justify-center text-[rgb(18,_18,_18)] text-[15px] font-normal tracking-[0.1px] leading-[19px]">
          {description}
        </p>
      </div>
    </div>
  );
};
