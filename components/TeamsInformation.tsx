import group from "./group.svg";
import { Feature } from "./Feature";
export const TeamsInformation = ({ override }: { override?: any }) => {
  const featureProps = [
    {
      description:
        "As soon as designs are complete, developers can review generated code in their normal workflow. ",
      heading: "Create PRs in GitHub",
      override: {
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
        flex: "1 1 0%",
        minWidth: "0px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
  ];
  return (
    <div
      className="flex w-full flex-shrink-0 flex-col items-start gap-[25px] font-[Avenir]"
      style={override}
    >
      <div className="flex h-[69px] w-full flex-shrink-0 flex-col items-start gap-2">
        <div className="relative h-[19px] w-full flex-shrink-0">
          <div className="absolute left-0 h-[15px] w-4 overflow-hidden">
            <div className="absolute top-0 h-[15px] w-4">
              <img
                className="absolute bottom-[0.35px] left-[0.29px] right-[0.32px] top-[0.16px] h-auto w-auto"
                src={group.src}
              />
            </div>
          </div>
          <p className="whitespace-nowrap text-[13.5px] font-medium leading-[19px] tracking-[0.05px] text-[rgb(244,_86,_154)]">
            Free for 2 weeks in beta
          </p>
        </div>
        <p className="text-4xl font-black leading-10 tracking-[-0.85px] text-[rgb(18,_18,_18)]">
          Vivid Teams
        </p>
      </div>
      <div className="flex w-full flex-shrink-0 items-start pr-[30px]">
        <p className="text-base font-normal leading-[23px] tracking-[0.01px] text-[rgb(18,_18,_18)]">
          Manage your entire design system in Figma. Let developers focus on
          functionality while designers own the UI. Ship faster.{" "}
        </p>
      </div>
      <div className="flex w-full flex-shrink-0 items-start gap-4">
        {featureProps.map((props, i) => (
          <Feature {...props} key={i} />
        ))}
      </div>
    </div>
  );
};
