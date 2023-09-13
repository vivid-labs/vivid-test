import { Step } from "./Step";
import { DashedSeparator } from "./DashedSeparator";
export const StepBar = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="overflow-hidden flex items-center gap-1 px-2.5 py-3 rounded-lg w-[466px] border-solid border-[rgb(225,_226,_230)] border bg-white"
      style={override}
    >
      <Step status="Done" number="1" text="Assign" />
      <DashedSeparator />
      <Step status="Active" number="2" text="Review" />
      <DashedSeparator />
      <Step status="To Do" number="3" text="Remove & Upload Evidence" />
      <DashedSeparator />
      <Step status="To Do" number="4" text="Done" />
    </div>
  );
};
