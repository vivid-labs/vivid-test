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
      className="flex items-start gap-[9px] px-[25px] py-[30px] rounded-[9px] backdrop-filter backdrop-blur-[10.5px] bg-[rgba(255,_255,_255,_0.08)]"
      style={override}
    >
      <div className="flex flex-col items-start gap-3.5 w-[285px]">
        <p className="text-white text-[25px] font-bold">{title}</p>
        <p className="w-full text-[rgb(160,_160,_160)] text-xl font-normal">
          {description}
        </p>
        <Link linkText="Select Guide" />
      </div>
      {icon}
    </div>
  );
};
