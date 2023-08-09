import { Step } from "./Step";
import screenshot_2023_08_09At_6_19_1 from "./screenshot_2023_08_09At_6_19_1.png";

export const Onboarding = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  const stepProps = [
    {
      status: "Complete",
      task: "Connect your Shopify store",
      time: "10 minutes",
      override: {
        height: "86px",
        width: "100%",
      },
    },
    {
      status: "Todo",
      task: "Watch the demo",
      time: "3 minutes",
      override: {
        height: "86px",
        width: "100%",
      },
    },
    {
      status: "Todo",
      task: "Get matched with a Replo expert",
      time: "1 day",
      override: {
        height: "86px",
        width: "100%",
      },
    },
    {
      status: "Up Next",
      task: "Add your teammates",
      time: "10 minutes",
      override: {
        height: "86px",
        width: "100%",
      },
    },
  ];
  return (
    <div
      className="overflow-hidden flex flex-col items-start gap-7 pl-5 pr-[60px] py-5 rounded-[5px] w-full bg-white font-[Avenir]"
      style={override}
    >
      <GetStartedWithReplo />
      <FlexContainer stepProps={stepProps} />
    </div>
  );
};

const GetStartedWithReplo = () => (
  <div className="flex flex-col items-start gap-12">
    <div className="flex flex-col items-start gap-1">
      <div className="overflow-hidden flex flex-col items-start rounded-[5px] w-[360px] bg-[rgb(217,_217,_217)]">
        <div className="overflow-hidden rounded-[5px] w-[90px] h-1.5 bg-blue-600" />
      </div>
      <p className="text-[rgb(148,_148,_148)] text-xs font-medium tracking-[0.01px] leading-[23px]">
        25% complete &#x2014; nice work!
      </p>
    </div>
    <div className="flex flex-col items-start w-[675px]">
      <div className="flex flex-col items-start">
        <p className="text-[rgb(18,_18,_18)] text-4xl font-black tracking-[-0.85px] leading-10">
          Get Started with Replo!
        </p>
      </div>
    </div>
  </div>
);

const FlexContainer = ({ stepProps }: any) => (
  <div className="flex justify-center items-center gap-12 w-full">
    <div className="flex flex-col items-start gap-6 pt-7 px-2.5 pb-9 flex-1 min-w-0 self-stretch">
      {stepProps.map((props, i) => (
        <Step {...props} key={i} />
      ))}
    </div>
    <div className="overflow-hidden flex flex-col justify-center items-center rounded-[1.25rem] w-[567px] bg-white">
      <img
        className="w-[611px] h-[261px] object-cover"
        src={screenshot_2023_08_09At_6_19_1.src}
      />
    </div>
  </div>
);
