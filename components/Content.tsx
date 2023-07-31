import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const Content = ({ override }: { override?: any }) => {
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
      style={override}
      className="flex flex-col justify-center items-center gap-[10px] px-[100px] relative w-full flex-shrink-0 bg-[rgb(255,_255,_255)]"
    >
      <div className="overflow-hidden flex justify-center items-center gap-[10px] p-[2px] relative w-full h-[519px] flex-shrink-0">
        <div className="flex flex-col items-start gap-[126px] pt-[28px] px-[10px] pb-[36px] relative h-full flex-shrink-0 flex-1 min-w-[0rem]">
          <div className="flex flex-col items-start gap-[25px] relative w-full flex-shrink-0">
            <div className="flex flex-col items-start gap-2 relative flex-shrink-0">
              <div className="relative w-[520px] h-[19px] flex-shrink-0">
                <div className="overflow-hidden absolute w-4 left-[0rem] h-[15.31px]">
                  <div className="absolute w-4 h-[15.31px] top-[0rem]">
                    <img
                      src={group.src}
                      className="absolute left-[0.29px] right-[0.32px] w-auto top-[0.16px] bottom-[0.35px] h-auto"
                    />
                  </div>
                </div>
                <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(244,_86,_154)] text-[13.5px] font-[Avenir] font-medium tracking-[0.05px] leading-[19px]">
                  Free for 2 weeks in beta
                </p>
              </div>
              <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(18,_18,_18)] text-[36px] font-[Avenir] font-black tracking-[-0.85px] leading-10">
                Vivid Teams
              </p>
            </div>
            <div className="flex items-start pr-[30px] relative w-full flex-shrink-0">
              <p className="flex flex-col justify-center text-[rgb(18,_18,_18)] text-[16px] font-[Avenir] font-normal tracking-[0.01px] leading-[23px]">
                Manage your entire design system in Figma. Let developers focus
                on functionality while designers own the UI. Ship faster.{" "}
              </p>
            </div>
            <div className="flex items-start gap-4 relative w-full flex-shrink-0">
              {featureProps.map((props, i) => (
                <Feature {...props} key={i} />
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3 pr-[389.42px] relative flex-shrink-0">
            <Button type="Primary" text="Get started" />
            <Button type="Secondary" text="I like shipping slowly" />
          </div>
        </div>
        <div className="overflow-hidden w-[6.25rem] h-[6.25rem] flex-shrink-0" />
        <div className="overflow-hidden relative rounded-tl-[7px] rounded-br-[12px] [box-shadow:0px_4px_18px_rgb(0,_0,_0,_0.3)] w-[531px] h-[451px] flex-shrink-0">
          <div className="absolute w-[666.25px] h-[450.38px] origin-top-left overflow-hidden">
            <img
              src={pictureAiMobileDesktopPng.src}
              className="transform rotate-0 scale-[100%] translate-x-[0%] translate-y-[0%] origin-top-left h-full w-full"
            />
          </div>
          <p className="text-center flex flex-col justify-center text-[rgb(255,_252,_252)] text-[16px] font-[Inter] font-semibold tracking-[0.01px] leading-[23px]">
            DEMO IMAGE/GIF
          </p>
        </div>
      </div>
    </div>
  );
};
