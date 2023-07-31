import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
export const MainContent = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col items-center gap-7 relative w-full flex-shrink-0"
    >
      <div className="flex items-center gap-2 px-[16px] py-[8px] relative w-full flex-shrink-0 bg-[linear-gradient(_160deg,_rgb(253,_185,_67,_1)_0%,_rgb(215,_113,_231,_1)_100%_)]">
        <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[23px] leading-10">
          Dive deeper with
        </p>
        <div className="flex items-center relative flex-shrink-0">
          <Logo />
          <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[24px] font-[Lato] font-bold">
            {" "}
            AI Chat
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px] py-[10px] relative w-full flex-shrink-0">
        <div className="flex flex-col justify-center items-end px-[12px] relative w-full flex-shrink-0">
          <div className="flex justify-center items-center px-[16px] py-[12px] rounded-[10px] relative flex-shrink-0 border-solid border-[rgb(218,_218,_218)] border-2">
            <p className="whitespace-nowrap text-[rgb(0,_0,_0)] text-[14px] font-[Lato] font-normal">
              What objections showed up in this conversation?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start px-[12px] relative w-full flex-shrink-0">
          <div className="flex flex-col justify-center items-center px-[8px] py-[16px] rounded-[10px] relative flex-shrink-0 border-solid border-[rgb(218,_218,_218)] border-2 bg-[linear-gradient(_180deg,_rgb(255,_255,_255,_0)_38.02083432674408%,_rgb(255,_255,_255,_0.5)_58.85416865348816%,_rgb(255,_255,_255,_1)_81.25%_)]">
            <p className="text-[rgb(0,_0,_0)] text-[14px] font-[Lato] font-normal">
              Price/budget - The customer mentioned their initial budget
              expectation was around &#x24;10K, significantly lower than the
              quote.{" "}
            </p>
            <p className="text-[rgb(0,_0,_0)] text-[14px] font-[Lato] font-normal">
              Timing - The customer mentioned having other projects going on and
              wanting to think about timing/cash flow.
            </p>
          </div>
        </div>
        <div className="overflow-hidden absolute left-[0%] right-[0%] w-full top-[28.11%] bottom-[0%] h-[71.89%] bg-[linear-gradient(_180deg,_rgb(255,_255,_255,_0)_50%,_rgb(255,_255,_255,_1)_84.375%_)]">
          <div className="overflow-hidden absolute w-[6.25rem] left-[139px] h-[6.25rem] top-[4.37px]" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 px-[28px] relative w-full flex-shrink-0">
        <div className="flex items-start gap-1 relative flex-shrink-0">
          <div className="flex items-start gap-2 relative flex-shrink-0">
            <p className="whitespace-nowrap text-[rgb(64,_64,_64)] text-[20px] font-[Lato] font-medium">
              Introducing
            </p>
            <p className="bg-[linear-gradient(_135deg,_rgb(254,_186,_68,_1)_0%,_rgb(216,_114,_232,_1)_100%_)] text-transparent bg-clip-text text-[20px] font-[Lato] font-bold">
              Rilla AI Chat
            </p>
          </div>
          <div className="flex justify-center items-center px-[8px] rounded-[15px] relative flex-shrink-0 border-solid border-[rgb(0,_0,_0)] border">
            <p className="whitespace-nowrap text-[rgb(64,_64,_64)] text-[14px] font-[Lato] font-medium">
              Beta
            </p>
          </div>
        </div>
        <p className="flex flex-col justify-center text-[rgb(64,_64,_64)] text-[16px] font-[Lato] font-medium">
          From objections to where the sales rep went off script &#x2013; AI
          Chat has answers for all your questions.
        </p>
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
  );
};
