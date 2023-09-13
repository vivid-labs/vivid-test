import dashedSeparator from "./dashedSeparator.svg";
export const DashedSeparator = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return <img className="w-6 h-0" src={dashedSeparator.src} style={override} />;
};
