import { Link } from "./Link";
import { VolumeDown } from "./VolumeDown";
export const Feature = ({
  override,
  title,
  description,
  icon,
}: {
  override?: React.CSSProperties;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className="flex items-start gap-[9px] rounded-[9px] bg-[rgba(255,_255,_255,_0.08)] px-[25px] py-[30px] backdrop-blur-[10.5px] backdrop-filter"
      style={override}
    >
      <div className="flex w-[285px] flex-shrink-0 flex-col items-start gap-3.5">
        <p className="whitespace-nowrap text-[25px] font-bold text-white">
          {title}
        </p>
        <p className="text-xl font-normal text-[rgb(160,_160,_160)]">
          {description}
        </p>
        <Link linkText="Select Guide" />
      </div>
      {icon}
    </div>
  );
};
