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
    <div className="flex flex-col items-start pb-px" style={override}>
      <div className="flex flex-shrink-0 flex-col items-start gap-[7px] pb-0.5 pr-[103.53px]">
        <div className="relative h-4 w-4 flex-shrink-0 overflow-hidden">
          <img className="absolute top-0 h-4 w-4" src={frame.src} />
        </div>
        <p className="flex flex-col justify-center whitespace-nowrap text-[15px] font-black leading-[19px] tracking-[0.06px] text-[rgb(18,_18,_18)]">
          {heading}
        </p>
      </div>
      <div className="flex w-full flex-shrink-0 items-start pr-[35.53px]">
        <p className="flex flex-col justify-center text-[15px] font-normal leading-[19px] tracking-[0.1px] text-[rgb(18,_18,_18)]">
          {description}
        </p>
      </div>
    </div>
  );
};
