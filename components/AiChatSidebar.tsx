import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
export const AiChatSidebar = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-between items-center relative w-full h-[856px] flex-shrink-0 bg-[rgb(255,_255,_255)]"
      figma-id="14:13:190"
    >
      <div
        className="flex flex-col items-center gap-7 relative w-full flex-shrink-0"
        figma-id="14:13:220"
      >
        <div
          className="flex items-center gap-2 px-[16px] py-[8px] relative w-full flex-shrink-0 bg-[linear-gradient(_160deg,_rgb(253,_185,_67,_1)_0%,_rgb(215,_113,_231,_1)_100%_)]"
          figma-id="14:13:193"
        >
          <p
            className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[23px] leading-10"
            figma-id="14:13:26"
          >
            Dive deeper with
          </p>
          <div
            className="relative w-[6.5rem] h-[29px] flex-shrink-0"
            figma-id="14:13:196"
          >
            <Logo
              override={{
                position: "absolute",
                top: "6.5px",
                left: "1px",
              }}
              figma-id="14:13:216"
            />
            <p
              className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[24px] font-[Lato] font-bold"
              figma-id="14:13:25"
            >
              {" "}
              AI Chat
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-[10px] py-[10px] relative w-full flex-shrink-0"
          figma-id="14:13:191"
        >
          <div
            className="flex flex-col justify-center items-end px-[12px] relative w-full flex-shrink-0"
            figma-id="14:13:223"
          >
            <div
              className="flex justify-center items-center gap-[10px] px-[16px] py-[12px] rounded-[10px] relative flex-shrink-0 border-solid border-[rgb(218,_218,_218)] border-2"
              figma-id="14:13:181"
            >
              <p
                className="whitespace-nowrap text-[rgb(0,_0,_0)] text-[14px] font-[Lato] font-normal"
                figma-id="14:13:28"
              >
                What objections showed up in this conversation?
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-start px-[12px] relative w-full flex-shrink-0"
            figma-id="14:13:224"
          >
            <div
              className="flex flex-col justify-center items-center px-[8px] py-[16px] rounded-[10px] relative flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(255,_255,_255,_0)_38.02083432674408%,_rgb(255,_255,_255,_0.5)_58.85416865348816%,_rgb(255,_255,_255,_1)_81.25%_)]"
              figma-id="14:13:179"
            >
              <p
                className="text-[rgb(0,_0,_0)] text-[14px] font-[Lato] font-normal"
                figma-id="14:13:29"
              >
                Price/budget - The customer mentioned their initial budget
                expectation was around &#x24;10K, significantly lower than the
                quote.{" "}
              </p>
              <p
                className="text-[rgb(0,_0,_0)] text-[14px] font-[Lato] font-normal"
                figma-id="14:13:189"
              >
                Timing - The customer mentioned having other projects going on
                and wanting to think about timing/cash flow.
              </p>
            </div>
          </div>
          <div
            className="overflow-hidden absolute right-[0%] w-full top-[28.11%] bottom-[0%] h-[71.89%] bg-[linear-gradient(_180deg,_rgb(255,_255,_255,_0)_50%,_rgb(255,_255,_255,_1)_84.375%_)]"
            figma-id="14:13:221"
          />
        </div>
        <div
          className="flex flex-col items-start gap-5 px-[28px] relative w-full flex-shrink-0"
          figma-id="14:13:192"
        >
          <div
            className="flex items-start gap-1 relative flex-shrink-0"
            figma-id="14:13:188"
          >
            <div
              className="flex items-start gap-2 relative flex-shrink-0"
              figma-id="14:13:202"
            >
              <p
                className="whitespace-nowrap text-[rgb(64,_64,_64)] text-[20px] font-[Lato] font-medium"
                figma-id="14:13:187"
              >
                Introducing
              </p>
              <p
                className="bg-[linear-gradient(_135deg,_rgb(254,_186,_68,_1)_0%,_rgb(216,_114,_232,_1)_100%_)] text-transparent bg-clip-text text-[20px] font-[Lato] font-bold"
                figma-id="14:13:32"
              >
                Rilla AI Chat
              </p>
            </div>
            <div
              className="flex justify-center items-center px-[8px] rounded-[15px] relative flex-shrink-0 border-solid border-[rgb(0,_0,_0)] border"
              figma-id="14:13:201"
            >
              <p
                className="whitespace-nowrap text-[rgb(64,_64,_64)] text-[14px] font-[Lato] font-medium"
                figma-id="14:13:40"
              >
                Beta
              </p>
            </div>
          </div>
          <p
            className="flex flex-col justify-center text-[rgb(64,_64,_64)] text-[16px] font-[Lato] font-medium"
            figma-id="14:13:31"
          >
            From objections to where the sales rep went off script &#x2013; AI
            Chat has answers for all your questions.
          </p>
          <CtaButton
            override={{
              position: "relative",
            }}
            figma-id="14:13:227"
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-2 px-[12px] relative w-full flex-shrink-0"
        figma-id="14:13:199"
      >
        <div
          className="rounded-[5px] w-full h-[35px] flex-shrink-0 border-solid border-[rgb(209,_208,_209)] border relative"
          figma-id="14:13:184"
        />
        <p
          className="text-[rgb(155,_155,_155)] text-[10px] font-[Lato] font-normal leading-[14px]"
          figma-id="14:13:41"
        >
          Please note that Rilla Chat is currently experimental and may produce
          inaccurate information about the conversation.
        </p>
      </div>
    </div>
  );
};
