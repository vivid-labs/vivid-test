import flipCrop from "./flipCrop.png";
export const Flips = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="flex items-center gap-[5px] w-full p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]"
      figma-id="3:1585:921"
    >
      <img
        src={flipCrop.src}
        className="w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        figma-id="3:1585:922"
      />
      <img
        src={flipCrop.src}
        className="transform scale-x-[-100%] scale-y-[100%] origin-top-left w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        figma-id="3:1585:934"
      />
      <img
        src={flipCrop.src}
        className="transform scale-x-[-100%] scale-y-[100%] origin-top-left w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        figma-id="3:1585:936"
      />
      <img
        src={flipCrop.src}
        className="w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        figma-id="3:1585:935"
      />
      <div
        className="w-[27px] h-[27.45px] flex-shrink-0 origin-top-left overflow-hidden"
        figma-id="3:1585:937"
      >
        <img
          src={flipCrop.src}
          className="transform rotate-[51.94deg] scale-x-[55.72%] scale-y-[84.75%] translate-x-[85.01%] -translate-y-[60.09%] origin-top-left h-full w-full"
          figma-id="3:1585:937"
        />
      </div>
    </div>
  );
};
