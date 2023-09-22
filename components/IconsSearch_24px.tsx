import iconsSearch_24px from "./iconsSearch_24px.svg";
export const IconsSearch_24px = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img className="w-6 h-6" src={iconsSearch_24px.src} style={override} />
  );
};
