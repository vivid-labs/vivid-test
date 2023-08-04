import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      color="White"
      override={{
        width: "100%",
      }}
    />
  );
};
