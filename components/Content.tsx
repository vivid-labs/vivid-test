import group from "./group.svg";
import { Feature } from "./Feature";
import { Button } from "./Button";
import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
export const Content = ({ override }: { override?: any }) => {
  const featureOverride = {
    height: "fit-content",
    flex: "1 1 0%",
    minWidth: "0px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  };
  const featureProps = [
    {
      description:
        "As soon as designs are complete, developers can review generated code in their normal workflow. ",
      heading: "Create PRs in GitHub",
      override: featureOverride,
    },
    {
      description:
        "Once you generate a component, Vivid will call that component in future generations so you never generate duplicated code. ",
      heading: "Reuse Components",
      override: featureOverride,
    },
    {
      description:
        "Already have components implemented in your codebase? Vivid  links your Figma components to existing React components.",
      heading: "Call existing components",
      override: featureOverride,
    },
  ];
  return (
    <div
      className="flex flex-col items-center px-[100px] w-full bg-white font-[Avenir]"
      style={override}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2.5 p-0.5 w-full h-[520px]">
        <div className="flex-col flex gap-[125px] pt-7 px-2.5 pb-9 h-full flex-1 min-w-[0rem]">
          <div className="flex flex-col  gap-[25px] w-full">
            <div className="flex flex-col gap-2">
              <div className="relative w-[520px] h-[20px]">
                <div className="overflow-hidden absolute w-4 left-[0rem] h-[15px]">
                  <div className="absolute w-4 h-[15px] top-[0rem]">
                    <img
                      className="absolute left-[0.29px] right-[0.32px] w-auto top-[0.16px] bottom-[0.35px] h-auto"
                      src={group.src}
                    />
                  </div>
                </div>
                <p className="whitespace-nowrap text-[rgb(244,_86,_154)] text-[13.5px] font-medium tracking-[0.05px] leading-[19px]">
                  Free for 2 weeks in beta
                </p>
              </div>
              <p className="whitespace-nowrap text-[rgb(18,_18,_18)] text-4xl font-black tracking-[-0.85px] leading-10">
                Vivid Teams
              </p>
            </div>
            <div className="flex items-start pr-[30px] w-full">
              <p className="text-[rgb(18,_18,_18)] text-base font-normal tracking-[0.01px] leading-[23px]">
                Manage your entire design system in Figma. Let developers focus
                on functionality while designers own the UI. Ship faster.{" "}
              </p>
            </div>
            <div className="flex items-start w-full gap-4">
              {featureProps.map((props, i) => (
                <Feature {...props} key={i} />
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3 pr-[389px]">
            <Button type="Primary" text="Get started" />
            <Button type="Secondary" text="I like shipping slowly" />
          </div>
        </div>
        <div className="overflow-hidden w-[100px] h-[100px]" />
        <div className="overflow-hidden relative rounded-tl-[7px] rounded-br-[12px] w-[530px] h-[450px] bg-white [box-shadow:0px_4px_18px_rgba(0,_0,_0)]">
          <div className="absolute w-[665px] h-[450px] origin-top-left">
            <img
              className="w-full h-full origin-top-left"
              src={pictureAiMobileDesktopPng.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
