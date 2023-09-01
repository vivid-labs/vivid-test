import personIcon from "./personIcon.svg";
export const PersonIcon = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-[18px] h-5" src={personIcon.src} style={override} />;
};
