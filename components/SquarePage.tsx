import { Square } from "./Square";
export const SquarePage = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <Square
      color="Red"
      letter="C"
      override={{
        width: "100%",
      }}
    />
  );
};
