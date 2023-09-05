import personIcon from "./personIcon.svg";
export const PersonIcon = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img className="w-[15px] h-[18px]" src={personIcon.src} style={override} />
  );
};
