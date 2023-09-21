export const Button = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex justify-center items-center px-[19px] py-[9px] rounded-[5px] bg-[rgb(109,_121,_235)]"
      style={override}
    >
      <p className="text-black text-xs font-normal">Click Me</p>
    </div>
  );
};
