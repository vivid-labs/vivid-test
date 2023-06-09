import { Globe } from "./Globe";

export const GlobeComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-24 h-[6rem] bg-[]">
      <Globe />
    </div>
  );
};
