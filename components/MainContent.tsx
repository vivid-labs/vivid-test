import { NewConversation } from "./NewConversation";
import { ActiveChat } from "./ActiveChat";
import { ProfilePicture } from "./ProfilePicture";
import { MessageWrapper } from "./MessageWrapper";
import whiteArrow_1 from "./whiteArrow_1.png";
export const MainContent = ({ override }: { override?: any }) => {
  const activeChatProps = [
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        height: "fit-content",
        width: "100%",
      },
    },
    {
      lastChat: "Last chat",
      name: "Name",
    },
    {
      lastChat: "Last chat",
      name: "Name",
    },
    {
      lastChat: "Last chat",
      name: "Name",
    },
    {
      lastChat: "Last chat",
      name: "Name",
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        height: "fit-content",
        width: "100%",
      },
    },
  ];
  const messageWrapperProps = [
    {
      from: "Me",
      message: "This is an automated message from Verizon",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Me",
      message: "You need to update your phone plan",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Me",
      message:
        "otherwise we're going to find you. find your family. and you do not want to be around when that happens. ",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Other",
      message: "Hi, my name is Alberto",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Other",
      message: "and I hate chatbots with every fiber of my being",
      override: {
        height: "60px",
        width: "100%",
      },
    },
    {
      from: "Other",
      message: "like honestly bro",
      override: {
        height: "60px",
        width: "100%",
      },
    },
  ];
  return (
    <div
      style={override}
      className="flex items-start relative w-full flex-shrink-0 font-[Avenir]"
    >
      <div className="overflow-hidden flex flex-col items-start relative w-64 h-full flex-shrink-0 border-solid border-[rgb(242,_242,_242)] border-t border-r bg-white">
        <NewConversation />
        {activeChatProps.map((props, i) => (
          <ActiveChat {...props} key={i} />
        ))}
      </div>
      <div className="overflow-hidden flex flex-col items-start relative w-[930px] h-full flex-shrink-0">
        <div className="overflow-hidden flex items-center gap-[18px] px-3 py-[13px] relative w-full flex-shrink-0 bg-[rgb(242,_242,_242)]">
          <ProfilePicture />
          <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(72,_72,_72)] text-sm font-normal">
            Name
          </p>
        </div>
        <div className="overflow-hidden flex flex-col justify-end items-center p-3 relative w-full flex-shrink-0 flex-1 min-h-[0rem]">
          {messageWrapperProps.map((props, i) => (
            <MessageWrapper {...props} key={i} />
          ))}
        </div>
        <div className="overflow-hidden flex items-center p-3 relative w-full h-[62px] flex-shrink-0">
          <div className="overflow-hidden flex justify-between items-center pl-5 pr-3 py-2 rounded-[100px] relative flex-shrink-0 flex-1 min-w-[0rem] border-solid border-[rgb(193,_193,_193)] border">
            <p className="flex flex-col justify-center text-[rgb(72,_72,_72)] text-base font-normal">
              Text message
            </p>
            <div className="overflow-hidden flex justify-center items-center p-0.5 rounded-full relative w-7 h-7 flex-shrink-0 bg-[rgb(69,_141,_247)]">
              <img
                src={whiteArrow_1.src}
                className="h-full flex-shrink-0 flex-1 min-w-[0rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
