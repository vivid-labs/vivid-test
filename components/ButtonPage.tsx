import { Button } from "./Button";
import { Check } from "./Check";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      variant="Primary"
      iconSide="Right"
      icon={<Check />}
      hasIcon={true}
      text="Button"
      override={{
        width: "100%",
      }}
    />
  );
};
