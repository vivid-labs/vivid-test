import chartPie from "./chartPie.svg";

export const ChartPie = ({ override }: { override?: any }) => {
  return <img src={chartPie.src} style={override} className="w-20 h-[5rem]" />;
};
