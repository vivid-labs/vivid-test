import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
import { CheckMark } from "./CheckMark";
export const Step = ({
  override,
  status,
  icon,
  task,
  time,
}: {
  override?: any;
  status: string;
  icon: any;
  task: string;
  time: string;
}) => {
  switch (status) {
    case "Todo":
      return (
        <div
          style={override}
          className="overflow-hidden flex items-center gap-5 px-[20px] py-[16px] rounded-[5px] relative w-[23rem] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-[rgb(255,_255,_255)]"
        >
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute w-14 left-[0rem] h-14 top-[0rem] bg-[rgb(244,_86,_154)] rounded-[50%]" />
            {icon}
          </div>
          <div className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]">
            <p className="flex flex-col justify-center text-[rgb(244,_86,_154)] text-[16px] font-black tracking-[0.01px] leading-[23px]">
              {task}
            </p>
            <p className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-medium tracking-[0.01px] leading-[23px]">
              {time}
            </p>
          </div>
          <img
            src={img_2585_1.src}
            className="w-5 h-[20.29px] flex-shrink-0 object-cover opacity-[0.30000001192092896]"
          />
        </div>
      );
    case "Complete":
      return (
        <div
          style={override}
          className="overflow-hidden flex items-center gap-5 px-[20px] py-[16px] rounded-[5px] relative w-[23rem] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-[rgb(255,_255,_255)]"
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
          />
          <div className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]">
            <p className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[16px] font-black tracking-[0.01px] leading-[23px] line-through">
              {task}
            </p>
            <p className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-medium tracking-[0.01px] leading-[23px]">
              {time}
            </p>
          </div>
        </div>
      );
    case "Unsupported":
      return (
        <div
          style={override}
          className="overflow-hidden flex items-center gap-5 px-[20px] py-[16px] rounded-[5px] relative w-[23rem] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-[rgb(245,_241,_241)]"
        >
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute w-14 left-[0rem] h-14 top-[0rem] bg-[rgb(217,_217,_217)] rounded-[50%]" />
            {icon}
          </div>
          <div className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]">
            <div className="flex items-start gap-[10px] relative w-full flex-shrink-0">
              <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(148,_148,_148)] text-[16px] font-black tracking-[0.01px] leading-[23px]">
                {task}
              </p>
              <div className="overflow-hidden flex items-start px-[8px] rounded-[4px] relative flex-shrink-0 bg-[rgb(0,_0,_0)]">
                <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[16px] font-medium tracking-[0.01px] leading-[23px]">
                  Coming Soon!
                </p>
              </div>
            </div>
            <p className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-medium tracking-[0.01px] leading-[23px]">
              {time}
            </p>
          </div>
        </div>
      );
    case "Up Next":
      return (
        <div
          style={override}
          className="overflow-hidden flex items-center gap-5 px-[20px] py-[16px] rounded-[5px] relative w-[23rem] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-[rgb(255,_255,_255)]"
        >
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute w-14 left-[0rem] h-14 top-[0rem] bg-[rgb(217,_217,_217)] rounded-[50%]" />
            {icon}
          </div>
          <div className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]">
            <div className="flex items-start gap-[10px] relative flex-shrink-0">
              <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(148,_148,_148)] text-[16px] font-black tracking-[0.01px] leading-[23px]">
                {task}
              </p>
              <div className="overflow-hidden flex items-start px-[8px] rounded-[4px] relative flex-shrink-0 bg-[rgb(0,_0,_0)]">
                <p className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[16px] font-medium tracking-[0.01px] leading-[23px]">
                  Up Next!
                </p>
              </div>
            </div>
            <p className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-medium tracking-[0.01px] leading-[23px]">
              {time}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
