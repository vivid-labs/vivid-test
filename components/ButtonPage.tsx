import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Small"
      hover="False"
      override={{
        width: "100%",
      }}
    />
  );
};
