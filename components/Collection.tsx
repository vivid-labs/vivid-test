import collection from "./collection.svg";

export const Collection = ({ override }: { override?: any }) => {
  return (
    <img src={collection.src} style={override} className="w-20 h-[5rem]" />
  );
};
