import { Tooltip } from "./Tooltip";
export const TooltipPage = ({ override }: { override?: any }) => {
  return (
    <Tooltip
      override={{
        backgroundColor: "rgb(15, 23, 42)",
        position: "relative",
        width: "100%",
      }}
    />
  );
};
