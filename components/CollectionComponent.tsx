import { Collection } from "./Collection";

export const CollectionComponent = ({ override }: { override?: any }) => {
  return (
    <div style={override} className="relative w-20 h-[5rem] bg-[]">
      <Collection />
    </div>
  );
};
