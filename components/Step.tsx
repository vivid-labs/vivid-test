import figmaLogoWhite_1 from "./figmaLogoWhite_1.png";
import img_2585_1 from "./img_2585_1.png";
export const Step = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden flex flex-row items-center gap-5 px-[20px] py-[16px] rounded-[5px] relative w-full h-[86px] flex-shrink-0 border-solid border-[rgb(207,_207,_207)] border bg-[rgb(255,_255,_255)]"
      figma-id="385:211"
    >
      <div className="relative w-14 h-14 flex-shrink-0" figma-id="385:212">
        <div
          className="absolute w-14 h-14 bg-[rgb(0,_0,_0)] rounded-[50%]"
          figma-id="385:213"
        />
        <div
          className="flex flex-row justify-center items-center gap-[10px] absolute w-[35px] left-[11px] h-[35px] top-[10px]"
          figma-id="385:220"
        >
          <img
            src={figmaLogoWhite_1.src}
            className="w-5 h-[31px] flex-shrink-0 object-cover opacity-100"
            figma-id="385:221"
          />
        </div>
      </div>
      <div
        className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
        figma-id="385:215"
      >
        <p
          className="flex flex-col justify-center w-full h-[23px] flex-shrink-0 text-[rgb(244,_86,_154)] text-[16px] font-[Avenir] font-black tracking-[0.01px] leading-[23px]"
          figma-id="385:216"
        >
          Do this task
        </p>
        <p
          className="flex flex-col justify-center w-full h-5 flex-shrink-0 text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
          figma-id="385:217"
        >
          Time to do this task
        </p>
      </div>
      <img
        src={img_2585_1.src}
        className="w-5 h-[20.29px] flex-shrink-0 object-cover opacity-[0.30000001192092896]"
        figma-id="385:218"
      />
    </div>
  );
};
