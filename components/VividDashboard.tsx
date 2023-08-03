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
    <div style={override}>
      <SideBar
        style="Colored"
        override={{
          height: "100%",
          width: "62px",
          position: "relative",
        }}
      />
      <div>
        <div>
          <div>
            <div>
              <div>
                <div />
              </div>
              <p>33% complete &#x2014; nice work!</p>
            </div>
            <div>
              <div>
                <p>Get Started with Vivid!</p>
              </div>
            </div>
            <div>
              {stepProps.map((props, i) => (
                <Step {...props} key={i} />
              ))}
            </div>
          </div>
          <div>
            <div>
              <img src={pictureAiMobileDesktopPng.src} />
            </div>
            <p>Insert fun image here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
