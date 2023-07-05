import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
export const StepPage = ({ override }: { override?: any }) => {
  return (
    <Step
      status="Todo"
      icon={<FigmaLogo />}
      task="Do this task"
      time="Time to do this task"
    />
  );
};
