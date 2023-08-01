import group_1 from "./group_1.svg";
export const NewConversation = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex justify-between items-center p-3 relative w-64 h-[71px] border-solid border-[rgb(242,_242,_242)] border-b bg-white"
    >
      <div className="flex flex-col items-start relative flex-shrink-0">
        <p className="whitespace-nowrap text-[rgb(72,_72,_72)] text-sm font-normal">
          Start a new conversation!
        </p>
      </div>
      <div className="overflow-hidden flex justify-center items-center px-[7px] py-[5px] rounded-full relative w-10 h-10 flex-shrink-0 bg-[rgb(242,_242,_242)]">
        <img src={group_1.src} className="w-[18px] h-[18px] flex-shrink-0" />
      </div>
    </div>
  );
};
