import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
export const StepPage = ({ override }: { override?: any }) => {
  return (
    <Step
      status="Up Next"
      icon={<FigmaLogo />}
      task="Headline"
      time="Task-allocated time"
      override={{
        width: "100%",
      }}
    />
  );
};
