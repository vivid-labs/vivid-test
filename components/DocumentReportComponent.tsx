import { DocumentReport } from "./DocumentReport";

export const DocumentReportComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <DocumentReport />
    </div>
  );
};
