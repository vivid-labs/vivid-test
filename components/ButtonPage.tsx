import { Button } from "./Button";
export const ButtonPage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Button
      icon="Icon"
      override={{
        width: "100%",
      }}
    />
  );
};
