import { DragHandle } from "./DragHandle";
import { Delete } from "./Delete";
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
  instance: any;
  text: string;
}) => {
  if (colors === "Figma" && size === "Small") {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center rounded-[2px] relative border-solid border-[rgb(68,_68,_68)] border bg-[rgb(68,_68,_68)]"
        figma-id="1201:7652"
      >
        <div
          className="flex flex-col justify-center items-center gap-[2px] pt-[2px] px-[5px] pb-[4px] relative w-full h-[75px] flex-shrink-0"
          figma-id="1201:7653"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "relative",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          className="overflow-hidden flex justify-between items-center px-[10px] py-[4px] relative w-full flex-shrink-0 bg-[rgb(30,_30,_30)]"
          figma-id="1201:7656"
        >
          <p
            className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-normal"
            figma-id="1201:7657"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Small") {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center rounded-[2px] relative border-solid border-[rgb(63,_63,_70)] border bg-[rgb(63,_63,_70)]"
        figma-id="1201:7658"
      >
        <div
          className="flex flex-col justify-center items-center px-[5px] py-0 relative w-full h-[75px] flex-shrink-0"
          figma-id="1201:7659"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          className="overflow-hidden flex justify-between items-center px-[10px] py-[4px] relative w-full flex-shrink-0 bg-[rgb(24,_24,_27)]"
          figma-id="1201:7662"
        >
          <p
            className="whitespace-nowrap flex flex-col justify-center text-[rgb(250,_250,_250)] text-[12px] font-[Inter] font-normal"
            figma-id="1201:7663"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Figma" && size === "Large") {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center rounded-[2px] relative border-solid border-[rgb(68,_68,_68)] border bg-[rgb(68,_68,_68)]"
        figma-id="1201:7664"
      >
        <div
          className="flex flex-col justify-center items-center px-[5px] py-0 relative w-full h-[5.5rem] flex-shrink-0"
          figma-id="1201:7665"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          className="overflow-hidden flex justify-between items-center px-[10px] py-[4px] relative w-full flex-shrink-0 bg-[rgb(30,_30,_30)]"
          figma-id="1201:7668"
        >
          <p
            className="whitespace-nowrap flex flex-col justify-center text-[rgb(255,_255,_255)] text-[12px] font-[Inter] font-normal"
            figma-id="1201:7669"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else if (colors === "Zinc" && size === "Large") {
    return (
      <div
        style={override}
        className="overflow-hidden flex flex-col items-center rounded-[2px] relative border-solid border-[rgb(63,_63,_70)] border bg-[rgb(63,_63,_70)]"
        figma-id="1201:7670"
      >
        <div
          className="flex flex-col justify-center items-center px-[5px] py-0 relative w-full h-[5.5rem] flex-shrink-0"
          figma-id="1201:7671"
        >
          {draggable ? (
            <DragHandle
              override={{
                borderWidth: "1px",
                position: "absolute",
                borderColor: "rgb(0, 0, 0)",
              }}
            />
          ) : null}
          {draggable ? instance : null}
        </div>
        <div
          className="overflow-hidden flex justify-between items-center px-[10px] py-[4px] relative w-full flex-shrink-0 bg-[rgb(24,_24,_27)]"
          figma-id="1201:7674"
        >
          <p
            className="whitespace-nowrap flex flex-col justify-center text-[rgb(250,_250,_250)] text-[12px] font-[Inter] font-normal"
            figma-id="1201:7675"
          >
            {text}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
