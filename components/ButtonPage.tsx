import { Button } from "./Button";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      type="Default"
      override={{
        width: "100%",
      }}
    />
  );
};
