export const NavLink = ({
  override,
  text,
}: {
  override?: React.CSSProperties;
  text: string;
}) => {
  return (
    <div className="flex justify-center items-center" style={override}>
      <p className="text-black text-base font-medium">{text}</p>
    </div>
  );
};
