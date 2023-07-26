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
          figma-id="8:27:172"
        >
          <div className="relative w-14 h-14 flex-shrink-0" figma-id="8:29:374">
            <div
              className="absolute w-14 h-14 bg-[rgb(244,_86,_154)] rounded-[50%]"
              figma-id="8:27:167"
            />
            {icon}
          </div>
          <div
            className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
            figma-id="8:27:171"
          >
            <p
              className="flex flex-col justify-center text-[rgb(244,_86,_154)] text-[16px] font-[Avenir] font-black tracking-[0.01px] leading-[23px]"
              figma-id="8:27:169"
            >
              {task}
            </p>
            <p
              className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
              figma-id="8:27:170"
            >
              {time}
            </p>
          </div>
          <img
            src={img_2585_1.src}
            className="w-5 h-[20.29px] flex-shrink-0 object-cover opacity-[0.30000001192092896]"
            figma-id="8:29:685"
          />
        </div>
      );
    case "Complete":
      return (
        <div
          style={override}
          className="overflow-hidden flex items-center gap-5 px-[20px] py-[16px] rounded-[5px] relative w-[23rem] h-[86px] border-solid border-[rgb(207,_207,_207)] border bg-[rgb(255,_255,_255)]"
          figma-id="8:29:524"
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
            figma-id="8:29:538"
          />
          <div
            className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
            figma-id="8:29:528"
          >
            <p
              className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[16px] font-[Avenir] font-black tracking-[0.01px] leading-[23px] line-through"
              figma-id="8:29:529"
            >
              {task}
            </p>
            <p
              className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
              figma-id="8:29:530"
            >
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
          figma-id="8:223:165"
        >
          <div
            className="relative w-14 h-14 flex-shrink-0"
            figma-id="8:223:166"
          >
            <div
              className="absolute w-14 h-14 bg-[rgb(217,_217,_217)] rounded-[50%]"
              figma-id="8:223:167"
            />
            {icon}
          </div>
          <div
            className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
            figma-id="8:223:169"
          >
            <div
              className="flex items-start gap-[10px] relative w-full flex-shrink-0"
              figma-id="8:223:175"
            >
              <p
                className="whitespace-nowrap flex flex-col justify-center text-[rgb(148,_148,_148)] text-[16px] font-[Avenir] font-black tracking-[0.01px] leading-[23px]"
                figma-id="8:223:170"
              >
                {task}
              </p>
              <div
                className="overflow-hidden flex items-start gap-[10px] px-[8px] py-0 rounded-[4px] relative flex-shrink-0 bg-[rgb(0,_0,_0)]"
                figma-id="8:223:174"
              >
                <p
                  className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[16px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
                  figma-id="8:223:176"
                >
                  Coming Soon!
                </p>
              </div>
            </div>
            <p
              className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
              figma-id="8:223:171"
            >
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
          figma-id="8:233:1790"
        >
          <div
            className="relative w-14 h-14 flex-shrink-0"
            figma-id="8:233:1791"
          >
            <div
              className="absolute w-14 h-14 bg-[rgb(217,_217,_217)] rounded-[50%]"
              figma-id="8:233:1792"
            />
            {icon}
          </div>
          <div
            className="flex flex-col items-start gap-[10px] relative flex-shrink-0 flex-1 min-w-[0rem]"
            figma-id="8:233:1794"
          >
            <div
              className="flex items-start gap-[10px] relative flex-shrink-0"
              figma-id="8:233:1846"
            >
              <p
                className="whitespace-nowrap flex flex-col justify-center text-[rgb(148,_148,_148)] text-[16px] font-[Avenir] font-black tracking-[0.01px] leading-[23px]"
                figma-id="8:233:1795"
              >
                {task}
              </p>
              <div
                className="overflow-hidden flex items-start gap-[10px] px-[8px] py-0 rounded-[4px] relative flex-shrink-0 bg-[rgb(0,_0,_0)]"
                figma-id="8:233:1836"
              >
                <p
                  className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[16px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
                  figma-id="8:233:1837"
                >
                  Up Next!
                </p>
              </div>
            </div>
            <p
              className="flex flex-col justify-center text-[rgb(148,_148,_148)] text-[14px] font-[Avenir] font-medium tracking-[0.01px] leading-[23px]"
              figma-id="8:233:1796"
            >
              {time}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
