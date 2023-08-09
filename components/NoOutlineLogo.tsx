import logo_2 from "./logo_2.png";
export const NoOutlineLogo = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div className="relative w-[62px] h-[62px]" style={override}>
      <img
        className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full object-cover"
        src={logo_2.src}
      />
    </div>
  );
};
