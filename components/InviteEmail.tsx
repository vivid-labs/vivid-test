import group_1 from "./group_1.svg";
export const InviteEmail = ({ override }: { override?: any }) => {
  return (
    <div
      className="relative flex items-center justify-center gap-2.5 overflow-hidden rounded-[5px] bg-[rgb(244,_86,_154)] p-1.5"
      style={override}
    >
      <p className="flex flex-col justify-center text-center text-[15px] font-medium text-white">
        jorge@vivid.lol
      </p>
      <div className="relative flex h-4 w-4 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-full bg-[rgb(175,_51,_105)] p-2.5">
        <img className="h-[7.64px] w-[8.4px] flex-shrink-0" src={group_1.src} />
      </div>
    </div>
  );
};
