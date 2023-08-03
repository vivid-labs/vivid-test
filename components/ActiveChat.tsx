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
      className="flex w-[309px] items-center gap-2.5 overflow-hidden border-b border-solid border-[rgb(242,_242,_242)] bg-white p-3"
      style={override}
    >
      <ProfilePicture />
      <div className="flex flex-shrink-0 flex-col items-start gap-2.5">
        <p className="whitespace-nowrap text-sm font-normal text-[rgb(72,_72,_72)]">
          {name}
        </p>
        <p className="text-[10px] font-normal text-[rgb(193,_193,_193)]">
          {lastChat}
        </p>
      </div>
    </div>
  );
};
