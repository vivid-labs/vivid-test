import documentReport from "./documentReport.svg";

export const DocumentReport = ({ override }: { override?: any }) => {
  return (
    <img src={documentReport.src} style={override} className="w-20 h-[5rem]" />
  );
};
