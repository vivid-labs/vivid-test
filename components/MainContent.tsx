import { NewConversation } from "./NewConversation";
import { ActiveChat } from "./ActiveChat";
import { ProfilePicture } from "./ProfilePicture";
import { MessageWrapper } from "./MessageWrapper";
import whiteArrow_1 from "./whiteArrow_1.png";
export const MainContent = ({ override }: { override?: any }) => {
  const activeChatProps = [
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
    },
    {
      name: "Name",
      lastChat: "Last chat",
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
      className="flex items-start relative w-full flex-shrink-0"
      figma-id="1:6"
    >
      <div
        className="overflow-hidden flex flex-col items-start relative w-64 h-full flex-shrink-0 border-solid border-[rgb(242,_242,_242)] border-t border-r bg-[rgb(255,_255,_255)]"
        figma-id="1:4"
      >
        <NewConversation />
        {activeChatProps.map((props, i) => (
          <ActiveChat {...props} key={i} />
        ))}
      </div>
      <div
        className="overflow-hidden flex flex-col items-start relative w-[930px] h-full flex-shrink-0"
        figma-id="1:3"
      >
        <div
          className="overflow-hidden flex items-center gap-[18px] px-[12px] py-[13px] relative w-full flex-shrink-0 bg-[rgb(242,_242,_242)]"
          figma-id="1:143"
        >
          <ProfilePicture />
          <p
            className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(72,_72,_72)] text-[14px] font-[Avenir] font-normal"
            figma-id="1:146"
          >
            Name
          </p>
        </div>
        <div
          className="overflow-hidden flex flex-col justify-end items-center p-3 relative w-full flex-shrink-0 flex-1 min-h-[0rem]"
          figma-id="1:149"
        >
          {messageWrapperProps.map((props, i) => (
            <MessageWrapper {...props} key={i} />
          ))}
        </div>
        <div
          className="overflow-hidden flex items-center gap-3 p-3 relative w-full h-[62px] flex-shrink-0"
          figma-id="1:153"
        >
          <div
            className="overflow-hidden flex justify-between items-center pl-[20px] pr-[12px] py-[8px] rounded-[100px] relative flex-shrink-0 flex-1 min-w-[0rem] border-solid border-[rgb(193,_193,_193)] border"
            figma-id="1:157"
          >
            <p
              className="flex flex-col justify-center w-[122px] h-[25px] flex-shrink-0 text-[rgb(72,_72,_72)] text-[16px] font-[Avenir] font-normal"
              figma-id="1:158"
            >
              Text message
            </p>
            <div
              className="overflow-hidden flex justify-between items-center p-[2px] rounded-[100px] relative w-7 h-7 flex-shrink-0 bg-[rgb(69,_141,_247)]"
              figma-id="1:190"
            >
              <img
                src={whiteArrow_1.src}
                className="h-full flex-shrink-0 flex-1 min-w-[0rem] object-cover opacity-100"
                figma-id="1:194"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
