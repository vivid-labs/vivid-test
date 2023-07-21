import { Button } from "./Button";
export const ButtonPage = ({ override }: { override?: any }) => {
  return (
    <Button
      size="Large"
      hover="True"
      override={{
        backgroundColor: "rgb(113, 113, 122)",
        width: "100%",
      }}
      figma-id="3:1948:900"
      style={{
        backgroundColor: "rgb(60, 157, 93)",
        width: "100%",
      }}
    />
  );
};
