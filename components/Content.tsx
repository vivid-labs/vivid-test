import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { GitHubIcon } from "./GitHubIcon";
import { OutlinedLogo } from "./OutlinedLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const Content = ({ override }: { override?: any }) => {
  const stepProps = [
    {
      status: "Complete",
      time: "5 minutes",
      task: "Install Figma Plugin",
      icon: <FigmaLogo />,
      override: {
        height: "86px",
        width: "100%",
      },
    },
    {
      status: "Todo",
      time: "5 minutes",
      task: "Connect to GitHub",
      icon: <GitHubIcon />,
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Todo",
      time: "15 minutes",
      task: "Submit existing components",
      icon: <OutlinedLogo />,
      override: {
        height: "86px",
        width: "100%",
      },
    },
  ];
  return (
    <div
      style={override}
      className="flex items-center px-[100px] py-[40px] relative w-full flex-shrink-0 bg-[rgb(255,_255,_255)] font-[Avenir]"
    >
      <div className="overflow-hidden flex justify-center items-center gap-12 px-[2px] py-[10px] rounded-[5px] relative h-[519px] flex-shrink-0 flex-1 min-w-[0rem] bg-[rgb(255,_255,_255)]">
        <div className="flex flex-col items-start gap-6 pt-[28px] px-[10px] pb-[36px] relative h-full flex-shrink-0 flex-1 min-w-[0rem]">
          <div className="flex flex-col items-start gap-1 relative flex-shrink-0">
            <div className="overflow-hidden flex flex-col items-start rounded-[5px] relative w-[330px] flex-shrink-0 bg-[rgb(240,_240,_240)]">
              <div className="overflow-hidden rounded-[5px] w-[110px] h-[6px] flex-shrink-0 bg-[rgb(244,_86,_154)]" />
            </div>
            <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(148,_148,_148)] text-[12px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]">
              33% complete &#x2014; nice work!
            </p>
          </div>
          <div className="flex flex-col items-start relative w-full flex-shrink-0">
            <div className="flex flex-col items-start relative flex-shrink-0">
              <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-[36px] font-[Avenir] font-black tracking-[-0.85px] leading-10">
                Get Started with Vivid!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 relative w-full flex-shrink-0">
            {stepProps.map((props, i) => (
              <Step {...props} key={i} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden relative rounded-tl-[7px] rounded-br-[12px] [box-shadow:0px_4px_18px_rgb(0,_0,_0,_0.3)] w-[531px] h-[451px] flex-shrink-0">
          <div className="absolute w-[666.25px] h-[450.38px] origin-top-left overflow-hidden">
            <img
              src={pictureAiMobileDesktopPng.src}
              className="origin-top-left h-full w-full"
            />
          </div>
          <p className="text-center flex flex-col justify-center text-[rgb(255,_252,_252)] text-[16px] font-[Inter] font-semibold tracking-[0.01px] leading-[23px]">
            Insert fun image here
          </p>
        </div>
      </div>
    </div>
  );
};
