import iconsError_24px from "./iconsError_24px.svg";
export const IconsError_24px = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-6 h-6" src={iconsError_24px.src} style={override} />;
};
