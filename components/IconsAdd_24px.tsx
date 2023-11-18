import iconsAdd_24px from "./iconsAdd_24px.svg";
export const IconsAdd_24px = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-6 h-6" src={iconsAdd_24px.src} style={override} />;
};
