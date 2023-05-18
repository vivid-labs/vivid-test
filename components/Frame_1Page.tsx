import "./Frame_1Page.css";
import { Feature } from "./Feature";

export const Frame_1Page = () => {
  return (
    <div className="overflow-hidden flex flex-row justify-center items-center gap-[12px] p-[12px] absolute w-[1440px] h-[770px]">
      <div className="overflow-hidden flex flex-col justify-center gap-[12px] p-[12px] rounded-[14px] relative [box-shadow:0pxpx_4pxpx_10pxpx_4px_rgb(0,_0,_0,_0.15)] bg-[rgb(255,_255,_255)]">
        <div className="overflow-hidden flex flex-row items-center gap-[8px] relative">
          <p className="text-[rgb(244,_86,_154)] w-[86px] text-[15px] font-[Avenir] font-extrabold">
            Public beta
          </p>
        </div>
        <div className="flex flex-col gap-[4px] relative">
          <div className="overflow-hidden flex flex-row justify-center gap-[-4px] pl-[5px] pr-[5px] relative">
            <p className="text-[rgb(208,_208,_208)] w-[35px] text-[15px] font-[Avenir] font-extrabold line-through">
              $50
            </p>
            <div className="relative w-[86px] h-[20px]">
              <p className="text-[rgb(0,_0,_0)] absolute w-[35px] left-0 top-0 text-[15px] font-[Avenir] font-extrabold">
                $30
              </p>
              <p className="text-[rgb(0,_0,_0)] absolute w-[54px] left-[29px] h-[10px] top-[9px] text-[8px] font-[Avenir] font-extrabold">
                per month
                <br />
              </p>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row gap-[10px] pl-[6px] pr-[6px] pt-[4px] pb-[4px] rounded-[4px] relative">
            <p className="whitespace-nowrap text-[rgb(27,_196,_125)] text-[6px] font-[Avenir] font-medium">
              Save 40% with the beta!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] relative">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
        <div className="overflow-hidden flex flex-row justify-center items-center gap-[10px] p-[8px] rounded-[4px] relative bg-[rgb(244,_86,_154)]">
          <p className="whitespace-nowrap text-[rgb(255,_255,_255)] text-[10px] font-[Avenir] font-extrabold">
            Start using Vivid!
          </p>
        </div>
      </div>
    </div>
  );
};
