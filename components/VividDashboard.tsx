import { NavBar } from "./NavBar";
import { FigmaLogo } from "./FigmaLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { Step } from "./Step";
import { OutlinedLogo } from "./OutlinedLogo";
import { GitHubIcon } from "./GitHubIcon";
import figmaScreen_1 from "./figmaScreen_1.png";
import vsCodeScreen_1 from "./vsCodeScreen_1.png";
export const VividDashboard = ({ override }: { override?: any }) => {
  const stepProps = [
    {
      status: "Complete",
      time: "<1 minute",
      task: "Install Figma Plugin",
      icon: <FigmaLogo figma-id="8:" />,
      override: {
        height: "86px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "8:27:173",
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Set up team",
      icon: <OutlinedLogo figma-id="8:" />,
      override: {
        width: "100%",
        height: "86px",
        position: "relative",
      },
      "figma-id": "8:27:254",
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Invite teammates",
      icon: <OutlinedLogo figma-id="8:" />,
      override: {
        width: "100%",
        height: "86px",
        position: "relative",
      },
      "figma-id": "8:233:1868",
    },
    {
      status: "Up Next",
      time: "5 minutes",
      task: "Connect to GitHub",
      icon: <GitHubIcon figma-id="8:" />,
      override: {
        width: "100%",
        height: "86px",
        position: "relative",
      },
      "figma-id": "8:29:751",
    },
    {
      status: "Unsupported",
      time: "15 minutes",
      task: "Submit existing components",
      icon: <OutlinedLogo figma-id="8:" />,
      override: {
        height: "86px",
        width: "100%",
        position: "relative",
      },
      "figma-id": "8:27:259",
    },
  ];
  return (
    <div
      style={override}
      className="flex flex-col items-start relative w-full h-[840px] flex-shrink-0 bg-[rgb(255,_255,_255)]"
      figma-id="8:15:103"
    >
      <NavBar
        type="Colored"
        time="Time to do this task"
        icon={<FigmaLogo figma-id="8:" />}
        task="Do this task"
        override={{
          position: "relative",
        }}
        figma-id="8:15:104"
      />
      <div
        className="flex flex-col items-center gap-[10px] px-[100px] py-[40px] relative w-full flex-shrink-0 flex-1 min-h-[0rem] bg-[rgb(255,_255,_255)]"
        figma-id="8:17:83"
      >
        <div
          className="overflow-hidden flex justify-center items-center gap-12 px-[2px] py-[10px] rounded-[5px] relative w-full flex-shrink-0 flex-1 min-h-[0rem] bg-[rgb(255,_255,_255)]"
          figma-id="8:17:84"
        >
          <div
            className="flex flex-col items-start gap-6 pt-[28px] px-[10px] pb-[36px] relative h-full flex-shrink-0 flex-1 min-w-[0rem]"
            figma-id="8:17:85"
          >
            <div
              className="flex flex-col items-start gap-1 relative flex-shrink-0"
              figma-id="8:18:165"
            >
              <div
                className="overflow-hidden flex flex-col items-start gap-[10px] rounded-[5px] relative w-[22.5rem] flex-shrink-0 bg-[rgb(217,_217,_217)]"
                figma-id="8:18:162"
              >
                <div
                  className="overflow-hidden rounded-[5px] w-[90px] h-[6px] flex-shrink-0 bg-[rgb(244,_86,_154)] relative"
                  figma-id="8:18:163"
                />
              </div>
              <p
                className="whitespace-nowrap flex flex-col justify-center text-[rgb(148,_148,_148)] text-[12px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
                figma-id="8:18:164"
              >
                25% complete &#x2014; nice work!
              </p>
            </div>
            <div
              className="flex flex-col items-start gap-[25px] relative w-full flex-shrink-0"
              figma-id="8:17:86"
            >
              <div
                className="flex flex-col items-start gap-2 relative flex-shrink-0"
                figma-id="8:17:87"
              >
                <p
                  className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-[36px] font-[Avenir] font-black tracking-[-0.85px] leading-10"
                  figma-id="8:17:95"
                >
                  Get Started with Vivid!
                </p>
              </div>
            </div>
            <div
              className="flex flex-col items-start gap-6 relative w-full flex-shrink-0"
              figma-id="8:27:264"
            >
              {stepProps.map((props, i) => (
                <Step {...props} key={i} />
              ))}
            </div>
          </div>
          <div figma-id="8:232:171">
            <div
              className="overflow-hidden rounded-[5px] absolute [box-shadow:0px_4px_18px_rgb(0,_0,_0,_0.3)] left-[707px] -right-[707px] w-auto top-[113.5px] -bottom-[113.5px] h-auto"
              figma-id="8:15:231"
            >
              <div
                className="absolute w-[598px] h-[455px] origin-top-left overflow-hidden"
                figma-id="8:15:232"
              >
                <img
                  src={pictureAiMobileDesktopPng.src}
                  className="transform rotate-0 scale-[100%] translate-x-[0%] translate-y-[0%] origin-top-left h-full w-full"
                  figma-id="8:15:232"
                />
              </div>
              <img
                src={figmaScreen_1.src}
                className="absolute w-[350px] left-[41px] h-[199.62px] top-[58.5px] object-cover"
                figma-id="8:226:1608"
              />
              <img
                src={vsCodeScreen_1.src}
                className="absolute w-[350px] left-[141px] h-[199.49px] top-[192.5px] object-cover"
                figma-id="8:226:1607"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
