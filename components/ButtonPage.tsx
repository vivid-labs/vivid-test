import { Button } from "./Button";
import { RocketLaunch } from "./RocketLaunch";

export const ButtonPage = ({ style }: { style?: any }) => {
  return (
    <Button
      property_1="Primary/Filled"
      hasLeftIcon={true}
      leftIcon={<RocketLaunch />}
      hasText={true}
      text="Button"
    />
  );
};
