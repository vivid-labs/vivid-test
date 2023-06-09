import "./Feature.css";
import { Link } from "./Link";
import { VolumeDown } from "./VolumeDown";

export const Feature = ({
  override,
  title,
  description,
  icon,
}: {
  override?: any;
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <div
      style={override}
      className="flex flex-row justify-start items-start gap-[9px] pl-[25px] pr-[25px] pt-[30px] pb-[30px] rounded-[9px] relative backdrop-filter backdrop-blur-[10.5px]"
    >
      <div className="flex flex-col justify-start items-start gap-[14px] relative w-[285px] flex-shrink-0">
        <p className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[25px] font-[Quicksand] font-bold">
          {title}
        </p>
        <p className="w-full flex-shrink-0 text-[rgb(160,_160,_160)] text-[20px] font-[Quicksand] font-normal">
          {description}
        </p>
        <Link linkText="Select Guide" />
      </div>
      {icon}
    </div>
  );
};
