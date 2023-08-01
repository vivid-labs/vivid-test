import { NavBar } from "./NavBar";
import { FigmaLogo } from "./FigmaLogo";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
export const VividForTeams = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      description:
        "As soon as designs are complete, developers can review generated code in their normal workflow. ",
      heading: "Create PRs in GitHub",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
    {
      description:
        "Once you generate a component, Vivid will call that component in future generations so you never generate duplicated code. ",
      heading: "Reuse Components",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
    {
      description:
        "Already have components implemented in your codebase? Vivid  links your Figma components to existing React components.",
      heading: "Call existing components",
      override: {
        height: "fit-content",
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
  ];
  return (
    <div
      className="flex flex-col items-start relative w-full h-[800px] flex-shrink-0 bg-white font-[Avenir]"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        width: "100%",
        height: "800px",
        flexShrink: 0,
        backgroundColor: "rgb(255, 255, 255)",
        fontFamily: "Avenir",
        ...override,
      }}
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
      <div
        className="flex flex-col justify-center items-center px-[100px] py-[0rem] relative w-full flex-shrink-0 flex-1 min-h-[0rem] bg-white"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 100px",
          position: "relative",
          width: "100%",
          flexShrink: 0,
          flex: "1 1 0%",
          minHeight: "0px",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        <div
          className="overflow-hidden flex justify-center items-center gap-2.5 p-0.5 relative w-full h-[519px] flex-shrink-0"
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: "2px",
            position: "relative",
            width: "100%",
            height: "519px",
            flexShrink: 0,
          }}
        >
          <div
            className="flex flex-col items-start gap-[126px] pt-7 px-2.5 pb-9 relative h-full flex-shrink-0 flex-1 min-w-[0rem]"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "126px",
              padding: "28px 10px 36px",
              position: "relative",
              height: "100%",
              flexShrink: 0,
              flex: "1 1 0%",
              minWidth: "0px",
            }}
          >
            <div
              className="flex flex-col items-start gap-[25px] relative w-full flex-shrink-0"
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
            >
              <div
                className="flex flex-col items-start gap-2 relative flex-shrink-0"
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
              >
                <div
                  className="relative w-[520px] h-[19px] flex-shrink-0"
                  style={{
                    position: "relative",
                    width: "520px",
                    height: "19px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    className="overflow-hidden absolute w-4 left-[0rem] h-[15.31px]"
                    style={{
                      overflow: "hidden",
                      position: "absolute",
                      width: "16px",
                      left: "0px",
                      height: "15.31px",
                      top: "calc(50% - 7.65px)",
                    }}
                  >
                    <div
                      className="absolute w-4 h-[15.31px] top-[0rem]"
                      style={{
                        position: "absolute",
                        width: "16px",
                        left: "calc(50% - 8px)",
                        height: "15.31px",
                        top: "0px",
                      }}
                    >
                      <img
                        className="absolute left-[0.29px] right-[0.32px] w-auto top-[0.16px] bottom-[0.35px] h-auto"
                        src={group.src}
                        style={{
                          position: "absolute",
                          left: "0.29px",
                          right: "0.32px",
                          width: "auto",
                          top: "0.16px",
                          bottom: "0.35px",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                  <p
                    className="whitespace-nowrap flex flex-col justify-center text-[rgb(244,_86,_154)] text-[13.5px] font-medium tracking-[0.05px] leading-[19px]"
                    style={{
                      width: "fit-content",
                      whiteSpace: "nowrap",
                      height: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      color: "rgb(244, 86, 154)",
                      fontSize: "13.5px",
                      fontWeight: 500,
                      letterSpacing: "0.05px",
                      lineHeight: "19px",
                    }}
                  >
                    Free for 2 weeks in beta
                  </p>
                </div>
                <p
                  className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-4xl font-black tracking-[-0.85px] leading-10"
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
                  Vivid Teams
                </p>
              </div>
              <div
                className="flex items-start pl-[0rem] pr-[30px] py-[0rem] relative w-full flex-shrink-0"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  height: "fit-content",
                  padding: "0px 30px 0px 0px",
                  position: "relative",
                  width: "100%",
                  flexShrink: 0,
                }}
              >
                <p
                  className="flex flex-col justify-center text-[rgb(18,_18,_18)] text-base font-normal tracking-[0.01px] leading-[23px]"
                  style={{
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "rgb(18, 18, 18)",
                    fontSize: "16px",
                    fontWeight: 400,
                    letterSpacing: "0.01px",
                    lineHeight: "23px",
                  }}
                >
                  Manage your entire design system in Figma. Let developers
                  focus on functionality while designers own the UI. Ship
                  faster.{" "}
                </p>
              </div>
              <div
                className="flex items-start gap-4 relative w-full flex-shrink-0"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  height: "fit-content",
                  position: "relative",
                  width: "100%",
                  flexShrink: 0,
                }}
              >
                {featureProps.map((props, i) => (
                  <Feature {...props} key={i} />
                ))}
              </div>
            </div>
            <div
              className="flex items-start gap-3 pl-[0rem] pr-[389.42px] py-[0rem] relative flex-shrink-0"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                width: "fit-content",
                height: "fit-content",
                padding: "0px 389.42px 0px 0px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Button type="Primary" text="Get started" />
              <Button type="Secondary" text="I like shipping slowly" />
            </div>
          </div>
          <div
            className="overflow-hidden w-[100px] h-[100px] flex-shrink-0"
            style={{
              overflow: "hidden",
              width: "100px",
              height: "100px",
              flexShrink: 0,
            }}
          />
          <div
            className="overflow-hidden relative rounded-tl-[7px] rounded-br-[12px] [box-shadow:0px_4px_18px_rgba(0,_0,_0,_0.3)] w-[531px] h-[451px] flex-shrink-0 bg-[rgba(255,_255,_255,_0)]"
            style={{
              overflow: "hidden",
              position: "relative",
              borderTopLeftRadius: "7px",
              borderBottomRightRadius: "12px",
              boxShadow: "0px 4px 18px  rgba(0, 0, 0, 0.30)",
              width: "531px",
              height: "451px",
              flexShrink: 0,
              backgroundColor: "rgba(255, 255, 255, 0.00)",
            }}
          >
            <div
              className="absolute w-[666.25px] h-[450.38px] origin-top-left overflow-hidden"
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
                className="origin-top-left h-full w-full"
                style={{
                  transformOrigin: "top left",
                  height: "100%",
                  width: "100%",
                }}
                src={pictureAiMobileDesktopPng.src}
              />
            </div>
            <p
              className="text-center flex flex-col justify-center text-[rgb(255,_252,_252)] text-base font-[Inter] font-semibold tracking-[0.01px] leading-[23px]"
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
              DEMO IMAGE/GIF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
