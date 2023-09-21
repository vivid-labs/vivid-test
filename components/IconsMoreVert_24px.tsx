import iconsMoreVert_24px from "./iconsMoreVert_24px.svg";
export const IconsMoreVert_24px = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img className="w-6 h-6" src={iconsMoreVert_24px.src} style={override} />
  );
};
