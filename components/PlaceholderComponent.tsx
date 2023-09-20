export const PlaceholderComponent = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center py-9 w-[190px] h-[95px] bg-[rgb(226,_226,_226)]"
      style={override}
    >
      <p className="text-black text-base font-medium tracking-[0.01px] leading-[23px]">
        Component
      </p>
    </div>
  );
};
