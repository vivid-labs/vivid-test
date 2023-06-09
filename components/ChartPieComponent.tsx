import { ChartPie } from "./ChartPie";

export const ChartPieComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <ChartPie />
    </div>
  );
};
