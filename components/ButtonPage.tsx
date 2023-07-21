import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Large"
      hover="True"
      override={{
        type: "OBJECT",
        value: {
          backgroundColor: "rgb(113, 113, 122)",
        },
        width: "100%",
      }}
      figma-id="3:1948:900"
    />
  );
};
