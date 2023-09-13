import x from "./x.svg";
export const XIcon = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col justify-center items-center rounded-full relative w-5 h-5 bg-[rgb(235,_115,_92)]"
      style={override}
    >
      <img className="w-[9px] h-2" src={x.src} />
    </div>
  );
};
