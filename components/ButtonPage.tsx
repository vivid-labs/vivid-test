import { Button } from "./Button";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      importance="Primary"
      status="Enabled"
      override={{
        width: "100%",
      }}
    />
  );
};
