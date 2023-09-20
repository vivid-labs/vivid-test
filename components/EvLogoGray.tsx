import evLogoGray from "./evLogoGray.svg";
export const EvLogoGray = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img className="w-[97px] h-[97px]" src={evLogoGray.src} style={override} />
  );
};
