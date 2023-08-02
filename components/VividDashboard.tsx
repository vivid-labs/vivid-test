import { SideBar } from "./SideBar";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
import { GitHubIcon } from "./GitHubIcon";
import { OutlinedLogo } from "./OutlinedLogo";
export const VividDashboard = ({ override }: { override?: any }) => {
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
      className="relative flex h-[840px] w-full flex-shrink-0 items-start bg-white font-[Avenir]"
      style={override}
    >
      <SideBar
        style="Colored"
        override={{
          height: "100%",
          width: "62px",
          position: "relative",
        }}
      />
      <div className="relative flex h-full min-w-[0rem] flex-1 flex-shrink-0 items-center bg-white px-[100px] py-10">
        <div className="relative flex h-[519px] min-w-[0rem] flex-1 flex-shrink-0 items-center justify-center gap-12 overflow-hidden rounded-[5px] bg-white px-0.5 py-2.5">
          <div className="relative flex h-full min-w-[0rem] flex-1 flex-shrink-0 flex-col items-start gap-6 px-2.5 pb-9 pt-7">
            <div className="relative flex flex-shrink-0 flex-col items-start gap-1">
              <div className="relative flex w-[330px] flex-shrink-0 flex-col items-start overflow-hidden rounded-[5px] bg-[rgb(240,_240,_240)]">
                <div className="h-1.5 w-[110px] flex-shrink-0 overflow-hidden rounded-[5px] bg-[rgb(244,_86,_154)]" />
              </div>
              <p className="flex flex-col justify-center whitespace-nowrap text-xs font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
                33% complete &#x2014; nice work!
              </p>
            </div>
            <div className="relative flex w-full flex-shrink-0 flex-col items-start">
              <div className="relative flex flex-shrink-0 flex-col items-start">
                <p className="flex flex-col justify-center whitespace-nowrap text-4xl font-black leading-10 tracking-[-0.85px] text-[rgb(18,_18,_18)]">
                  Get Started with Vivid!
                </p>
              </div>
            </div>
            <div className="relative flex w-full flex-shrink-0 flex-col items-start gap-6">
              {stepProps.map((props, i) => (
                <Step {...props} key={i} />
              ))}
            </div>
          </div>
          <div className="relative h-[451px] w-[531px] flex-shrink-0 overflow-hidden rounded-br-[12px] rounded-tl-[7px] bg-[rgba(255,_255,_255,_0)] [box-shadow:0px_4px_18px_rgba(0,_0,_0,_0.3)]">
            <div className="absolute h-[450.38px] w-[666.25px] origin-top-left overflow-hidden">
              <img
                className="h-full w-full origin-top-left"
                src={pictureAiMobileDesktopPng.src}
              />
            </div>
            <p className="flex flex-col justify-center text-center font-[Inter] text-base font-semibold leading-[23px] tracking-[0.01px] text-[rgb(255,_252,_252)]">
              Insert fun image here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
