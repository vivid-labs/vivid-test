import { ChevronDown } from "./ChevronDown";

export const ChevronDownComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-24 h-[6rem] bg-[]">
      <ChevronDown />
    </div>
  );
};
