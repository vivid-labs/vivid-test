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
          className="overflow-hidden flex flex-row justify-start items-center gap-5 pl-5 pr-5 pt-4 pb-4 rounded-[5px] relative w-[23rem] h-[86px] border border-solid border-[rgb(207,_207,_207)] bg-[rgb(255,_255,_255)]"
        >
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute w-14 left-[0rem] h-14 top-[0rem] bg-[rgb(244,_86,_154)] rounded-[50%]" />
            {icon}
          </div>
          <div className="flex flex-col justify-start items-start gap-[10px] relative flex-shrink-0 flex-1 [0rem]">
            <p className="flex flex-col justify-center w-full h-[23px] flex-shrink-0 text-[rgb(244,_86,_154)] text-[16px] font-[Avenir] font-extrabold tracking-[0.00800000037997961px] leading-[23px]">
              {task}
            </p>
            <p className="flex flex-col justify-center w-full h-5 flex-shrink-0 text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.00800000037997961px] leading-[23px]">
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
          className="overflow-hidden flex flex-row justify-start items-center gap-5 pl-5 pr-5 pt-4 pb-4 rounded-[5px] relative w-[23rem] h-[86px] border border-solid border-[rgb(207,_207,_207)] bg-[rgb(255,_255,_255)]"
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
          />
          <div className="flex flex-col justify-start items-start gap-[10px] relative flex-shrink-0 flex-1 [0rem]">
            <p className="flex flex-col justify-center w-full h-[23px] flex-shrink-0 text-[rgb(148,_148,_148)] text-[16px] font-[Avenir] font-extrabold tracking-[0.00800000037997961px] leading-[23px] line-through">
              {task}
            </p>
            <p className="flex flex-col justify-center w-full h-5 flex-shrink-0 text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.00800000037997961px] leading-[23px]">
              {time}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
