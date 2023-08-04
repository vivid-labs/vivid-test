import { FigmaLogo } from "./FigmaLogo";
import img_2585_1 from "./img_2585_1.png";
import { CheckMark } from "./CheckMark";
import * as React from "react";
export const Step = ({
  override,
  status,
  icon,
  task,
  time,
}: {
  override?: React.CSSProperties;
  status: string;
  icon: React.ReactNode;
  task: string;
  time: string;
}) => {
  switch (status) {
    case "Todo":
      return (
        <div
          className="flex h-[86px] w-[368px] items-center gap-5 overflow-hidden rounded-[5px] border border-solid border-[rgb(207,_207,_207)] bg-white px-5 py-4"
          style={override}
        >
          <div className="relative h-14 w-14 flex-shrink-0">
            <div className="absolute left-0 top-0 h-14 w-14 rounded-[50%] bg-[rgb(244,_86,_154)]" />
            {icon}
          </div>
          <div className="flex min-w-0 flex-1 flex-shrink-0 flex-col items-start gap-2.5">
            <p className="text-base font-black leading-[23px] tracking-[0.01px] text-[rgb(244,_86,_154)]">
              {task}
            </p>
            <p className="text-sm font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
              {time}
            </p>
          </div>
          <img
            className="h-5 w-5 flex-shrink-0 object-cover opacity-30"
            src={img_2585_1.src}
          />
        </div>
      );
    case "Complete":
      return (
        <div
          className="flex h-[86px] w-[368px] items-center gap-5 overflow-hidden rounded-[5px] border border-solid border-[rgb(207,_207,_207)] bg-white px-5 py-4"
          style={override}
        >
          <CheckMark
            override={{
              height: "56px",
              width: "56px",
            }}
          />
          <div className="flex min-w-0 flex-1 flex-shrink-0 flex-col items-start gap-2.5">
            <p className="text-base font-black leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)] line-through">
              {task}
            </p>
            <p className="text-sm font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
              {time}
            </p>
          </div>
        </div>
      );
    case "Unsupported":
      return (
        <div
          className="flex h-[86px] w-[368px] items-center gap-5 overflow-hidden rounded-[5px] border border-solid border-[rgb(207,_207,_207)] bg-[rgb(245,_241,_241)] px-5 py-4"
          style={override}
        >
          <div className="relative h-14 w-14 flex-shrink-0">
            <div className="absolute left-0 top-0 h-14 w-14 rounded-[50%] bg-[rgb(217,_217,_217)]" />
            {icon}
          </div>
          <div className="flex min-w-0 flex-1 flex-shrink-0 flex-col items-start gap-2.5">
            <div className="flex w-full flex-shrink-0 items-start gap-2.5">
              <p className="whitespace-nowrap text-base font-black leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
                {task}
              </p>
              <div className="flex flex-shrink-0 items-start overflow-hidden rounded bg-black px-2">
                <p className="whitespace-nowrap text-base font-medium leading-[23px] tracking-[0.01px] text-white">
                  Coming Soon!
                </p>
              </div>
            </div>
            <p className="text-sm font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
              {time}
            </p>
          </div>
        </div>
      );
    case "Up Next":
      return (
        <div
          className="flex h-[86px] w-[368px] items-center gap-5 overflow-hidden rounded-[5px] border border-solid border-[rgb(207,_207,_207)] bg-white px-5 py-4"
          style={override}
        >
          <div className="relative h-14 w-14 flex-shrink-0">
            <div className="absolute left-0 top-0 h-14 w-14 rounded-[50%] bg-[rgb(217,_217,_217)]" />
            {icon}
          </div>
          <div className="flex min-w-0 flex-1 flex-shrink-0 flex-col items-start gap-2.5">
            <div className="flex flex-shrink-0 items-start gap-2.5">
              <p className="whitespace-nowrap text-base font-black leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
                {task}
              </p>
              <div className="flex flex-shrink-0 items-start overflow-hidden rounded bg-black px-2">
                <p className="whitespace-nowrap text-base font-medium leading-[23px] tracking-[0.01px] text-white">
                  Up Next!
                </p>
              </div>
            </div>
            <p className="text-sm font-medium leading-[23px] tracking-[0.01px] text-[rgb(148,_148,_148)]">
              {time}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};
