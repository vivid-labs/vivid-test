import { Button } from "./Button";
import { SecondaryLogoIcon } from "./SecondaryLogoIcon";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      logo={<SecondaryLogoIcon />}
      override={{
        width: "100%",
      }}
    />
  );
};
