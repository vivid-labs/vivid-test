import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      status="Failure"
      text="Failure!"
      override={{
        width: "100%",
      }}
      figma-id="10:2025:832"
    />
  );
};
