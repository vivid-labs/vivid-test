export const Checkbox = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden rounded-sm w-4 h-4 border-solid border-[rgb(123,_129,_138)] border"
      style={override}
    />
  );
};
