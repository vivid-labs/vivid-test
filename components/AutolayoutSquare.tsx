export const AutolayoutSquare = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex justify-center items-center gap-[10px] p-[10px] relative h-[115px] bg-[rgb(0,_240,_255)]"
      figma-id="6:1224:1338"
    >
      <div
        className="overflow-hidden w-[33px] h-[15px] flex-shrink-0 bg-[rgb(255,_255,_255)] relative"
        figma-id="6:1224:1339"
      />
      <div
        className="overflow-hidden w-[33px] h-[15px] flex-shrink-0 bg-[rgb(255,_255,_255)] relative"
        figma-id="6:1224:1340"
      />
      <div
        className="overflow-hidden w-[33px] h-[15px] flex-shrink-0 bg-[rgb(255,_255,_255)] relative"
        figma-id="6:1224:1341"
      />
    </div>
  );
};
