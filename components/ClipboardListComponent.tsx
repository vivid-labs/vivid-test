import { ClipboardList } from "./ClipboardList";

export const ClipboardListComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <ClipboardList />
    </div>
  );
};
