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
      icon: <FigmaLogo figma-id="8:" />,
      override: {
        height: "86px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "8:29:588",
    },
    {
      status: "Todo",
      time: "5 minutes",
      task: "Connect to GitHub",
      icon: <GitHubIcon figma-id="8:" />,
      override: {
        width: "100%",
        height: "86px",
        position: "relative",
      },
      "figma-id": "8:29:589",
    },
    {
      status: "Todo",
      time: "15 minutes",
      task: "Submit existing components",
      icon: <OutlinedLogo figma-id="8:" />,
      override: {
        height: "86px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "8:29:590",
    },
  ];
  return (
    <div
      style={override}
      className="flex items-center gap-[10px] px-[100px] py-[40px] relative w-full flex-shrink-0 bg-[rgb(255,_255,_255)]"
      figma-id="8:29:577"
    >
      <div
        className="overflow-hidden flex justify-center items-center gap-12 px-[2px] py-[10px] rounded-[5px] relative h-[519px] flex-shrink-0 flex-1 min-w-[0rem] bg-[rgb(255,_255,_255)]"
        figma-id="8:29:578"
      >
        <div
          className="flex flex-col items-start gap-6 pt-[28px] px-[10px] pb-[36px] relative h-full flex-shrink-0 flex-1 min-w-[0rem]"
          figma-id="8:29:579"
        >
          <div
            className="flex flex-col items-start gap-1 relative flex-shrink-0"
            figma-id="8:29:580"
          >
            <div
              className="overflow-hidden flex flex-col items-start gap-[10px] rounded-[5px] relative w-[330px] flex-shrink-0 bg-[rgb(240,_240,_240)]"
              figma-id="8:29:581"
            >
              <div
                className="overflow-hidden rounded-[5px] w-[110px] h-[6px] flex-shrink-0 bg-[rgb(244,_86,_154)] relative"
                figma-id="8:29:582"
              />
            </div>
            <p
              className="whitespace-nowrap flex flex-col justify-center text-[rgb(148,_148,_148)] text-[12px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
              figma-id="8:29:583"
            >
              33% complete &#x2014; nice work!
            </p>
          </div>
          <div
            className="flex flex-col items-start gap-[25px] relative w-full flex-shrink-0"
            figma-id="8:29:584"
          >
            <div
              className="flex flex-col items-start gap-2 relative flex-shrink-0"
              figma-id="8:29:585"
            >
              <p
                className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-[36px] font-[Avenir] font-black tracking-[-0.85px] leading-10"
                figma-id="8:29:586"
              >
                Get Started with Vivid!
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-start gap-6 relative w-full flex-shrink-0"
            figma-id="8:29:587"
          >
            {stepProps.map((props, i) => (
              <Step {...props} key={i} />
            ))}
          </div>
        </div>
        <div
          className="overflow-hidden relative rounded-tl-[7px] rounded-br-[12px] [box-shadow:0px_4px_18px_rgb(0,_0,_0,_0.3)] w-[531px] h-[451px] flex-shrink-0"
          figma-id="8:29:591"
        >
          <div
            className="absolute w-[666.25px] h-[450.38px] origin-top-left overflow-hidden"
            figma-id="8:29:592"
          >
            <img
              src={pictureAiMobileDesktopPng.src}
              className="transform rotate-0 scale-[100%] translate-x-[0%] translate-y-[0%] origin-top-left h-full w-full"
              figma-id="8:29:592"
            />
          </div>
          <p
            className="text-center flex flex-col justify-center text-[rgb(255,_252,_252)] text-[16px] font-[Inter] font-semibold tracking-[0.01px] leading-[23px]"
            figma-id="8:29:593"
          >
            Insert fun image here
          </p>
        </div>
      </div>
    </div>
  );
};
