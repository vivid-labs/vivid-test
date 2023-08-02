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
      className="relative flex flex-col items-start px-[0rem] pb-px pt-[0rem]"
      style={override}
    >
      <div className="relative flex flex-shrink-0 flex-col items-start gap-[7px] pb-0.5 pl-[0rem] pr-[103.53px] pt-[0rem]">
        <div className="relative h-4 w-4 flex-shrink-0 overflow-hidden">
          <img className="absolute top-[0rem] h-4 w-4" src={frame.src} />
        </div>
        <p className="flex flex-col justify-center whitespace-nowrap text-[15px] font-black leading-[19px] tracking-[0.06px] text-[rgb(18,_18,_18)]">
          {heading}
        </p>
      </div>
      <div className="relative flex w-full flex-shrink-0 items-start py-[0rem] pl-[0rem] pr-[35.53px]">
        <p className="flex flex-col justify-center text-[15px] font-normal leading-[19px] tracking-[0.1px] text-[rgb(18,_18,_18)]">
          {description}
        </p>
      </div>
    </div>
  );
};
