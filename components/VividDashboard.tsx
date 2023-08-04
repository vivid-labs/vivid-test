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
        backgroundColor: "rgb(245, 241, 241)",
        height: "86px",
        width: "100%",
      },
    },
  ];
  return (
    <div
      className="flex h-[840px] w-full flex-col items-start bg-white font-[Avenir]"
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
      <div className="flex min-h-0 w-full flex-1 flex-col items-center bg-white px-[100px] py-10">
        <div className="relative flex min-h-0 w-full flex-1 items-center justify-center gap-12 overflow-hidden rounded-[5px] bg-white px-0.5 py-2.5">
          <div className="flex h-full min-w-0 flex-1 flex-col items-start gap-6 px-2.5 pb-9 pt-7">
            <div className="flex flex-col items-start gap-1">
              <div className="flex w-[360px] flex-col items-start overflow-hidden rounded-[5px] bg-[rgb(217,_217,_217)]">
                <div className="h-1.5 w-[90px] overflow-hidden rounded-[5px] bg-[rgb(244,_86,_154)]" />
              </div>
              <p className="text-xs font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
                25% complete &#x2014; nice work!
              </p>
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex flex-col items-start">
                <p className="text-4xl font-black leading-10 tracking-[-0.85px] text-[rgb(18,_18,_18)]">
                  Get Started with Vivid!
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              {stepProps.map((props, i) => (
                <Step {...props} key={i} />
              ))}
            </div>
          </div>
          <div>
            <div className="absolute -bottom-[113.5px] -right-[707px] left-[707px] top-[113.5px] h-auto w-auto overflow-hidden rounded-[5px]">
              <div className="absolute h-[455px] w-[598px] [rotate:-4deg]" />
              <img
                className="absolute left-[41px] top-[58.5px] h-[200px] w-[350px] object-cover"
                src={figmaScreen_1.src}
              />
              <img
                className="absolute left-[141px] top-[192.5px] h-[199px] w-[350px] object-cover"
                src={vsCodeScreen_1.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
