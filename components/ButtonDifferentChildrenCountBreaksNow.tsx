export const ButtonDifferentChildrenCountBreaksNow = ({
  override,
  size,
  hover,
}: {
  override?: any;
  size: string;
  hover: string;
}) => {
  if (size === "Large" && hover === "True") {
    return (
      <div
        style={override}
        className="overflow-hidden flex justify-center items-center gap-[10px] px-[15px] py-[10px] rounded-[4px] relative opacity-50 bg-[rgb(0,_129,_225)]"
        figma-id="1438:933"
      >
        <p
          className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-semibold"
          figma-id="1438:934"
        >
          Button
        </p>
      </div>
    );
  } else if (size === "Large" && hover === "False") {
    return (
      <div
        style={override}
        className="overflow-hidden flex justify-center items-center gap-[10px] px-[15px] py-[10px] rounded-[4px] relative bg-[rgb(0,_129,_225)]"
        figma-id="1438:935"
      >
        <p
          className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-semibold"
          figma-id="1438:936"
        >
          Button
        </p>
      </div>
    );
  } else if (size === "Small" && hover === "True") {
    return (
      <div
        style={override}
        className="overflow-hidden flex justify-center items-center gap-[10px] px-[10px] py-[5px] rounded-[4px] relative opacity-50 bg-[rgb(0,_129,_225)]"
        figma-id="1438:937"
      >
        <p
          className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-semibold"
          figma-id="1438:938"
        >
          Button
        </p>
      </div>
    );
  } else if (size === "Small" && hover === "False") {
    return (
      <div
        style={override}
        className="overflow-hidden flex justify-center items-center gap-[10px] px-[10px] py-[5px] rounded-[4px] relative bg-[rgb(0,_129,_225)]"
        figma-id="1438:939"
      >
        <div
          className="w-[45px] h-4 flex-shrink-0 bg-[rgb(217,_217,_217)]"
          figma-id="1443:943"
        />
        <p
          className="whitespace-nowrap text-center flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-semibold"
          figma-id="1438:940"
        >
          Button
        </p>
      </div>
    );
  } else {
    return null;
  }
};
