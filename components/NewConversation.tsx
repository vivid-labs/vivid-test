import group_1 from "./group_1.svg";
export const NewConversation = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-row justify-between items-center p-3 relative w-64 h-[71px] border-solid border-[rgb(242,_242,_242)] border-b bg-[rgb(255,_255,_255)]"
      figma-id="19:87"
    >
      <div
        className="flex flex-col items-start gap-[10px] relative flex-shrink-0"
        figma-id="19:79"
      >
        <p
          className="whitespace-nowrap flex-shrink-0 text-[rgb(72,_72,_72)] text-[14px] font-[Avenir] font-normal"
          figma-id="19:80"
        >
          Start a new conversation!
        </p>
      </div>
      <div
        className="overflow-hidden flex flex-row justify-between items-center px-[7px] py-[5px] rounded-[100px] relative w-10 h-10 flex-shrink-0 bg-[rgb(242,_242,_242)]"
        figma-id="19:83"
      >
        <img
          src={group_1.src}
          className="w-[18px] h-[18px] flex-shrink-0"
          figma-id="19:86"
        />
      </div>
    </div>
  );
};
