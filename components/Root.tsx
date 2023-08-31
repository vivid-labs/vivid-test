import combo from "./combo.png";
import vector_2 from "./vector_2.svg";
import polygon_1 from "./polygon_1.svg";
import polygon_2 from "./polygon_2.svg";
import star_1 from "./star_1.svg";
import line_1 from "./line_1.svg";
import group_1 from "./group_1.svg";
import flipCrop from "./flipCrop.png";
import { Component } from "./Component";
export const Root = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div
      className="flex flex-col items-start gap-2 w-full p-2 font-[Arial]"
      style={override}
    >
      <div className="flex items-start gap-2">
        <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div className="[rotate:-9deg] w-[30px] h-[30px] bg-[rgb(191,_43,_43)]" />
          <div className="overflow-hidden w-[30px] h-[30px] bg-[rgb(191,_43,_43)]" />
          <div className="rounded w-[30px] h-[30px] bg-[rgb(191,_43,_43)]" />
          <div className="rounded-tl-[4px] rounded-tr-[5px] rounded-bl-[7px] rounded-br-[6px] w-[30px] h-[30px] bg-[rgb(191,_43,_43)]" />
        </div>
        <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div className="flex flex-col justify-center items-center w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden w-1 h-1 bg-white" />
          </div>
          <div className="flex justify-center items-center p-1 w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden h-full flex-1 min-w-0 bg-white" />
          </div>
          <div className="flex justify-center items-center p-1 w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden h-[5px] flex-1 min-w-0 bg-white" />
          </div>
          <div className="flex justify-center items-center p-1 w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden w-[5px] h-full bg-white" />
          </div>
          <div className="flex flex-col justify-center items-center p-1 bg-[rgb(191,_43,_43)]">
            <div className="overflow-hidden w-2.5 h-2.5 bg-white" />
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="flex flex-col items-start w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex items-start w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex justify-center items-start w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex justify-end items-end w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex justify-between items-center w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex items-start px-[5px] py-2.5 w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex items-start gap-[5px] w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex justify-between items-center pt-1.5 pr-2 pb-2.5 pl-1 w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex justify-center items-center gap-1 p-1 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
        </div>
        <div className="flex justify-center items-center gap-1 p-1 bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-3 bg-white" />
          <div className="overflow-hidden w-1 self-stretch bg-white" />
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div className="opacity-60 w-[30px] h-[30px] bg-[rgb(191,_43,_43)]" />
          <div className="w-[30px] h-[30px] bg-[rgba(191,_43,_43,_0.4)]" />
          <div
            className="w-[30px] h-[30px]"
            style={{
              background:
                "linear-gradient(rgba(36, 0, 255, 0.20), rgba(36, 0, 255, 0.20)), linear-gradient(rgba(191, 43, 43, 0.40), rgba(191, 43, 43, 0.40))",
            }}
          />
          <div className="w-[30px] h-[30px] border-solid border-[rgb(232,_149,_114)] border bg-[rgb(191,_43,_43)]" />
          <div className="w-[30px] h-[30px] border-solid border-[rgb(232,_149,_114)] border-[0.25rem] bg-[rgb(191,_43,_43)]" />
          <div className="w-[30px] h-[30px] border-solid border-[rgb(232,_149,_114)] border-t-[0.125rem] border-b-[0.25rem] border-l border-r-[3px] bg-[rgb(191,_43,_43)]" />
        </div>
        <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
          <div
            className="w-[30px] h-[30px] bg-[rgb(191,_43,_43)]"
            style={{
              boxShadow: "0px 4px 4px rgb(255, 255, 255)",
            }}
          />
          <div className="filter blur-[2px] w-[30px] h-[30px] bg-[rgb(191,_43,_43)]" />
          <div
            className="w-[30px] h-[30px] bg-[rgb(191,_43,_43)]"
            style={{
              boxShadow: "inset 0px 4px 4px rgb(0, 0, 0)",
            }}
          />
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(235deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "radial-gradient(rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "conic-gradient(from 180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "conic-gradient(from 216deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(191, 43, 43, 0.50) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "conic-gradient(from 180deg, rgb(36, 0, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 255, 0, 0.20) 0%, rgba(216, 15, 15, 0.00) 100%), linear-gradient(180deg, rgb(191, 43, 43, 0.50) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <p className="text-white text-[8px] font-normal">Lorem </p>
        <p
          className="text-transparent bg-clip-text text-[8px] font-normal"
          style={{
            background:
              "linear-gradient(180deg, rgb(255, 0, 0) 0%, rgba(255, 255, 255, 0.00) 100%), conic-gradient(from 180deg, rgb(0, 66, 255, 0.60) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(0, 255, 41, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        >
          Lorem{" "}
        </p>
        <p className="text-white text-[8px] font-normal">Lorem </p>
        <p className="text-white text-[8px] font-[Times_New_Roman] font-normal">
          Lorem
        </p>
        <p className="text-white text-[8px] italic font-normal">Lorem</p>
        <p className="text-white text-[8px] font-bold">Lorem</p>
        <p className="text-white text-[8px] italic font-bold">Lorem</p>
        <p className="text-white text-base font-normal">Lorem </p>
        <p className="text-white text-[8px] font-normal tracking-[0.3em]">
          Lorem{" "}
        </p>
        <p className="text-white text-[8px] font-normal leading-[15px]">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="text-white text-[8px] font-normal leading-[0px]">Lorem</p>
        <p className="text-white text-[8px] font-normal">
          Lorem
          <br />
          Ipsum
        </p>
        <p className="text-white text-[8px] font-normal underline">Lorem </p>
        <p className="text-white text-[8px] font-normal line-through">Lorem </p>
        <p className="text-white text-[8px] font-normal">Lorem </p>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="w-[30px] h-[30px] bg-[rgb(191,_43,_43)]" />
        <div className="w-2.5 self-stretch bg-[rgb(191,_43,_43)]" />
        <div
          className="[rotate:-80.6deg] w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="[rotate:123.5deg] w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div className="[rotate:0deg] w-[30px] h-[30px] bg-[rgb(191,_43,_43)] rounded-lg" />
        <div className="[rotate:0deg] w-[30px] h-[30px] bg-[rgb(191,_43,_43)] rounded-tl-[2px] rounded-tr-[4px] rounded-bl-[8px] rounded-br-[6px]" />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(rgba(5, 0, 255, 0.50), rgba(5, 0, 255, 0.50)), linear-gradient(rgba(255, 0, 0, 0.52), rgba(255, 0, 0, 0.52))",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        />
        <div className="w-[30px] h-[30px] bg-[rgb(191,_43,_43)] border-solid border-[rgb(232,_149,_114)] border-[0.25rem]" />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        />
        <div className="w-[30px] h-[30px] bg-[rgba(36,_255,_0,_0.79)]" />
        <div
          className="w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(rgba(255, 0, 0, 0.49), rgba(255, 0, 0, 0.49)), linear-gradient(rgba(36, 255, 0, 0.79), rgba(36, 255, 0, 0.79))",
          }}
        />
        <img className="w-[30px] h-[30px] object-cover" src={combo.src} />
        <div className="w-[30px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
            }}
            src={combo.src}
          />
        </div>
        <div className="relative w-[30px] h-[30px] overflow-hidden">
          <img
            className="object-cover absolute h-full w-full"
            src={combo.src}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
            }}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(10.87deg) scale(96.46%, 34.74%) translate(2.9%, -4.12%)",
            }}
          />
        </div>
        <div className="relative w-[30px] h-[30px] overflow-hidden">
          <div className="bg-[rgb(0,_255,_255)] absolute h-full w-full" />
          <img
            className="object-cover opacity-50 absolute h-full w-full"
            src={combo.src}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
            }}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(10.87deg) scale(96.46%, 34.74%) translate(2.9%, -4.12%)",
            }}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div
          className="overflow-hidden w-[30px] h-[31px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        />
        <div
          className="overflow-hidden w-[30px] h-[31px]"
          style={{
            background:
              "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        />
        <div className="overflow-hidden w-[30px] h-[31px] bg-[rgba(36,_255,_0,_0.79)]" />
        <div
          className="overflow-hidden w-[30px] h-[31px]"
          style={{
            background:
              "linear-gradient(rgba(255, 0, 0, 0.49), rgba(255, 0, 0, 0.49)), linear-gradient(rgba(36, 255, 0, 0.79), rgba(36, 255, 0, 0.79))",
          }}
        />
        <div className="overflow-hidden relative w-[30px] h-[31px]">
          <img
            className="object-cover absolute h-full w-full"
            src={combo.src}
          />
        </div>
        <div className="overflow-hidden relative w-[30px] h-[31px]">
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden relative w-[30px] h-[31px]">
          <img
            className="object-cover absolute h-full w-full"
            src={combo.src}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
            }}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(10.87deg) scale(96.46%, 34.74%) translate(2.9%, -4.12%)",
            }}
          />
        </div>
        <div className="overflow-hidden relative w-[30px] h-[31px]">
          <div className="bg-[rgb(0,_255,_255)] absolute h-full w-full" />
          <img
            className="object-cover opacity-50 absolute h-full w-full"
            src={combo.src}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "conic-gradient(from 180deg, rgb(36, 255, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(-71.88deg) scale(96.46%, 34.74%) translate(-78.4%, 135.5%)",
            }}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "radial-gradient(rgb(82, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
          <img
            className="origin-top-left absolute h-full w-full"
            src={combo.src}
            style={{
              transform:
                "rotate(10.87deg) scale(96.46%, 34.74%) translate(2.9%, -4.12%)",
            }}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "linear-gradient(180deg, rgb(255, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          />
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="overflow-hidden relative w-[34px] h-[34px] bg-[rgb(191,_43,_43)]">
          <p className="absolute w-[13px] left-[11px] h-2.5 top-[11.11px] text-white text-xs font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative [rotate:36.6deg] w-[34px] h-[34px] bg-[rgb(191,_43,_43)]">
          <p className="absolute w-[13px] left-[11px] h-2.5 top-[11.11px] text-white text-xs font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative [rotate:128.5deg] w-[34px] h-[34px] bg-[rgb(191,_43,_43)]">
          <p className="absolute w-[13px] left-[11px] h-2.5 top-[11.11px] text-white text-xs font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative [rotate:-141.9deg] w-[34px] h-[34px] bg-[rgb(191,_43,_43)]">
          <p className="absolute w-[13px] left-[11px] h-2.5 top-[11.11px] text-white text-xs font-[Inter] font-normal">
            T
          </p>
        </div>
        <div className="overflow-hidden relative [rotate:-51.3deg] w-[34px] h-[34px] bg-[rgb(191,_43,_43)]">
          <p className="absolute w-[13px] left-[11px] h-2.5 top-[11.11px] text-white text-xs font-[Inter] font-normal">
            T
          </p>
        </div>
        <div
          className="[rotate:0deg] w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
        <div
          className="[rotate:50.6deg] w-[30px] h-[30px]"
          style={{
            background:
              "linear-gradient(180deg, rgb(191, 43, 43) 0%, rgba(191, 43, 43, 0.00) 100%)",
          }}
        />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <p className="text-white text-[8px] font-normal">Lorem </p>
        <p className="w-[34px] text-white text-[8px] font-normal">
          Lorem Ipsum{" "}
        </p>
        <p className="w-8 h-5 text-white text-[8px] font-normal">Lorem </p>
        <p className="overflow-ellipsis overflow-hidden w-[19px] h-4 text-white text-[8px] font-normal">
          Lorem{" "}
        </p>
        <p className="w-9 text-white text-[8px] font-normal">Lorem </p>
        <p className="w-[33px] text-white text-[8px] font-normal">Lorem </p>
        <p className="w-[33px] text-white text-[8px] font-normal">
          Lor em Ips um
        </p>
        <p className="w-[33px] h-5 text-white text-[8px] font-normal">Lorem </p>
        <p className="w-[33px] h-5 text-white text-[8px] font-normal">Lorem </p>
        <p className="w-[33px] h-5 text-white text-[8px] font-normal">Lorem </p>
        <p className="[filter:blur(1px)_drop-shadow(0px_4px_2px_rgb(255,_0,_0))] text-white text-[8px] font-normal">
          Lorem{" "}
        </p>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm relative border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <img className="w-[25px] h-[35px]" src={vector_2.src} />
        <img className="w-[25px] h-[35px]" src={vector_2.src} />
        <img className="w-[19px] h-[51px]" src={polygon_1.src} />
        <img className="w-[19px] h-[51px]" src={polygon_2.src} />
        <img className="w-[41px] h-[21px]" src={star_1.src} />
        <img className="[rotate:-37.3deg] w-12 h-0" src={line_1.src} />
        <img className="[rotate:25.5deg] w-[38px] h-10" src={group_1.src} />
        <p className="w-[33px] h-[21px] text-white text-[6px] font-[Inter] font-semibold">
          To prevent grouping
        </p>
      </div>
      <div className="flex items-center gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <img className="w-8 h-10 object-cover" src={flipCrop.src} />
        <img className="w-8 h-10 object-contain" src={flipCrop.src} />
        <img className="w-8 h-10 object-none" src={flipCrop.src} />
        <img
          className="opacity-80 [rotate:-9deg] w-8 h-10 object-cover border-solid border-[rgb(226,_19,_19)] border rounded-lg"
          style={{
            boxShadow: "0px 4px 4px rgb(255, 255, 255)",
          }}
          src={flipCrop.src}
        />
        <img
          className="w-[83px] h-[45px] object-cover border-solid border-[rgb(255,_0,_0)] border rounded-[50%]"
          src={flipCrop.src}
        />
      </div>
      <div className="flex items-center gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="w-[27px] h-[27px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform: "scale(100%, 98.37%) translate(0%, 0%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform: "scale(25.93%, 100%) translate(142.86%, 0%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform: "scale(109.91%, 16.85%) translate(-2.8%, 230.97%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[27px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(45.45deg) scale(109.05%, 18.66%) translate(16.85%, -49.42%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform: "scale(109.91%, 100%) translate(60.37%, 0%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform: "scale(109.91%, 100%) translate(-4.51%, -81.14%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(42.3deg) scale(114.97%, 104.61%) translate(17.52%, -46.81%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(137.7deg) scale(114.97%, 104.61%) translate(-46.81%, -117.52%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(-137.7deg) scale(114.97%, 104.61%) translate(-117.52%, -53.19%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(-42.3deg) scale(114.97%, 104.61%) translate(-53.19%, 17.52%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(0deg) scale(109.91%, 100%) translate(-4.51%, 0%)",
            }}
            src={flipCrop.src}
          />
        </div>
        <div className="w-[27px] h-[30px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(-26.7deg) scale(40.31%, 186.1%) translate(35.17%, 17.99%)",
            }}
            src={flipCrop.src}
          />
        </div>
      </div>
      <div className="flex items-center gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <img className="w-[27px] h-[27px] object-cover" src={flipCrop.src} />
        <img
          className="w-[27px] h-[27px] object-cover"
          style={{
            transform: "scale(-100%, 100%)",
          }}
          src={flipCrop.src}
        />
        <img
          className="[rotate:-180deg] w-[27px] h-[27px] object-cover"
          style={{
            transform: "scale(-100%, 100%)",
          }}
          src={flipCrop.src}
        />
        <img
          className="[rotate:180deg] w-[27px] h-[27px] object-cover"
          src={flipCrop.src}
        />
        <div className="w-[27px] h-[27px] origin-top-left overflow-hidden">
          <img
            className="origin-top-left h-full w-full"
            style={{
              transform:
                "rotate(51.94deg) scale(55.72%, 84.75%) translate(85.01%, -60.09%)",
            }}
            src={flipCrop.src}
          />
        </div>
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <Component />
        <Component
          override={{
            borderWidth: "4px",
            borderColor: "rgb(105, 135, 240)",
            borderRadius: "10px",
            backgroundColor: "rgb(255, 18, 18)",
            boxShadow: "0px 4px 4px rgb(0, 255, 71)",
            rotate: "38.9deg",
            overflow: "visible",
          }}
        />
      </div>
      <div className="flex items-start gap-[5px] p-[5px] rounded-sm border-solid border-[rgb(75,_75,_75)] border bg-[rgb(15,_15,_15)]">
        <div className="flex flex-col items-start relative w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden absolute w-1 left-2.5 h-1 top-1 bg-white" />
        </div>
        <div className="flex items-start relative w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden absolute w-1 right-[22px] h-1 bottom-4 bg-white" />
        </div>
        <div className="flex justify-center items-start relative w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden absolute left-2 right-[9px] w-auto top-[12.62px] bottom-[13.38px] h-auto bg-white" />
        </div>
        <div className="flex justify-end items-end relative w-[30px] h-[30px] bg-[rgb(191,_43,_43)]">
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden w-1 h-1 bg-white" />
          <div className="overflow-hidden absolute left-[43.33%] right-[43.33%] w-[13.33%] top-[42.06%] bottom-[44.61%] h-[13.33%] bg-white" />
        </div>
      </div>
    </div>
  );
};
