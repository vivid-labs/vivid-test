import logo from "./logo.png";
import { NewConversation } from "./NewConversation";
import { ActiveChat } from "./ActiveChat";
import { ProfilePicture } from "./ProfilePicture";
import { MessageWrapper } from "./MessageWrapper";
import whiteArrow_1 from "./whiteArrow_1.png";
export const Desktop_2 = ({ override }: { override?: any }) => {
  const activeChatProps = [
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        height: "fit-content",
        borderColor: "rgb(242, 242, 242)",
        width: "100%",
      },
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
      },
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
      },
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
      },
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        borderColor: "rgb(242, 242, 242)",
      },
    },
    {
      lastChat: "Last chat",
      name: "Name",
      override: {
        height: "fit-content",
        borderColor: "rgb(242, 242, 242)",
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
      className="flex h-[1024px] w-full flex-shrink-0 flex-col items-start overflow-hidden bg-white font-[Avenir]"
      style={override}
    >
      <div className="flex h-[69px] w-full flex-shrink-0 items-center justify-between overflow-hidden px-3">
        <img
          className="h-11 w-[42px] flex-shrink-0 object-cover"
          src={logo.src}
        />
        <div className="flex h-[34px] w-[121px] flex-shrink-0 items-center justify-center overflow-hidden rounded bg-[rgb(69,_141,_247)] px-4 py-0.5">
          <p className="whitespace-nowrap text-sm font-normal text-white">
            Sign in
          </p>
        </div>
      </div>
      <div className="flex min-h-0 w-full flex-1 flex-shrink-0 items-start">
        <div className="flex h-full w-64 flex-shrink-0 flex-col items-start overflow-hidden border-r border-t border-solid border-[rgb(242,_242,_242)] bg-white">
          <NewConversation
            override={{
              borderColor: "rgb(242, 242, 242)",
            }}
          />
          {activeChatProps.map((props, i) => (
            <ActiveChat {...props} key={i} />
          ))}
        </div>
        <div className="flex h-full w-[930px] flex-shrink-0 flex-col items-start overflow-hidden">
          <div className="flex w-full flex-shrink-0 items-center gap-[18px] overflow-hidden bg-[rgb(242,_242,_242)] px-3 py-[13px]">
            <ProfilePicture />
            <p className="whitespace-nowrap text-sm font-normal text-[rgb(72,_72,_72)]">
              Name
            </p>
          </div>
          <div className="flex min-h-0 w-full flex-1 flex-shrink-0 flex-col items-center justify-end overflow-hidden p-3">
            {messageWrapperProps.map((props, i) => (
              <MessageWrapper {...props} key={i} />
            ))}
          </div>
          <div className="flex h-[62px] w-full flex-shrink-0 items-center overflow-hidden p-3">
            <div className="flex min-w-0 flex-1 flex-shrink-0 items-center justify-between overflow-hidden rounded-[100px] border border-solid border-[rgb(193,_193,_193)] py-2 pl-5 pr-3">
              <p className="flex flex-col justify-center text-base font-normal text-[rgb(72,_72,_72)]">
                Text message
              </p>
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-[rgb(69,_141,_247)] p-0.5">
                <img
                  className="h-full min-w-0 flex-1 flex-shrink-0 object-cover"
                  src={whiteArrow_1.src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
