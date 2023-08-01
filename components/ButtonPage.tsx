import { Button } from "./Button";

export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Small"
      hover="True"
      text="Other button"
      override={{
        backgroundColor: "rgb(60, 157, 93)",
        width: "100%",
      }}
    />
  );
};
