import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Large"
      hover="True"
      override={{
        width: "100%",
      }}
    />
  );
};
