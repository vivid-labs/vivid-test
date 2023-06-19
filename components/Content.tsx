import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { OutlinedLogo } from "./OutlinedLogo";
import { GitHubIcon } from "./GitHubIcon";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";

export const Content = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex flex-col justify-start items-center gap-[10px] pl-[6.25rem] pr-[6.25rem] pt-10 pb-10 relative w-[1440px] flex-shrink-0 bg-[rgb(255,_255,_255)]"
    >
      <div className="overflow-hidden flex flex-row justify-center items-center gap-12 pl-[2px] pr-[2px] pt-[10px] pb-[10px] rounded-[5px] relative w-full flex-shrink-0 flex-1 [0rem] bg-[rgb(255,_255,_255)]">
        <div className="flex flex-col justify-start items-start gap-6 pl-[10px] pr-[10px] pt-7 pb-9 relative h-full flex-shrink-0 flex-1 [0rem]">
          <div className="flex flex-col justify-start items-start gap-1 relative flex-shrink-0">
            <div className="overflow-hidden flex flex-col justify-start items-start gap-[10px] rounded-[5px] relative w-[22.5rem] flex-shrink-0 bg-[rgb(217,_217,_217)]">
              <div className="overflow-hidden rounded-[5px] w-[90px] h-[6px] flex-shrink-0 bg-[rgb(244,_86,_154)] relative" />
            </div>
            <p className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(148,_148,_148)] text-[12px] font-[Avenir] font-medium tracking-[0.00800000037997961px] leading-[23px]">
              25% complete — nice work!
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-[25px] relative w-full flex-shrink-0">
            <div className="flex flex-col justify-start items-start gap-2 relative flex-shrink-0">
              <p className="whitespace-nowrap flex flex-col justify-center flex-shrink-0 text-[rgb(18,_18,_18)] text-[36px] font-[Avenir] font-extrabold tracking-[-0.8496000170707703px] leading-10">
                Get Started with Vivid!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-6 relative w-full flex-shrink-0">
            <Step
              status="Complete"
              icon={<FigmaLogo />}
              task="Install Figma Plugin"
              time="<1 minute"
              override={{
                height: "86px",
                width: "100%",
              }}
            />
            <Step
              status="Todo"
              icon={<OutlinedLogo />}
              task="Invite teammates"
              time="<1 minute"
              override={{
                width: "100%",
                height: "86px",
              }}
            />
            <Step
              status="Todo"
              icon={<GitHubIcon />}
              task="Connect to GitHub"
              time="5 minutes"
              override={{
                width: "100%",
                height: "86px",
              }}
            />
            <Step
              status="Todo"
              icon={<OutlinedLogo />}
              task="Submit existing components"
              time="15 minutes"
              override={{
                height: "86px",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="overflow-hidden relative rounded-tl-[7px] rounded-br-[12px] [box-shadow:0px_4px_18px_rgb(0,_0,_0,_0.3)] w-[531px] h-[451px] flex-shrink-0">
          <div className="absolute w-[666.25px] h-[450.38px] origin-top-left opacity-100 overflow-hidden">
            <img
              src={pictureAiMobileDesktopPng.src}
              className="transform rotate-0 scale-[100%] translate-x-[0%] translate-y-[0%] origin-top-left h-full w-full"
            />
          </div>
          <p className="text-center flex flex-col justify-center absolute w-[16.75rem] h-[103px] text-[rgb(255,_252,_252)] text-[16px] font-[Inter] font-semibold tracking-[0.00800000037997961px] leading-[23px]">
            Insert fun image here
          </p>
        </div>
      </div>
    </div>
  );
};
