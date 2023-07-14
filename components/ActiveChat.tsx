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
      className="overflow-hidden flex items-center gap-[10px] p-3 relative w-[309px] border-solid border-[rgb(242,_242,_242)] border-b bg-[rgb(255,_255,_255)]"
      figma-id="1:9"
    >
      <ProfilePicture />
      <div
        className="flex flex-col items-start gap-[10px] relative flex-shrink-0"
        figma-id="1:23"
      >
        <p
          className="whitespace-nowrap flex-shrink-0 text-[rgb(72,_72,_72)] text-[14px] font-[Avenir] font-normal"
          figma-id="1:16"
        >
          {name}
        </p>
        <p
          className="w-[83px] h-[19px] flex-shrink-0 text-[rgb(193,_193,_193)] text-[10px] font-[Avenir] font-normal"
          figma-id="1:13"
        >
          {lastChat}
        </p>
      </div>
    </div>
  );
};
