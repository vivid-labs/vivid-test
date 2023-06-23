import pictureAiMobileDesktopPng from "./pictureAiMobileDesktopPng.jpg";
import figmaScreen_1 from "./figmaScreen_1.png";
import vsCodeScreen_1 from "./vsCodeScreen_1.png";

export const Right = ({ override }: { override?: any }) => {
  return (
    <div
      style={override}
      className="overflow-hidden rounded-[5px] relative [box-shadow:0px_4px_18px_rgb(0,_0,_0,_0.3)] w-[531px] h-[451px] flex-shrink-0"
    >
      <div className="absolute w-[666px] h-[455px] origin-top-left opacity-100 overflow-hidden">
        <img
          src={pictureAiMobileDesktopPng.src}
          className="transform rotate-0 scale-[100%] translate-x-[0%] translate-y-[0%] origin-top-left h-full w-full"
        />
      </div>
      <img
        src={figmaScreen_1.src}
        className="absolute w-[350px] left-[41px] h-[199.62px] top-[58.5px] object-cover opacity-100"
      />
      <img
        src={vsCodeScreen_1.src}
        className="absolute w-[350px] left-[141px] h-[199.49px] top-[192.5px] object-cover opacity-100"
      />
    </div>
  );
};
