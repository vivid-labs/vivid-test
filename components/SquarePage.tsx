import { Square } from "./Square";
export const SquarePage = ({ override }: { override?: any }) => {
  return (
    <Square
      override={{
        rotate: "-10.0deg",
        width: "100%",
      }}
    />
  );
};
