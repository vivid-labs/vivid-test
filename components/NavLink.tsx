export const NavLink = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center"
      style={override}
    >
      <p className="text-black text-base font-normal">{text}</p>
    </div>
  );
};
