import combo from "./combo.png";
import vector_2 from "./vector_2.svg";
import polygon_1 from "./polygon_1.svg";
import polygon_2 from "./polygon_2.svg";
import star_1 from "./star_1.svg";
import line_1 from "./line_1.svg";
import group_1 from "./group_1.svg";
import flipCrop from "./flipCrop.png";
import { Component } from "./Component";
export const Root = ({ override }: { override?: any }) => {
  return (
    <div
      className="flex w-full flex-shrink-0 flex-col items-start gap-2 p-2 font-[Arial]"
      style={override}
    >
      <div className="flex flex-shrink-0 items-start gap-2">
        <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
          <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 overflow-hidden bg-[rgb(191,_43,_43)]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 rounded bg-[rgb(191,_43,_43)]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 rounded-bl-[7px] rounded-br-[6px] rounded-tl-[4px] rounded-tr-[5px] bg-[rgb(191,_43,_43)]" />
        </div>
        <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
          <div className="flex h-[30px] w-[30px] flex-shrink-0 flex-col items-center justify-center bg-[rgb(191,_43,_43)]">
            <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          </div>
          <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center bg-[rgb(191,_43,_43)] p-1">
            <div className="h-full min-w-0 flex-1 flex-shrink-0 overflow-hidden bg-white" />
          </div>
          <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center bg-[rgb(191,_43,_43)] p-1">
            <div className="h-[5px] min-w-0 flex-1 flex-shrink-0 overflow-hidden bg-white" />
          </div>
          <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center bg-[rgb(191,_43,_43)] p-1">
            <div className="h-full w-[5px] flex-shrink-0 overflow-hidden bg-white" />
          </div>
          <div className="flex flex-shrink-0 flex-col items-center justify-center bg-[rgb(191,_43,_43)] p-1">
            <div className="h-2.5 w-2.5 flex-shrink-0 overflow-hidden bg-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="flex h-[30px] w-[30px] flex-shrink-0 flex-col items-start bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex h-[30px] w-[30px] flex-shrink-0 items-start bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex h-[30px] w-[30px] flex-shrink-0 items-start justify-center bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex h-[30px] w-[30px] flex-shrink-0 items-end justify-end bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-between bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex h-[30px] w-[30px] flex-shrink-0 items-start bg-[rgb(191,_43,_43)] px-[5px] py-2.5">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex h-[30px] w-[30px] flex-shrink-0 items-start gap-[5px] bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-between bg-[rgb(191,_43,_43)] pb-2.5 pl-1 pr-2 pt-1.5">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex flex-shrink-0 items-center justify-center gap-1 bg-[rgb(191,_43,_43)] p-1">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
        </div>
        <div className="flex flex-shrink-0 items-center justify-center gap-1 bg-[rgb(191,_43,_43)] p-1">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-3 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="w-1 flex-shrink-0 self-stretch overflow-hidden bg-white" />
        </div>
      </div>
      <div className="flex flex-shrink-0 items-start gap-2">
        <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
          <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)] opacity-60" />
          <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgba(191,_43,_43,_0.4)]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(rgba(36,_0,_255,_0.2),_rgba(36,_0,_255,_0.2)),_linear-gradient(rgba(191,_43,_43,_0.4),_rgba(191,_43,_43,_0.4))]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 border border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 border-[0.25rem] border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 border-b-[0.25rem] border-l border-r-[3px] border-t-[0.125rem] border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
        </div>
        <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
          <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)] [box-shadow:0px_4px_4px_rgb(255,_255,_255)]" />
          <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)] blur-[2px] filter" />
          <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)] [box-shadow:inset_0px_4px_4px_rgb(0,_0,_0)]" />
        </div>
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_235deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[radial-gradient(rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[radial-gradient(rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[radial-gradient(rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[conic-gradient(_from_216deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43,_0.5)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_0,_255,_0.2)_0%,_rgba(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_255,_0,_0.2)_0%,_rgba(216,_15,_15,_0)_100%),_linear-gradient(180deg,_rgb(191,_43,_43,_0.5)_0%,_rgba(191,_43,_43,_0)_100%)]" />
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <p className="whitespace-nowrap text-[8px] font-normal text-white">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap bg-[linear-gradient(_180deg,_rgb(255,_0,_0)_0%,_rgba(255,_255,_255,_0)_100%_),_conic-gradient(from_180deg,_rgb(0,_66,_255,_0.6)_0%,_rgba(0,_0,_0,_0)_100%),_radial-gradient(_rgb(0,_255,_41,_0.5)_0%,_rgba(0,_0,_0,_0)_100%,_rgba(0,_0,_0,_0)_100%_)] bg-clip-text text-[8px] font-normal text-transparent">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal text-white">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-[8px] font-[Times_New_Roman] font-normal text-white">
          Lorem
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal italic text-white">
          Lorem
        </p>
        <p className="whitespace-nowrap text-[8px] font-bold text-white">
          Lorem
        </p>
        <p className="whitespace-nowrap text-[8px] font-bold italic text-white">
          Lorem
        </p>
        <p className="whitespace-nowrap text-base font-normal text-white">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal tracking-[0.3em] text-white">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal leading-[15px] text-white">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal leading-[0px] text-white">
          Lorem
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal text-white">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal text-white underline">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal text-white line-through">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-[8px] font-normal text-white">
          Lorem{" "}
        </p>
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgba(0,_0,_0,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgba(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgba(0,_0,_0,_0)_100%),_linear-gradient(180deg,_rgb(255,_0,_0,_0.9)_0%,_rgba(0,_0,_0,_0)_100%)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgba(36,_255,_0,_0.79)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(rgba(255,_0,_0,_0.49),_rgba(255,_0,_0,_0.49)),_linear-gradient(rgba(36,_255,_0,_0.79),_rgba(36,_255,_0,_0.79))]" />
        <img
          className="h-[30px] w-[30px] flex-shrink-0 object-cover"
          src={combo.src}
        />
        <div className="h-[30px] w-[30px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
        </div>
        <div className="relative h-[30px] w-[30px] flex-shrink-0 overflow-hidden">
          <img
            className="absolute h-full w-full object-cover"
            src={combo.src}
          />
          <img
            className="absolute h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
          <img
            className="absolute h-full w-full origin-top-left -translate-y-[4.12%] translate-x-[2.9%] rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
        </div>
        <div className="relative h-[30px] w-[30px] flex-shrink-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[rgb(0,_255,_255)]" />
          <img
            className="absolute h-full w-full object-cover opacity-50"
            src={combo.src}
          />
          <div className="absolute h-full w-full bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgba(0,_0,_0,_0)_100%_)]" />
          <img
            className="absolute h-full w-full origin-top-left -translate-x-[78.4%] translate-y-[135.5%] -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
          <div className="absolute h-full w-full bg-[radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgba(0,_0,_0,_0)_100%)]" />
          <img
            className="absolute h-full w-full origin-top-left -translate-y-[4.12%] translate-x-[2.9%] rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] transform"
            src={combo.src}
          />
          <div className="absolute h-full w-full bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgba(0,_0,_0,_0)_100%_)]" />
        </div>
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
        <div className="w-2.5 flex-shrink-0 self-stretch bg-[rgb(191,_43,_43)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 rounded-lg bg-[rgb(191,_43,_43)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 rounded-bl-[8px] rounded-br-[6px] rounded-tl-[2px] rounded-tr-[4px] bg-[rgb(191,_43,_43)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(rgba(5,_0,_255,_0.5),_rgba(5,_0,_255,_0.5)),_linear-gradient(rgba(255,_0,_0,_0.52),_rgba(255,_0,_0,_0.52))]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgba(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgba(0,_0,_0,_0)_100%),_linear-gradient(180deg,_rgb(255,_0,_0,_0.9)_0%,_rgba(0,_0,_0,_0)_100%)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 border-[0.25rem] border-solid border-[rgb(232,_149,_114)] bg-[rgb(191,_43,_43)]" />
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="relative h-[34px] w-[34px] flex-shrink-0 overflow-hidden bg-[rgb(191,_43,_43)]">
          <p className="font-[Inter] text-xs font-normal text-white">T</p>
        </div>
        <div className="relative h-[34px] w-[34px] flex-shrink-0 overflow-hidden bg-[rgb(191,_43,_43)]">
          <p className="font-[Inter] text-xs font-normal text-white">T</p>
        </div>
        <div className="relative h-[34px] w-[34px] flex-shrink-0 overflow-hidden bg-[rgb(191,_43,_43)]">
          <p className="font-[Inter] text-xs font-normal text-white">T</p>
        </div>
        <div className="relative h-[34px] w-[34px] flex-shrink-0 overflow-hidden bg-[rgb(191,_43,_43)]">
          <p className="font-[Inter] text-xs font-normal text-white">T</p>
        </div>
        <div className="relative h-[34px] w-[34px] flex-shrink-0 overflow-hidden bg-[rgb(191,_43,_43)]">
          <p className="font-[Inter] text-xs font-normal text-white">T</p>
        </div>
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
        <div className="h-[30px] w-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43)_0%,_rgba(191,_43,_43,_0)_100%_)]" />
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <p className="whitespace-nowrap text-[8px] font-normal text-white">
          Lorem{" "}
        </p>
        <p className="text-[8px] font-normal text-white">Lorem Ipsum </p>
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <p className="overflow-hidden overflow-ellipsis text-[8px] font-normal text-white">
          Lorem{" "}
        </p>
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <p className="text-[8px] font-normal text-white">Lor em Ips um</p>
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <p className="text-[8px] font-normal text-white">Lorem </p>
        <p className="whitespace-nowrap text-[8px] font-normal text-white [filter:blur(1px)_drop-shadow(0px_4px_2px_rgb(255,_0,_0))]">
          Lorem{" "}
        </p>
      </div>
      <div className="relative flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <img className="h-[35px] w-[25px] flex-shrink-0" src={vector_2.src} />
        <img className="h-[35px] w-[25px] flex-shrink-0" src={vector_2.src} />
        <img className="h-[51px] w-[19px] flex-shrink-0" src={polygon_1.src} />
        <img className="h-[51px] w-[19px] flex-shrink-0" src={polygon_2.src} />
        <img className="h-[21px] w-[41px] flex-shrink-0" src={star_1.src} />
        <img className="h-0 w-12 flex-shrink-0" src={line_1.src} />
        <img className="h-10 w-[38px] flex-shrink-0" src={group_1.src} />
        <p className="font-[Inter] text-[6px] font-semibold text-white">
          To prevent grouping
        </p>
      </div>
      <div className="flex flex-shrink-0 items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <img
          className="h-10 w-8 flex-shrink-0 object-cover"
          src={flipCrop.src}
        />
        <img
          className="h-10 w-8 flex-shrink-0 object-contain"
          src={flipCrop.src}
        />
        <img
          className="h-10 w-8 flex-shrink-0 object-none"
          src={flipCrop.src}
        />
        <img
          className="h-10 w-8 flex-shrink-0 rounded-lg border border-solid border-[rgb(226,_19,_19)] object-cover opacity-80 [box-shadow:0px_4px_4px_rgb(255,_255,_255)]"
          src={flipCrop.src}
        />
        <img
          className="h-[45px] w-[83px] flex-shrink-0 rounded-[50%] border border-solid border-[rgb(255,_0,_0)] object-cover"
          src={flipCrop.src}
        />
      </div>
      <div className="flex flex-shrink-0 items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="h-[27px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left scale-y-[98.37%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left translate-x-[142.86%] scale-x-[25.93%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[2.8%] translate-y-[230.97%] scale-x-[109.91%] scale-y-[16.85%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[27px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-y-[49.42%] translate-x-[16.85%] rotate-[45.45deg] scale-x-[109.05%] scale-y-[18.66%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left translate-x-[60.37%] scale-x-[109.91%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[4.51%] -translate-y-[81.14%] scale-x-[109.91%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-y-[46.81%] translate-x-[17.52%] rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[46.81%] -translate-y-[117.52%] rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[117.52%] -translate-y-[53.19%] -rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[53.19%] translate-y-[17.52%] -rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-x-[4.51%] rotate-0 scale-x-[109.91%] transform"
            src={flipCrop.src}
          />
        </div>
        <div className="h-[30px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left translate-x-[35.17%] translate-y-[17.99%] -rotate-[26.7deg] scale-x-[40.31%] scale-y-[186.1%] transform"
            src={flipCrop.src}
          />
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <img
          className="h-[27px] w-[27px] flex-shrink-0 object-cover"
          src={flipCrop.src}
        />
        <img
          className="h-[27px] w-[27px] flex-shrink-0 scale-x-[-100%] transform object-cover"
          src={flipCrop.src}
        />
        <img
          className="h-[27px] w-[27px] flex-shrink-0 scale-x-[-100%] transform object-cover"
          src={flipCrop.src}
        />
        <img
          className="h-[27px] w-[27px] flex-shrink-0 object-cover"
          src={flipCrop.src}
        />
        <div className="h-[27px] w-[27px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            className="h-full w-full origin-top-left -translate-y-[60.09%] translate-x-[85.01%] rotate-[51.94deg] scale-x-[55.72%] scale-y-[84.75%] transform"
            src={flipCrop.src}
          />
        </div>
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <Component />
        <Component
          override={{
            borderWidth: "4px",
            borderColor: "rgb(105, 135, 240)",
            borderRadius: "10px",
            backgroundColor: "rgb(255, 18, 18)",
            boxShadow: "0px 4px 4px  rgb(0, 255, 71)",
            rotate: "38.9deg",
            overflow: "visible",
          }}
        />
      </div>
      <div className="flex flex-shrink-0 items-start gap-[5px] rounded-sm border border-solid border-[rgb(75,_75,_75)] bg-[rgb(15,_15,_15)] p-[5px]">
        <div className="relative flex h-[30px] w-[30px] flex-shrink-0 flex-col items-start bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="absolute left-2.5 top-1 h-1 w-1 overflow-hidden bg-white" />
        </div>
        <div className="relative flex h-[30px] w-[30px] flex-shrink-0 items-start bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="absolute bottom-4 right-[22px] h-1 w-1 overflow-hidden bg-white" />
        </div>
        <div className="relative flex h-[30px] w-[30px] flex-shrink-0 items-start justify-center bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="absolute bottom-[13.38px] left-2 right-[9px] top-[12.62px] h-auto w-auto overflow-hidden bg-white" />
        </div>
        <div className="relative flex h-[30px] w-[30px] flex-shrink-0 items-end justify-end bg-[rgb(191,_43,_43)]">
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="h-1 w-1 flex-shrink-0 overflow-hidden bg-white" />
          <div className="absolute bottom-[44.61%] left-[43.33%] right-[43.33%] top-[42.06%] h-[13.33%] w-[13.33%] overflow-hidden bg-white" />
        </div>
      </div>
    </div>
  );
};
