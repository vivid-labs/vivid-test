import { Button } from "./Button";
import { EnvelopeSimple } from "./EnvelopeSimple";

export const ButtonPage = ({ style }: { style?: any }) => {
  return (
    <Button
      property_1="Secondary/Filled"
      hasLeftIcon={true}
      leftIcon={<EnvelopeSimple />}
      hasText={true}
      text="Subscribe"
    />
  );
};
