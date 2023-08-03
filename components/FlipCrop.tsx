import flipCrop from "./flipCrop.png";
export const FlipCrop = ({ override }: { override?: any }) => {
  return (
    <div
      className="h-[27px] w-full flex-shrink-0 origin-top-left overflow-hidden"
      style={override}
    >
      <img
        className="h-full w-full origin-top-left -translate-y-[60.09%] translate-x-[85.01%] rotate-[51.94deg] scale-x-[55.72%] scale-y-[84.75%] transform"
        src={flipCrop.src}
      />
    </div>
  );
};
