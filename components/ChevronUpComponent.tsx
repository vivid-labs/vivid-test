import { ChevronUp } from "./ChevronUp";

export const ChevronUpComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-24 h-[6rem] bg-[]">
      <ChevronUp />
    </div>
  );
};
