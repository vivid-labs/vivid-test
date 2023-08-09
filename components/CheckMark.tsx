import group from "./group.svg";
export const CheckMark = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-start relative w-[41px] h-[41px]"
      style={override}
    >
      <img className="w-full flex-1 min-h-0" src={group.src} />
    </div>
  );
};
