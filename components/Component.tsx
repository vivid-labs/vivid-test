export const Component = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="h-[37px] w-[39px] overflow-hidden bg-[rgb(65,_124,_212)]"
      style={override}
    />
  );
};
