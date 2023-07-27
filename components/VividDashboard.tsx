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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        width: "100%",
        height: "840px",
        flexShrink: 0,
        backgroundColor: "rgb(255, 255, 255)",
        ...override,
      }}
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "40px 100px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
          flex: "1 1 0%",
          minHeight: "0px",
          backgroundColor: "rgb(255, 255, 255)",
        }}
        figma-id="8:17:83"
      >
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            padding: "10px 2px",
            borderRadius: "5px",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            flex: "1 1 0%",
            minHeight: "0px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
          figma-id="8:17:84"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              padding: "28px 10px 36px",
              position: "relative",
              height: "100%",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
            figma-id="8:17:85"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                height: "fit-content",
                width: "fit-content",
                position: "relative",
                flexShrink: 0,
              }}
              figma-id="8:18:165"
            >
              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                  height: "fit-content",
                  borderRadius: "5px",
                  position: "relative",
                  width: "360px",
                  flexShrink: 0,
                  backgroundColor: "rgb(217, 217, 217)",
                }}
                figma-id="8:18:162"
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "5px",
                    width: "90px",
                    height: "6px",
                    flexShrink: 0,
                    backgroundColor: "rgb(244, 86, 154)",
                    position: "relative",
                  }}
                  figma-id="8:18:163"
                />
              </div>
              <p
                style={{
                  width: "fit-content",
                  whiteSpace: "nowrap",
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "rgb(148, 148, 148)",
                  fontSize: "12px",
                  fontFamily: "Avenir",
                  fontWeight: 500,
                  letterSpacing: "0.01px",
                  lineHeight: "23px",
                }}
                figma-id="8:18:164"
              >
                25% complete &#x2014; nice work!
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "25px",
                height: "fit-content",
                position: "relative",
                width: "100%",
                flexShrink: 0,
              }}
              figma-id="8:17:86"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  height: "fit-content",
                  width: "fit-content",
                  position: "relative",
                  flexShrink: 0,
                }}
                figma-id="8:17:87"
              >
                <p
                  style={{
                    width: "fit-content",
                    whiteSpace: "nowrap",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "rgb(18, 18, 18)",
                    fontSize: "36px",
                    fontFamily: "Avenir",
                    fontWeight: 900,
                    letterSpacing: "-0.85px",
                    lineHeight: "40px",
                  }}
                  figma-id="8:17:95"
                >
                  Get Started with Vivid!
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                height: "fit-content",
                position: "relative",
                width: "100%",
                flexShrink: 0,
              }}
              figma-id="8:27:264"
            >
              {stepProps.map((props, i) => (
                <Step {...props} key={i} />
              ))}
            </div>
          </div>
          <div figma-id="8:232:171">
            <div
              style={{
                overflow: "hidden",
                borderRadius: "5px",
                position: "absolute",
                boxShadow: "0px 4px 18px  rgb(0, 0, 0, 0.30)",
                left: "707px",
                right: "-707px",
                width: "auto",
                top: "113.5px",
                bottom: "-113.5px",
                height: "auto",
              }}
              figma-id="8:15:231"
            >
              <div
                style={{
                  position: "absolute",
                  width: "598px",
                  left: "calc(50% - 332.5px)",
                  height: "455px",
                  top: "calc(50% - 229px)",
                  transformOrigin: "top left",
                  overflow: "hidden",
                }}
                figma-id="8:15:232"
              >
                <img
                  style={{
                    transform:
                      "rotate(0deg) scale(100%, 100%) translate(0%, 0%)",
                    transformOrigin: "top left",
                    height: "100%",
                    width: "100%",
                  }}
                  src={pictureAiMobileDesktopPng.src}
                  figma-id="8:15:232"
                />
              </div>
              <img
                style={{
                  position: "absolute",
                  width: "350px",
                  left: "41px",
                  height: "199.62px",
                  top: "58.5px",
                  objectFit: "cover",
                }}
                src={figmaScreen_1.src}
                figma-id="8:226:1608"
              />
              <img
                style={{
                  position: "absolute",
                  width: "350px",
                  left: "141px",
                  height: "199.49px",
                  top: "192.5px",
                  objectFit: "cover",
                }}
                src={vsCodeScreen_1.src}
                figma-id="8:226:1607"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
