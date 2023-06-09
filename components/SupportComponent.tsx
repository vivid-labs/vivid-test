import { Support } from "./Support";

export const SupportComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <Support />
    </div>
  );
};
