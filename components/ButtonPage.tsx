import { Button } from "./Button";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      color="White"
      override={{
        width: "100%",
      }}
    />
  );
};
