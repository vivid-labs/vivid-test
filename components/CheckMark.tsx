import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div
      className="overflow-hidden flex flex-col items-start relative w-[40.63px] h-[40.63px]"
      style={override}
    >
      <img
        className="w-full flex-shrink-0 flex-1 min-h-[0rem]"
        src={group.src}
      />
    </div>
  );
};
