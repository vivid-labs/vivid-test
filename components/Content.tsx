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
      style={{
        display: "flex",
        alignItems: "center",
        padding: "40px 100px",
        position: "relative",
        width: "100%",
        flexShrink: 0,
        backgroundColor: "rgb(255, 255, 255)",
        fontFamily: "Avenir",
        ...override,
      }}
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
          height: "519px",
          flexShrink: 0,
          flex: "1 1 0%",
          minWidth: "0px",
          backgroundColor: "rgb(255, 255, 255)",
        }}
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
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "fit-content",
                borderRadius: "5px",
                position: "relative",
                width: "330px",
                flexShrink: 0,
                backgroundColor: "rgb(240, 240, 240)",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "5px",
                  width: "110px",
                  height: "6px",
                  flexShrink: 0,
                  backgroundColor: "rgb(244, 86, 154)",
                }}
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
                fontWeight: 500,
                letterSpacing: "0.01px",
                lineHeight: "23px",
              }}
            >
              33% complete &#x2014; nice work!
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "fit-content",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "fit-content",
                width: "fit-content",
                position: "relative",
                flexShrink: 0,
              }}
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
                  fontWeight: 900,
                  letterSpacing: "-0.85px",
                  lineHeight: "40px",
                }}
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
          >
            {stepProps.map((props, i) => (
              <Step {...props} key={i} />
            ))}
          </div>
        </div>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            borderTopLeftRadius: "7px",
            borderBottomRightRadius: "12px",
            boxShadow: "0px 4px 18px  rgba(0, 0, 0)",
            width: "531px",
            height: "451px",
            flexShrink: 0,
            backgroundColor: "rgba(255, 255, 255, 0.00)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "666.25px",
              left: "calc(50% - 332.5px)",
              height: "450.38px",
              top: "calc(50% - 224.5px)",
              transformOrigin: "top left",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                transformOrigin: "top left",
                height: "100%",
                width: "100%",
              }}
              src={pictureAiMobileDesktopPng.src}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(255, 252, 252)",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: 600,
              letterSpacing: "0.01px",
              lineHeight: "23px",
            }}
          >
            Insert fun image here
          </p>
        </div>
      </div>
    </div>
  );
};
