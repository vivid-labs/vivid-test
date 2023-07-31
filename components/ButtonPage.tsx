import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      type="default"
      state="Default"
      override={{
        position: "relative",
        width: "100%",
      }}
    />
  );
};
