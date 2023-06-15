import { Button } from "./Button";

export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Small"
      hover="True"
      override={{
        height: "29px",
        width: "fit-content",
      }}
    />
  );
};
