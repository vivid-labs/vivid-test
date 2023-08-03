import group_1 from "./group_1.svg";
export const NewConversation = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex h-[71px] w-64 items-center justify-between overflow-hidden border-b border-solid border-[rgb(242,_242,_242)] bg-white p-3"
      style={override}
    >
      <div className="flex flex-shrink-0 flex-col items-start">
        <p className="whitespace-nowrap text-sm font-normal text-[rgb(72,_72,_72)]">
          Start a new conversation!
        </p>
      </div>
      <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-[rgb(242,_242,_242)] px-[7px] py-[5px]">
        <img className="h-[18px] w-[18px] flex-shrink-0" src={group_1.src} />
      </div>
    </div>
  );
};
