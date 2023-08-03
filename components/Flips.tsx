import flipCrop from "./flipCrop.png";
export const Flips = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex w-full flex-shrink-0 items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]"
      style={override}
    >
      <img
        className="h-[27px] w-[27px] flex-shrink-0 object-cover"
        src={flipCrop.src}
      />
      <img
        className="h-[27px] w-[27px] flex-shrink-0 scale-x-[-100%] scale-y-[100%] transform object-cover"
        src={flipCrop.src}
      />
      <img
        className="h-[27px] w-[27px] flex-shrink-0 scale-x-[-100%] scale-y-[100%] transform object-cover"
        src={flipCrop.src}
      />
      <img
        className="h-[27px] w-[27px] flex-shrink-0 object-cover"
        src={flipCrop.src}
      />
      <div className="h-[27px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
        <img
          className="h-full w-full origin-top-left -translate-y-[60.09%] translate-x-[85.01%] rotate-[51.94deg] scale-x-[55.72%] scale-y-[84.75%] transform"
          src={flipCrop.src}
        />
      </div>
    </div>
  );
};
