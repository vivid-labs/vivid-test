import group from "./group.svg";
export const CheckMark = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-col items-start relative w-full h-[40.63px]"
      figma-id="29:532"
    >
      <img
        src={group.src}
        className="w-full flex-shrink-0 flex-1 min-h-[0rem]"
        figma-id="12:97"
      />
    </div>
  );
};
