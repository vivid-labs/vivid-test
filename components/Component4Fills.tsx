import frame_2 from "./frame_2.png";
import frame_2Image from "./frame_2Image.jpg";
export const Component4Fills = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden relative w-full h-[18.75rem] flex-shrink-0 bg-[rgb(255,_255,_255)]"
      figma-id="789:831"
    >
      <div
        className="overflow-hidden absolute w-[18.75rem] h-[18.75rem]"
        figma-id="789:832"
      >
        <img
          src={frame_2.src}
          className="object-cover opacity-100 absolute h-full w-full"
          figma-id=""
        />
        <div className="absolute h-full w-full" figma-id="" />
        <div className="absolute h-full w-full" figma-id="" />
        <img
          src={frame_2Image.src}
          className="transform rotate-0 scale-x-[137.61%] scale-y-[133.93%] -translate-x-[5.17%] -translate-y-[13.8%] origin-top-left opacity-50 absolute h-full w-full"
          figma-id=""
        />
      </div>
    </div>
  );
};
