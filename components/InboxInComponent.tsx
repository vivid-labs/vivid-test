import { InboxIn } from "./InboxIn";

export const InboxInComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <InboxIn />
    </div>
  );
};
