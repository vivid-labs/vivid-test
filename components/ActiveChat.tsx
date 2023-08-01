import { ProfilePicture } from "./ProfilePicture";
export const ActiveChat = ({
  override,
  name,
  lastChat,
}: {
  override?: any;
  name: string;
  lastChat: string;
}) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex items-center gap-2.5 p-3 relative w-[309px] border-solid border-[rgb(242,_242,_242)] border-b bg-white"
    >
      <ProfilePicture />
      <div className="flex flex-col items-start gap-2.5 relative flex-shrink-0">
        <p className="whitespace-nowrap text-[rgb(72,_72,_72)] text-sm font-normal">
          {name}
        </p>
        <p className="text-[rgb(193,_193,_193)] text-[10px] font-normal">
          {lastChat}
        </p>
      </div>
    </div>
  );
};
