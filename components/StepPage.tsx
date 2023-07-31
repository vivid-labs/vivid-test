import { Step } from "./Step";
import { FigmaLogo } from "./FigmaLogo";
export const StepPage = ({ override }: { override?: any }) => {
  return (
    <Step
      status="Complete"
      time="<1 minute"
      task="Install Figma Plugin"
      icon={<FigmaLogo />}
      override={{
        height: "86px",
        width: "100%",
      }}
    />
  );
};
