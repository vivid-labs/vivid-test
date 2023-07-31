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
      style={override}
      className="flex flex-col items-start gap-[8px] w-full p-[8px] relative flex-shrink-0"
    >
      <div className="flex items-start gap-[8px] relative flex-shrink-0">
        <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div className="w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
          <div className="overflow-hidden w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
          <div className="rounded-[4px] w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
          <div className="rounded-tl-[4px] rounded-tr-[5px] rounded-bl-[7px] rounded-br-[6px] w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
        </div>
        <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div className="flex flex-col justify-center items-center relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          </div>
          <div className="flex justify-center items-center p-[4px] relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden h-full flex-shrink-0 flex-1 min-w-0 bg-[rgb(255,_255,_255)]" />
          </div>
          <div className="flex justify-center items-center p-[4px] relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden h-[5px] flex-shrink-0 flex-1 min-w-0 bg-[rgb(255,_255,_255)]" />
          </div>
          <div className="flex justify-center items-center p-[4px] relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden w-[5px] h-full flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          </div>
          <div className="flex flex-col justify-center items-center p-[4px] relative flex-shrink-0 bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden w-[10px] h-[10px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="flex flex-col items-start relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex items-start relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-center items-start relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-end items-end relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-between items-center relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex items-start px-[5px] py-[10px] relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex items-start gap-[5px] relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-between items-center pt-[6px] pr-2 pb-[10px] pl-1 relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-center items-center gap-[4px] p-[4px] relative flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-center items-center gap-[4px] p-[4px] relative flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[12px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] flex-shrink-0 self-stretch bg-[rgb(255,_255,_255)]" />
        </div>
      </div>
      <div className="flex items-start gap-[8px] relative flex-shrink-0">
        <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div className="opacity-60 w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
          <div className="w-[30px] h-[30px] flex-shrink-0" />
          <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(rgb(36,_0,_255,_0.2),_rgb(36,_0,_255,_0.2)),_linear-gradient(rgb(191,_43,_43,_0.4),_rgb(191,_43,_43,_0.4))]" />
          <div className="w-[30px] h-[30px] flex-shrink-0 border-solid border-[rgb(232,_149,_114)] border bg-[rgb(191,_43,_43)]" />
          <div className="w-[30px] h-[30px] flex-shrink-0 border-solid border-[rgb(232,_149,_114)] border-4 bg-[rgb(191,_43,_43)]" />
          <div className="w-[30px] h-[30px] flex-shrink-0 border-solid border-[rgb(232,_149,_114)] border-t-2 border-b-4 border-l border-r-[3px] bg-[rgb(191,_43,_43)]" />
        </div>
        <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div className="[box-shadow:0px_4px_4px_rgb(255,_255,_255,_1)] w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
          <div className="filter blur-[2px] w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
          <div className="[box-shadow:inset_0px_4px_4px_rgb(0,_0,_0,_1)] w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_235deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[radial-gradient(rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[radial-gradient(rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[radial-gradient(rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[conic-gradient(_from_216deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43,_0.5)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_0,_255,_0.2)_0%,_rgb(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_255,_0,_0.2)_0%,_rgb(216,_15,_15,_0)_100%),_linear-gradient(180deg,_rgb(191,_43,_43,_0.5)_0%,_rgb(191,_43,_43,_0)_100%)]" />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_1)_0%,_rgb(255,_255,_255,_0)_100%_),_conic-gradient(from_180deg,_rgb(0,_66,_255,_0.6)_0%,_rgb(0,_0,_0,_0)_100%),_radial-gradient(_rgb(0,_255,_41,_0.5)_0%,_rgb(0,_0,_0,_0)_100%,_rgb(0,_0,_0,_0)_100%_)] text-transparent bg-clip-text text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Times_New_Roman] font-normal">
          Lorem
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] italic font-normal">
          Lorem
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-bold">
          Lorem
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] italic font-bold">
          Lorem
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[16px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal tracking-[0.3em]">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal leading-[15px]">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal leading-[0px]">
          Lorem
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal underline">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal line-through">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgb(0,_0,_0,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgb(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgb(0,_0,_0,_0)_100%),_linear-gradient(180deg,_rgb(255,_0,_0,_0.9)_0%,_rgb(0,_0,_0,_0)_100%)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(rgb(255,_0,_0,_0.49),_rgb(255,_0,_0,_0.49)),_linear-gradient(rgb(36,_255,_0,_0.79),_rgb(36,_255,_0,_0.79))]" />
        <img
          src={combo.src}
          className="w-[30px] h-[30px] flex-shrink-0 object-cover"
        />
        <div className="w-[30px] h-[30px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={combo.src}
            className="transform -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] -translate-x-[78.4%] translate-y-[135.5%] origin-top-left h-full w-full"
          />
        </div>
        <div className="relative w-[30px] h-[30px] flex-shrink-0 overflow-hidden">
          <img
            src={combo.src}
            className="object-cover absolute h-full w-full"
          />
          <img
            src={combo.src}
            className="transform -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] -translate-x-[78.4%] translate-y-[135.5%] origin-top-left absolute h-full w-full"
          />
          <img
            src={combo.src}
            className="transform rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] translate-x-[2.9%] -translate-y-[4.12%] origin-top-left absolute h-full w-full"
          />
        </div>
        <div className="relative w-[30px] h-[30px] flex-shrink-0 overflow-hidden">
          <div className="bg-[rgb(0,_255,_255)] absolute h-full w-full" />
          <img
            src={combo.src}
            className="object-cover opacity-50 absolute h-full w-full"
          />
          <div className="bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgb(0,_0,_0,_0)_100%_)] absolute h-full w-full" />
          <img
            src={combo.src}
            className="transform -rotate-[71.88deg] scale-x-[96.46%] scale-y-[34.74%] -translate-x-[78.4%] translate-y-[135.5%] origin-top-left absolute h-full w-full"
          />
          <div className="bg-[radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgb(0,_0,_0,_0)_100%)] absolute h-full w-full" />
          <img
            src={combo.src}
            className="transform rotate-[10.87deg] scale-x-[96.46%] scale-y-[34.74%] translate-x-[2.9%] -translate-y-[4.12%] origin-top-left absolute h-full w-full"
          />
          <div className="bg-[linear-gradient(_180deg,_rgb(255,_0,_0,_0.9)_0%,_rgb(0,_0,_0,_0)_100%_)] absolute h-full w-full" />
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]" />
        <div className="w-[10px] flex-shrink-0 self-stretch bg-[rgb(191,_43,_43)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)] rounded-[8px]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)] rounded-tl-[2px] rounded-tr-[4px] rounded-bl-[8px] rounded-br-[6px]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(rgb(5,_0,_255,_0.5),_rgb(5,_0,_255,_0.5)),_linear-gradient(rgb(255,_0,_0,_0.52),_rgb(255,_0,_0,_0.52))]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[conic-gradient(_from_180deg,_rgb(36,_255,_0,_0.4)_0%,_rgb(0,_0,_0,_0)_100%_),_radial-gradient(rgb(82,_0,_255,_0.8)_0%,_rgb(0,_0,_0,_0)_100%),_linear-gradient(180deg,_rgb(255,_0,_0,_0.9)_0%,_rgb(0,_0,_0,_0)_100%)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)] border-solid border-[rgb(232,_149,_114)] border-4" />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="overflow-hidden relative w-[34px] h-[34px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <p className="text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative w-[34px] h-[34px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <p className="text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative w-[34px] h-[34px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <p className="text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative w-[34px] h-[34px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <p className="text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative w-[34px] h-[34px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <p className="text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
        <div className="w-[30px] h-[30px] flex-shrink-0 bg-[linear-gradient(_180deg,_rgb(191,_43,_43,_1)_0%,_rgb(191,_43,_43,_0)_100%_)]" />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <p className="whitespace-nowrap text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem Ipsum{" "}
        </p>
        <p className="text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="overflow-ellipsis overflow-hidden text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lor em Ips um
        </p>
        <p className="text-justify text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="text-justify flex flex-col justify-center text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="text-justify flex flex-col text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
        <p className="whitespace-nowrap text-justify [filter:blur(1px)_drop-shadow(0px_4px_2px_rgb(255,_0,_0,_1))] text-[rgb(255,_255,_255)] text-[8px] font-[Arial] font-normal">
          Lorem{" "}
        </p>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <img src={vector_2.src} className="w-[25px] h-[35px] flex-shrink-0" />
        <img src={vector_2.src} className="w-[25px] h-[35px] flex-shrink-0" />
        <img src={polygon_1.src} className="w-[19px] h-[51px] flex-shrink-0" />
        <img src={polygon_2.src} className="w-[19px] h-[51px] flex-shrink-0" />
        <img src={star_1.src} className="w-[41px] h-[21px] flex-shrink-0" />
        <img src={line_1.src} className="w-[47.8px] h-0 flex-shrink-0" />
        <img src={group_1.src} className="w-[38px] h-[39.73px] flex-shrink-0" />
        <p className="text-center flex flex-col justify-center text-[rgb(255,_255,_255)] text-[6px] font-[Inter] font-semibold">
          To prevent grouping
        </p>
      </div>
      <div className="flex items-center gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <img
          src={flipCrop.src}
          className="w-[32px] h-[40px] flex-shrink-0 object-cover"
        />
        <img
          src={flipCrop.src}
          className="w-[32px] h-[40px] flex-shrink-0 object-contain"
        />
        <img
          src={flipCrop.src}
          className="w-[32px] h-[40px] flex-shrink-0 object-none"
        />
        <img
          src={flipCrop.src}
          className="[box-shadow:0px_4px_4px_rgb(255,_255,_255,_1)] opacity-80 w-[32px] h-[40px] flex-shrink-0 object-cover border-solid border-[rgb(226,_19,_19)] border rounded-[8px]"
        />
        <img
          src={flipCrop.src}
          className="w-[82.86px] h-[44.51px] flex-shrink-0 object-cover border-solid border-[rgb(255,_0,_0)] border rounded-[50%]"
        />
      </div>
      <div className="flex items-center gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="w-[27px] h-[27.45px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform scale-x-[100%] scale-y-[98.37%] translate-x-[0%] translate-y-[0%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform scale-x-[25.93%] scale-y-[100%] translate-x-[142.86%] translate-y-[0%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform scale-x-[109.91%] scale-y-[16.85%] -translate-x-[2.8%] translate-y-[230.97%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[26.58px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform rotate-[45.45deg] scale-x-[109.05%] scale-y-[18.66%] translate-x-[16.85%] -translate-y-[49.42%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform scale-x-[109.91%] scale-y-[100%] translate-x-[60.37%] translate-y-[0%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform scale-x-[109.91%] scale-y-[100%] -translate-x-[4.51%] -translate-y-[81.14%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%] translate-x-[17.52%] -translate-y-[46.81%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%] -translate-x-[46.81%] -translate-y-[117.52%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform -rotate-[137.7deg] scale-x-[114.97%] scale-y-[104.61%] -translate-x-[117.52%] -translate-y-[53.19%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform -rotate-[42.3deg] scale-x-[114.97%] scale-y-[104.61%] -translate-x-[53.19%] translate-y-[17.52%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform rotate-0 scale-x-[109.91%] scale-y-[100%] -translate-x-[4.51%] translate-y-[0%] origin-top-left h-full w-full"
          />
        </div>
        <div className="w-[27px] h-[29.68px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform -rotate-[26.7deg] scale-x-[40.31%] scale-y-[186.1%] translate-x-[35.17%] translate-y-[17.99%] origin-top-left h-full w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <img
          src={flipCrop.src}
          className="w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        />
        <img
          src={flipCrop.src}
          className="transform scale-x-[-100%] scale-y-[100%] w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        />
        <img
          src={flipCrop.src}
          className="transform scale-x-[-100%] scale-y-[100%] w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        />
        <img
          src={flipCrop.src}
          className="w-[27px] h-[27.45px] flex-shrink-0 object-cover"
        />
        <div className="w-[27px] h-[27.45px] flex-shrink-0 origin-top-left overflow-hidden">
          <img
            src={flipCrop.src}
            className="transform rotate-[51.94deg] scale-x-[55.72%] scale-y-[84.75%] translate-x-[85.01%] -translate-y-[60.09%] origin-top-left h-full w-full"
          />
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <Component />
        <Component
          override={{
            borderWidth: "4px",
            borderColor: "rgb(105, 135, 240)",
            borderRadius: "10px",
            backgroundColor: "rgb(255, 18, 18)",
            boxShadow: "0px 4px 4px  rgb(0, 255, 71, 1.00)",
            rotate: "38.9deg",
            overflow: "visible",
          }}
        />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-[2px] relative flex-shrink-0 border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="flex flex-col items-start relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden absolute w-[4px] left-[10px] h-[4px] top-[4px] bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex items-start relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden absolute w-[4px] right-[22px] h-[4px] bottom-[16px] bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-center items-start relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden absolute left-[8px] right-[9px] w-auto top-[12.62px] bottom-[13.38px] h-auto bg-[rgb(255,_255,_255)]" />
        </div>
        <div className="flex justify-end items-end relative w-[30px] h-[30px] flex-shrink-0 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden w-[4px] h-[4px] flex-shrink-0 bg-[rgb(255,_255,_255)]" />
          <div className="overflow-hidden absolute left-[43.33%] right-[43.33%] w-[13.33%] top-[42.06%] bottom-[44.61%] h-[13.33%] bg-[rgb(255,_255,_255)]" />
        </div>
      </div>
    </div>
  );
};
