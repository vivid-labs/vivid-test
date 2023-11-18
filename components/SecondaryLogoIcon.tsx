import secondaryLogoIcon from "./secondaryLogoIcon.svg";
export const SecondaryLogoIcon = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
      className="w-12 h-[51px]"
      src={secondaryLogoIcon.src}
      style={override}
    />
  );
};
