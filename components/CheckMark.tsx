import group from "./group.svg";

export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col justify-start items-start relative w-[40.63px] h-[40.63px]"
    >
      <img
        src={group.src}
        className="w-full flex-shrink-0 flex-1 min-h-[0rem]"
      />
    </div>
  );
};
