export const AutolayoutSquare = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center gap-2.5 p-2.5 h-[115px] bg-[rgb(0,_240,_255)]"
      style={override}
    >
      <div className="overflow-hidden w-[33px] h-[15px] bg-white" />
      <div className="overflow-hidden w-[33px] h-[15px] bg-white" />
      <div className="overflow-hidden w-[33px] h-[15px] bg-white" />
    </div>
  );
};
