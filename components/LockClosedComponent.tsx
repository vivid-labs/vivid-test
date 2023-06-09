import { LockClosed } from "./LockClosed";

export const LockClosedComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <LockClosed />
    </div>
  );
};
