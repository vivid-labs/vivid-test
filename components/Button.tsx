export const Button = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center rounded-full w-40 h-[51px] bg-[rgb(9,_85,_127)]"
      style={override}
    >
      <p className="text-white text-base font-semibold">{text}</p>
    </div>
  );
};
