import screenshot from "./screenshot.jpg";
export const Screenshot = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <img
      className="w-full h-[755px] object-cover"
      style={override}
      src={screenshot.src}
    />
  );
};
