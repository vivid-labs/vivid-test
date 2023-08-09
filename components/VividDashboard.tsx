import { NavBar } from "./NavBar";
import { FigmaLogo } from "./FigmaLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import { Step } from "./Step";
import { OutlinedLogo } from "./OutlinedLogo";
import { GitHubIcon } from "./GitHubIcon";
import figmaScreen_1 from "./figmaScreen_1.png";
import vsCodeScreen_1 from "./vsCodeScreen_1.png";
export const VividDashboard = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const stepProps = [
    {
      status: "Complete",
      time: "<1 minute",
      task: "Install Figma Plugin",
      icon: <FigmaLogo />,
      override: {
        height: "86px",
        width: "100%",
      },
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Set up team",
      icon: <OutlinedLogo />,
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Todo",
      time: "<1 minute",
      task: "Invite teammates",
      icon: <OutlinedLogo />,
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Up Next",
      time: "5 minutes",
      task: "Connect to GitHub",
      icon: <GitHubIcon />,
      override: {
        width: "100%",
        height: "86px",
      },
    },
    {
      status: "Unsupported",
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
      className="flex flex-col items-start w-full h-[840px] bg-white font-[Avenir]"
      style={override}
    >
      <NavBar
        type="Colored"
        time="Time to do this task"
        icon={<FigmaLogo />}
        task="Do this task"
        override={{
          position: "relative",
        }}
      />
      <div className="flex flex-col items-center px-[100px] py-10 w-full flex-1 min-h-0 bg-white">
        <div className="overflow-hidden flex justify-center items-center gap-12 px-0.5 py-2.5 rounded-[5px] relative w-full flex-1 min-h-0 bg-white">
          <div className="flex flex-col items-start gap-6 pt-7 px-2.5 pb-9 h-full flex-1 min-w-0">
            <div className="flex flex-col items-start gap-1">
              <div className="overflow-hidden flex flex-col items-start rounded-[5px] w-[360px] bg-[rgb(217,_217,_217)]">
                <div className="overflow-hidden rounded-[5px] w-[90px] h-1.5 bg-[rgb(244,_86,_154)]" />
              </div>
              <p className="text-[rgb(148,_148,_148)] text-xs font-medium tracking-[0.01px] leading-[23px]">
                25% complete &#x2014; nice work!
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col items-start">
                <p className="text-[rgb(18,_18,_18)] text-4xl font-black tracking-[-0.85px] leading-10">
                  Get Started with Vivid!
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
              {stepProps.map((props, i) => (
                <Step {...props} key={i} />
              ))}
            </div>
          </div>
          <div className="w-[531px] h-[451px]">
            <div className="overflow-hidden rounded-[5px] absolute left-[707px] -right-[707px] w-auto top-[113.5px] -bottom-[113.5px] h-auto">
              <div className="absolute [rotate:-4deg] w-[598px] h-[455px]" />
              <img
                className="absolute w-[350px] left-[41px] h-[200px] top-[58.5px] object-cover"
                src={figmaScreen_1.src}
              />
              <img
                className="absolute w-[350px] left-[141px] h-[199px] top-[192.5px] object-cover"
                src={vsCodeScreen_1.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
