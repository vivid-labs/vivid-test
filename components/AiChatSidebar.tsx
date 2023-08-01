import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";

const GradientDivider = () => (
  <div className="overflow-hidden absolute left-[0%] right-[0%] w-full top-[28.11%] bottom-[0%] h-[71.89%] bg-[linear-gradient(_180deg,_rgba(255,_255,_255)_50%,_rgb(255,_255,_255)_84.375%_)]" />
);

const Objections = () => (
  <div className="flex flex-col justify-center items-start px-3 py-[0rem] relative w-full flex-shrink-0">
    <div className="flex flex-col justify-center items-center px-2 py-4 rounded-[0.625rem] relative flex-shrink-0 border-solid border-[rgb(218,_218,_218)] border-[0.125rem] bg-[linear-gradient(_180deg,_rgba(255,_255,_255)_38.02083432674408%,_rgba(255,_255,_255)_58.85416865348816%,_rgb(255,_255,_255)_81.25%_)]">
      <p className="text-black text-sm font-[Lato] font-normal">
        Price/budget - The customer mentioned their initial budget
        expectation was around &#x24;10K, significantly lower than the
        quote.{" "}
      </p>
      <p className="text-black text-sm font-[Lato] font-normal">
        Timing - The customer mentioned having other projects going on
        and wanting to think about timing/cash flow.
      </p>
    </div>
  </div>
);

const Introducing = () => (
  <div className="flex items-start gap-1 relative flex-shrink-0">
    <div className="flex items-start gap-2 relative flex-shrink-0">
      <p className="whitespace-nowrap text-neutral-700 text-xl font-[Lato] font-medium">
        Introducing
      </p>
      <p className="bg-[linear-gradient(_135deg,_rgb(254,_186,_68)_0%,_rgb(216,_114,_232)_100%_)] text-transparent bg-clip-text text-xl font-[Lato] font-bold">
        Rilla AI Chat
      </p>
    </div>
    <div className="flex justify-center items-center px-2 py-[0rem] rounded-[15px] relative flex-shrink-0 border-solid border-black border">
      <p className="whitespace-nowrap text-neutral-700 text-sm font-[Lato] font-medium">
        Beta
      </p>
    </div>
  </div>
);

const Description = () => (
  <p className="flex flex-col justify-center text-neutral-700 text-base font-[Lato] font-medium">
    From objections to where the sales rep went off script &#x2013; AI
    Chat has answers for all your questions.
  </p>
);

export const AiChatSidebar = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-between items-center relative w-full h-[856px] flex-shrink-0 bg-white"
    >
      <div className="flex flex-col items-center gap-7 relative w-full flex-shrink-0">
        <div className="flex items-center gap-2 px-4 py-2 relative w-full flex-shrink-0 bg-[linear-gradient(_160deg,_rgb(253,_185,_67)_0%,_rgb(215,_113,_231)_100%_)]">
          <p className="whitespace-nowrap text-white text-[23px] leading-10">
            Dive deeper with
          </p>
          <div className="flex items-center relative flex-shrink-0">
            <Logo />
            <p className="whitespace-nowrap text-white text-2xl font-[Lato] font-bold">
              {" "}
              AI Chat
            </p>
          </div>
        </div>
        <Objections />
        <GradientDivider />
        <div className="flex flex-col items-start gap-5 px-7 py-[0rem] relative w-full flex-shrink-0">
          <Introducing />
          <Description />
          <CtaButton
            variants="Gradient"
            text="Start asking questions"
            override={{
              height: "fit-content",
              width: "fit-content",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 px-3 py-[0rem] relative w-full flex-shrink-0">
        <div className="rounded-[5px] w-full h-[35px] flex-shrink-0 border-solid border-[rgb(209,_208,_209)] border" />
        <p className="text-[rgb(155,_155,_155)] text-[10px] font-[Lato] font-normal leading-[0.875rem]">
          Please note that Rilla Chat is currently experimental and may produce
          inaccurate information about the conversation.
        </p>
      </div>
    </div>
  );
};