import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";

export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      property_1="Secondary/Filled"
      hasLeftIcon={true}
      leftIcon={<RocketLaunch />}
      hasText={true}
      text="Get Started"
    />
  );
};
