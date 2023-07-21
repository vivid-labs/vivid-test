import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Large"
      hover="True"
      override={{
        backgroundColor: "rgb(113, 113, 122)",
      }}
      override={{
        width: "100%",
      }}
      figma-id="3:1948:900"
    />
  );
};
