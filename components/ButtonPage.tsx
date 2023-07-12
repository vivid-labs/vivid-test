import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      type="Primary"
      text="Get started"
      override={{
        width: "100%",
      }}
    />
  );
};
