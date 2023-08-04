import { DragHandle } from "./DragHandle";
import { Delete } from "./Delete";
import React from "react";
export const ComponentCard = ({
  override,
  colors,
  size,
  draggable,
  instance,
  text,
}: {
  override?: any;
  colors: string;
  size: string;
  draggable: boolean;
  instance: React.ReactNode;
  text: string;
}) => {
  if (colors === "Figma" && size === "Small") {
    return (
      <div
        className="flex flex-col items-center overflow-hidden rounded-sm border border-solid border-[rgb(68,_68,_68)] bg-[rgb(68,_68,_68)]"
        style={override}
      >
        <div className="flex h-[75px] w-full flex-shrink-0 flex-col items-center justify-center gap-0.5 px-[5px] pb-1 pt-0.5">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                borderColor: "rgb(0, 0, 0)",
                overflow: "visible",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden bg-[rgb(30,_30,_30)] px-2.5 py-1">
          <p className="whitespace-nowrap text-xs font-normal text-white">
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Small") {
    return (
      <div
        className="flex flex-col items-center overflow-hidden rounded-sm border border-solid border-zinc-700 bg-zinc-700"
        style={override}
      >
        <div className="relative flex h-[75px] w-full flex-shrink-0 flex-col items-center justify-center px-[5px]">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
                top: "2px",
                left: "calc(50% - 4px)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden bg-zinc-900 px-2.5 py-1">
          <p className="whitespace-nowrap text-xs font-normal text-neutral-50">
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Figma" && size === "Large") {
    return (
      <div
        className="flex flex-col items-center overflow-hidden rounded-sm border border-solid border-[rgb(68,_68,_68)] bg-[rgb(68,_68,_68)]"
        style={override}
      >
        <div className="relative flex h-[88px] w-full flex-shrink-0 flex-col items-center justify-center px-[5px]">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
                top: "3px",
                left: "calc(50% - 4px)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden bg-[rgb(30,_30,_30)] px-2.5 py-1">
          <p className="whitespace-nowrap text-xs font-normal text-white">
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Large") {
    return (
      <div
        className="flex flex-col items-center overflow-hidden rounded-sm border border-solid border-zinc-700 bg-zinc-700"
        style={override}
      >
        <div className="relative flex h-[88px] w-full flex-shrink-0 flex-col items-center justify-center px-[5px]">
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
                top: "3px",
                left: "calc(50% - 4px)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden bg-zinc-900 px-2.5 py-1">
          <p className="whitespace-nowrap text-xs font-normal text-neutral-50">
            {text}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
