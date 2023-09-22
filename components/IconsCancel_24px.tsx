import iconsCancel_24px from "./iconsCancel_24px.svg";
export const IconsCancel_24px = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img className="w-6 h-6" src={iconsCancel_24px.src} style={override} />
  );
};
