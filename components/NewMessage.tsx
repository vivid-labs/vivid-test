import whiteArrow_1 from "./whiteArrow_1.png";
export const NewMessage = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex justify-between items-center pl-[20px] pr-[12px] py-[8px] rounded-[100px] relative w-full flex-shrink-0 border-solid border-[rgb(193,_193,_193)] border"
      figma-id="5:184:85"
    >
      <p
        className="flex flex-col justify-center text-[rgb(72,_72,_72)] text-[16px] font-[Avenir] font-normal"
        figma-id="5:184:86"
      >
        Text message
      </p>
      <div
        className="overflow-hidden flex justify-between items-center p-[2px] rounded-[100px] relative w-7 h-7 flex-shrink-0 bg-[rgb(69,_141,_247)]"
        figma-id="5:184:87"
      >
        <img
          src={whiteArrow_1.src}
          className="h-full flex-shrink-0 flex-1 min-w-[0rem] object-cover"
          figma-id="5:184:88"
        />
      </div>
    </div>
  );
};
