import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Large"
      hover="True"
      text="Button"
      override={{
        width: "100%",
      }}
      figma-id="7:34:3574"
    />
  );
};
