import iconmonstrCheckMark_1_1_1 from "./iconmonstrCheckMark_1_1_1.svg";
export const Feature = ({
  override,
  feature,
}: {
  override?: React.CSSProperties;
  feature: string;
}) => {
  return (
    <div
      className="overflow-hidden flex items-center gap-2.5 py-[3px]"
      style={override}
    >
      <img className="w-3.5 h-3.5" src={iconmonstrCheckMark_1_1_1.src} />
      <p className="w-[181px] text-black text-xs font-medium">{feature}</p>
    </div>
  );
};
