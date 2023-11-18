export const Square = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden w-[125px] h-[115px] bg-[rgb(240,_64,_255)]"
      style={override}
    />
  );
};
