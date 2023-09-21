import { Button } from "./Button";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      override={{
        width: "100%",
      }}
    />
  );
};
