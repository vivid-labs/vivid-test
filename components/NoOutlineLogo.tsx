import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className="relative h-[62px] w-[62px]" style={override}>
      <img
        className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full object-cover"
        src={logo_2.src}
      />
    </div>
  );
};
