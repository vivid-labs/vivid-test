export const Button = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center px-12 py-3.5 rounded-full border-solid border-black border bg-[rgb(237,_201,_91)]"
      style={override}
    >
      <p className="text-black text-xs font-bold">{text}</p>
    </div>
  );
};
