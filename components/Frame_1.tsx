import polygon_1 from "./polygon_1.svg";
export const Frame_1 = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden relative w-full h-[22.25rem] flex-shrink-0 bg-[rgb(255,_227,_227)]"
      figma-id="832:838"
    >
      <div figma-id="832:869">
        <div figma-id="832:868">
          <div figma-id="832:864">
            <div
              className="absolute w-[6.25rem] left-[8.5rem] h-[6.25rem] top-[73px] bg-[rgb(196,_196,_196)]"
              figma-id="832:839"
            />
            <div
              className="absolute w-[6.25rem] left-[286px] h-[6.25rem] top-[73px] bg-[rgb(196,_196,_196)]"
              figma-id="832:863"
            />
          </div>
          <div figma-id="832:865">
            <div
              className="absolute w-[6.25rem] left-[8.5rem] h-[6.25rem] top-[193px] bg-[rgb(196,_196,_196)]"
              figma-id="832:866"
            />
            <div
              className="absolute w-[6.25rem] left-[286px] h-[6.25rem] top-[193px] bg-[rgb(196,_196,_196)]"
              figma-id="832:867"
            />
          </div>
        </div>
        <img
          src={polygon_1.src}
          className="absolute w-[43px] left-[33px] h-[49px] top-[30px]"
          figma-id="832:870"
        />
      </div>
    </div>
  );
};
