import group_1 from "./group_1.svg";
export const InviteEmail = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-row justify-center items-center gap-[10px] p-[6px] rounded-[5px] relative bg-[rgb(244,_86,_154)]"
      figma-id="29:800"
    >
      <p
        className="text-center flex flex-col justify-center w-[121px] h-[14px] flex-shrink-0 text-[rgb(255,_255,_255)] text-[15px] font-[Avenir] font-medium"
        figma-id="29:791"
      >
        jorge@vivid.lol
      </p>
      <div
        className="overflow-hidden flex flex-col justify-center items-center gap-[10px] p-[10px] rounded-[8px] relative w-4 h-4 flex-shrink-0 bg-[rgb(175,_51,_105)]"
        figma-id="29:795"
      >
        <img
          src={group_1.src}
          className="w-[8.4px] h-[7.64px] flex-shrink-0"
          figma-id="29:798"
        />
      </div>
    </div>
  );
};
