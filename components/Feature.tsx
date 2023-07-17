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
      className="flex flex-row items-start gap-[9px] px-[25px] py-[30px] rounded-[9px] relative backdrop-filter backdrop-blur-[10.5px]"
      figma-id="1201:1565"
    >
      <div
        className="flex flex-col items-start gap-[14px] relative w-[285px] flex-shrink-0"
        figma-id="1201:1566"
      >
        <p
          className="whitespace-nowrap text-center flex-shrink-0 text-[rgb(255,_255,_255)] text-[25px] font-[Quicksand] font-bold"
          figma-id="1201:1567"
        >
          {title}
        </p>
        <p
          className="w-full flex-shrink-0 text-[rgb(160,_160,_160)] text-[20px] font-[Quicksand] font-normal"
          figma-id="1201:1568"
        >
          {description}
        </p>
        <Link linkText="Select Guide" />
      </div>
      {icon}
    </div>
  );
};
