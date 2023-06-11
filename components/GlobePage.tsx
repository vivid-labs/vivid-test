import { Globe } from "./Globe";

export const GlobePage = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-24 h-[6rem]">
      <Globe />
    </div>
  );
};
