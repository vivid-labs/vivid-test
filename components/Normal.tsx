import normal from "./normal.png";
export const Normal = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="w-full h-[27.45px] flex-shrink-0 origin-top-left overflow-hidden"
    >
      <img
        src={normal.src}
        className="transform scale-x-[100%] scale-y-[98.37%] origin-top-left h-full w-full"
      />
    </div>
  );
};
