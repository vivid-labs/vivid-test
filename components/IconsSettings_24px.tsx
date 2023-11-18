import iconsSettings_24px from "./iconsSettings_24px.svg";
export const IconsSettings_24px = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img className="w-6 h-6" src={iconsSettings_24px.src} style={override} />
  );
};
