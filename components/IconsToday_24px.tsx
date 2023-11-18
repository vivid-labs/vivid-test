import iconsToday_24px from "./iconsToday_24px.svg";
export const IconsToday_24px = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-6 h-6" src={iconsToday_24px.src} style={override} />;
};
