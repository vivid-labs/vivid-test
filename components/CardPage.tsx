import { Card } from "./Card";
export const CardPage = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <Card
      mode="Light"
      override={{
        width: "100%",
      }}
    />
  );
};
